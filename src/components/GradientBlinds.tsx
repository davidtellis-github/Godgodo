import { useEffect, useRef } from "react";

type Props = {
  gradientColors?: string[];
  angle?: number;
  noise?: number;
  blindCount?: number;
  blindMinWidth?: number;
  mouseDampening?: number;
  mirrorGradient?: boolean;
  spotlightRadius?: number;
  spotlightSoftness?: number;
  spotlightOpacity?: number;
  distortAmount?: number;
  shineDirection?: "left" | "right";
  style?: React.CSSProperties;
  className?: string;
};

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace("#", "");
  return [
    parseInt(clean.slice(0, 2), 16),
    parseInt(clean.slice(2, 4), 16),
    parseInt(clean.slice(4, 6), 16),
  ];
}

function lerpRgb(
  a: [number, number, number],
  b: [number, number, number],
  t: number
): string {
  const r = Math.round(a[0] + (b[0] - a[0]) * t);
  const g = Math.round(a[1] + (b[1] - a[1]) * t);
  const bl = Math.round(a[2] + (b[2] - a[2]) * t);
  return `rgb(${r},${g},${bl})`;
}

export default function GradientBlinds({
  gradientColors = ["#FF9FFC", "#100053"],
  angle = 20,
  blindCount = 16,
  mouseDampening = 0.15,
  mirrorGradient = false,
  spotlightRadius = 0.5,
  spotlightSoftness = 1,
  spotlightOpacity = 1,
  shineDirection = "left",
  style,
  className,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const targetRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const c1 = hexToRgb(gradientColors[0]);
    const c2 = hexToRgb(gradientColors[1]);

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      if (!W || !H) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      // Smooth mouse
      const m = mouseRef.current;
      const t = targetRef.current;
      m.x += (t.x - m.x) * mouseDampening;
      m.y += (t.y - m.y) * mouseDampening;

      ctx.clearRect(0, 0, W, H);

      // Tilt offset in pixels
      const tiltX = Math.tan((angle * Math.PI) / 180) * H;
      const dir = shineDirection === "left" ? 1 : -1;

      // Extend drawing slightly past canvas edges to cover tilt gaps
      const extra = Math.abs(tiltX);
      const totalW = W + extra;
      const bw = totalW / blindCount;

      for (let i = 0; i < blindCount + 1; i++) {
        const frac = i / Math.max(blindCount - 1, 1);
        const colorT = mirrorGradient
          ? i % 2 === 0 ? frac : 1 - frac
          : frac;
        const color = lerpRgb(c1, c2, Math.min(1, Math.max(0, colorT)));

        const xOff = -extra / 2 + i * bw;

        ctx.beginPath();
        ctx.moveTo(xOff,                       0);
        ctx.lineTo(xOff + bw,                  0);
        ctx.lineTo(xOff + bw + tiltX * dir,    H);
        ctx.lineTo(xOff       + tiltX * dir,   H);
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
      }

      // Spotlight overlay
      const sx = m.x * W;
      const sy = m.y * H;
      const radius = Math.max(W, H) * spotlightRadius;
      const softStop = Math.min(1, Math.max(0.01, spotlightSoftness));

      const spot = ctx.createRadialGradient(sx, sy, 0, sx, sy, radius);
      spot.addColorStop(0, `rgba(255,255,255,${spotlightOpacity * 0.22})`);
      spot.addColorStop(softStop, "rgba(255,255,255,0)");
      ctx.fillStyle = spot;
      ctx.fillRect(0, 0, W, H);

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [
    angle, blindCount, gradientColors, mirrorGradient,
    mouseDampening, shineDirection, spotlightOpacity,
    spotlightRadius, spotlightSoftness,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block", ...style }}
      className={className}
    />
  );
}
