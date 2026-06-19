import { useInView } from "../hooks/useInView";
import Blob from "../components/Blob";
import { SECTIONS } from "../sectionConfig";
import styles from "./FanEngagement.module.css";

const meta = SECTIONS.find((s) => s.id === "fans")!;

export default function FanEngagement() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="fans"
      className={`${styles.section} ${inView ? styles.visible : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <Blob color={meta.blobColor} pos={meta.blobPos} />

      <div className={styles.inner}>
        <div className={styles.textCol}>
          <p className="eyebrow">The Community</p>
          <h2 className={styles.heading}>
            Fans who feel ownership.
          </h2>
          <p className={styles.body}>
            We've built a devoted community through authentic interaction — post-show meetups,
            social media Q&As, and exclusive content for supporters. Our fans aren't just listeners;
            they're collaborators in this journey, feeling real ownership with every track.
          </p>
          <a
            href="https://www.instagram.com/godgodotv/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.igLink}
          >
            Follow on Instagram →
          </a>
        </div>

        <div className={styles.gridCol}>
          {[1, 2, 3].map((n) => (
            <div key={n} className={styles.imgBox}>
              <IgIcon />
              <span>Instagram Photo {n}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ghost-text" aria-hidden="true">
        {meta.ghostText}
      </div>
    </section>
  );
}

function IgIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="rgba(245,239,224,0.2)" strokeWidth="1.2" />
      <circle cx="12" cy="12" r="4" stroke="rgba(245,239,224,0.2)" strokeWidth="1.2" />
      <circle cx="17.5" cy="6.5" r="1" fill="rgba(245,239,224,0.2)" />
    </svg>
  );
}
