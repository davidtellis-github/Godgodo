import { useRef, useEffect } from "react";
import { useInView } from "../hooks/useInView";
import styles from "./Story.module.css";

const BIO = `Born in 2025 on the coast of Mangalore, godgodo started with one simple intention: to make Konkani music feel alive, exciting, and deeply modern. What began as a passion project — three friends in a small room creating original music — became a sound that blends sentiment with groove, reimagining the true sound of home.

Our breakout moment came with 'Gelo Re Gelo,' followed by our reinterpretation of 'Godacho Panv,' which connected instantly with our fanbase across the world. With 'Running Running,' we kept sharpening what makes us us — playful songwriting, memorable hooks, rich production, and a sound that stays unmistakably godgodo.

Every track we release comes from a place of truth, friendship, and the desire to represent a culture that's ours on a bigger stage — not just for the coast, but for listeners everywhere. We're not trying to fit into any genre. We're building our own world, our own sound, our own voice — one epic song at a time.`;

export default function Story() {
  const { ref, inView } = useInView(0.12);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      imgRef.current.style.setProperty("--parallax", `${(progress - 0.5) * 60}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="story"
      className={`${styles.section} ${inView ? styles.visible : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.inner}>
        <div className={styles.textCol}>
          <p className="eyebrow">The Story Behind the Music</p>
          <h2 className={styles.heading}>
            <span className="gradient-text">Coastal roots.<br />Modern soul.</span>
          </h2>
          {BIO.split("\n\n").map((para, i) => (
            <p key={i} className={styles.para} style={{ transitionDelay: `${0.1 + i * 0.08}s` }}>
              {para}
            </p>
          ))}
        </div>

        <div className={styles.imageCol} ref={imgRef}>
          <div
            className="placeholder-media"
            style={{ width: "100%", aspectRatio: "3/4", transform: "translateY(var(--parallax, 0))" }}
          >
            <BandIcon />
            <span>Band photo placeholder</span>
          </div>
          {/* Decorative accent blob */}
          <div className={styles.blob} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function BandIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <circle cx="9" cy="7" r="3"/><circle cx="15" cy="7" r="3"/>
      <path d="M3 21v-2a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v2"/>
    </svg>
  );
}
