import { SECTIONS } from "../sectionConfig";
import styles from "./Hero.module.css";

const meta = SECTIONS.find((s) => s.id === "hero")!;

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>

      {/* ── Video / placeholder layer ── */}
      <div className={styles.mediaWrap} aria-hidden="true">
        

          <video
            className={styles.video}
            src="src/components/Website hero video v1.mp4"
            autoPlay muted loop playsInline
            poster="/hero-poster.jpg"
          />
        
        <div className={styles.placeholder}>
          <VideoIcon />
          <span>Drop hero-video.mp4 in /public</span>
        </div>

        {/* Gradient overlay for text contrast */}
        <div className={styles.overlay} />
      </div>

      {/* Teal glow blob — centered bottom */}
      <div
        className={styles.blob}
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle, ${meta.blobColor} 0%, transparent 70%)`,
        }}
      />

      {/* Massive centered headline */}
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Your Next<br />
          Favorite<br />
          Sound<br />
        </h1>
      </div>

      {/* Bottom-left: since label */}
      <p className={styles.since}>Since 2025</p>

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

function VideoIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" aria-hidden="true">
      <rect x="2" y="4" width="15" height="16" rx="2" />
      <path d="M17 8l5-4v16l-5-4" />
    </svg>
  );
}
