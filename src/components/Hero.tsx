import { SECTIONS } from "../sectionConfig";
import styles from "./Hero.module.css";

const meta = SECTIONS.find((s) => s.id === "hero")!;

export default function Hero() {
  return (
    <section id="hero" className={styles.section}>
      {/* Teal glow blob — centered bottom */}
      {/* <div
        className={styles.blob}
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle, ${meta.blobColor} 0%, transparent 70%)`,
        }}
      /> */}

      {/* Massive centered headline */}
      <div className={styles.content}>
        <h1 className={styles.headline}>
          Your Next<br />
          Favorite<br />
          Sound <br />
          
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
