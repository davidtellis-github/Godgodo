import { useInView } from "../hooks/useInView";
import styles from "./FanEngagement.module.css";

export default function FanEngagement() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      className={`${styles.section} ${inView ? styles.visible : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.inner}>
        <div className={styles.textCol}>
          <p className="eyebrow">The Community</p>
          <h2 className={styles.heading}>
            <span className="gradient-text">Fans who feel<br />ownership.</span>
          </h2>
          <p className={styles.body}>
            We've built a devoted community through authentic interaction — post-show
            meetups, social media Q&As, and exclusive content for supporters. Our fans
            aren't just listeners; they're collaborators in this journey, feeling real
            ownership with every track.
          </p>
          <a
            href="https://www.instagram.com/godgodotv/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.igLink}
          >
            <InstagramIcon />
            <span>@godgodotv</span>
          </a>
        </div>

        {/* Instagram embed placeholder */}
        <div className={styles.gridPlaceholder}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="placeholder-media"
              style={{
                aspectRatio: "1/1",
                borderRadius: "12px",
                border: "none",
                background: `linear-gradient(135deg, #${(12 + i * 3).toString(16)}${(10 + i * 2).toString(16)}${(14 + i).toString(16)}, #0d0d0d)`,
              }}
              aria-hidden="true"
            >
              <InstagramIcon small />
            </div>
          ))}
          <div className={styles.igOverlay}>
            <p className={styles.igLabel}>Instagram grid — embed when live</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon({ small }: { small?: boolean }) {
  const s = small ? 16 : 22;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.5)"/>
    </svg>
  );
}
