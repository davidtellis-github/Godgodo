import { useState } from "react";
import { SECTIONS } from "../sectionConfig";
import styles from "./Hero.module.css";
import fallbackImg from "../assets/fallback.png";

const meta = SECTIONS.find((s) => s.id === "hero")!;

export default function Hero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section id="hero" className={styles.section}>

      {/* ── Video / fallback layer ── */}
      <div className={styles.mediaWrap} aria-hidden="true">

        {/* Fallback image — always rendered, hidden once video plays */}
        <img
          className={styles.fallbackImg}
          src={fallbackImg}
          alt=""
          style={{ opacity: videoReady ? 0 : 1 }}
        />

        <video
          className={styles.video}
          src="/hero-video.mp4"
          autoPlay muted loop playsInline
          poster={fallbackImg}
          onCanPlay={() => setVideoReady(true)}
          style={{ opacity: videoReady ? 1 : 0 }}
        />


        {/* Gradient overlay for text contrast */}
        <div className={styles.overlay} />
      </div>

      {/* Glow blob — centered bottom */}
      <div
        className={styles.blob}
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle, ${meta.blobColor} 0%, transparent 70%)`,
        }}
      />

      {/* Massive centered headline */}
      <div className={styles.content}>
        <div className={styles.headlineWrap}>
          <h1 className={styles.headline}>
            <span className={styles.line1}>Your Next</span>
            <span className={styles.line2}>Favorite</span>
            <span className={styles.line3}>Sound</span>
          </h1>
          <p className={styles.since}>Since 2025</p>
        </div>
      </div>

      {/* Bottom-center: scroll cue */}
      <div className={styles.scrollCue} aria-hidden="true">
        <div className={styles.scrollDot} />
        <div className={styles.scrollLine} />
      </div>

      <div className="ghost-text" aria-hidden="true">
        {meta.ghostText}
      </div>
    </section>
  );
}

