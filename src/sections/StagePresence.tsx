import { useInView } from "../hooks/useInView";
import Blob from "../components/Blob";
import { SECTIONS } from "../sectionConfig";
import styles from "./StagePresence.module.css";

const meta = SECTIONS.find((s) => s.id === "stage")!;

const STREAMS = [
  { label: "Spotify",     href: "https://open.spotify.com/artist/4adHIcs8BymqtDgiCtaoUv" },
  { label: "Apple Music", href: "https://music.apple.com/in/artist/godgodo/1852888701" },
  { label: "YouTube",     href: "https://www.youtube.com/channel/UC6lFVvDn42aKR2eIl_VVU9g" },
];

export default function StagePresence() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="stage"
      className={`${styles.section} ${inView ? styles.visible : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <Blob color={meta.blobColor} pos={meta.blobPos} />

      <div className={styles.inner}>
        <div className={styles.textCol}>
          <p className="eyebrow">Visual Identity & Live Shows</p>
          <h2 className={styles.heading}>
            Shows that<br />stay with you.
          </h2>
          <p className={styles.body}>
            godgodo's live shows are legendary for their intensity and connection.
            Lead vocalist Viyan transforms intimate venues into warm, communal experiences.
            Calvin's tight drumming creates a sonic rhythm that grasps listeners instantly,
            paving the way for Jovith's musicianship to build waves of sound.
          </p>
          <div className={styles.streamRow}>
            {STREAMS.map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className={styles.streamLink}>
                {label} →
              </a>
            ))}
          </div>
        </div>

        <div className={styles.mediaCol}>
          <div className={styles.videoPlaceholder}>
            <PlayIcon />
            <span>Live Performance Video</span>
          </div>
        </div>
      </div>

      <div className="ghost-text" aria-hidden="true">
        {meta.ghostText}
      </div>
    </section>
  );
}

function PlayIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="rgba(245,239,224,0.2)" strokeWidth="1" />
      <path d="M9.5 7.5l7 4.5-7 4.5V7.5z" stroke="rgba(245,239,224,0.35)" strokeWidth="1"
        strokeLinejoin="round" />
    </svg>
  );
}
