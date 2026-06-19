import { useEffect } from "react";

export function useSmoothScroll() {
  useEffect(() => {
    const el = document.getElementById("scroll-container");
    if (!el) return;

    let target  = el.scrollTop;
    let current = el.scrollTop;
    let lastSet = el.scrollTop;
    let rafId: number;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      target = Math.max(0, Math.min(el.scrollHeight - el.clientHeight, target + e.deltaY));
    };

    // Detect programmatic scrolls (nav links, scrollIntoView) and sync
    const onScroll = () => {
      if (Math.abs(el.scrollTop - lastSet) > 4) {
        target  = el.scrollTop;
        current = el.scrollTop;
        lastSet = el.scrollTop;
      }
    };

    const tick = () => {
      const delta = target - current;
      if (Math.abs(delta) > 0.10) {
        current += delta * 1;
        lastSet  = Math.round(current);
        el.scrollTop = lastSet;
      }
      rafId = requestAnimationFrame(tick);
    };

    el.addEventListener("wheel",  onWheel,  { passive: false });
    el.addEventListener("scroll", onScroll, { passive: true  });
    rafId = requestAnimationFrame(tick);

    return () => {
      el.removeEventListener("wheel",  onWheel);
      el.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);
}
