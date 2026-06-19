import { useInView } from "../hooks/useInView";
import Blob from "../components/Blob";
import { SECTIONS } from "../sectionConfig";
import styles from "./MusicShowcase.module.css";

const meta = SECTIONS.find((s) => s.id === "music-showcase")!;

const TRACKS = [
  {
    title: "Gelo Re Gelo",
    desc: "Playful, rhythmic, rooted in village storytelling. Built on reggae-inspired grooves and a signature godgodo bounce.",
    href: "https://open.spotify.com/artist/4adHIcs8BymqtDgiCtaoUv",
  },
  {
    title: "Godacho Panv",
    desc: "A reinterpretation of a beloved Konkani classic. Vocal warmth, modern production, new life in a nostalgic melody.",
    href: "https://open.spotify.com/artist/4adHIcs8BymqtDgiCtaoUv",
  },
  {
    title: "Running Running",
    desc: "Bilingual Konkani-English. Bigger arrangements, dance-leaning drums, a fresh contemporary feel.",
    href: "https://open.spotify.com/artist/4adHIcs8BymqtDgiCtaoUv",
  },
];

export default function MusicShowcase() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="music-showcase"
      className={`${styles.section} ${inView ? styles.visible : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <Blob color={meta.blobColor} pos={meta.blobPos} />

      <div className={styles.inner}>
        <header className={styles.header}>
          <p className="eyebrow">Sound That Speaks</p>
          <h2 className={styles.heading}>
            From coastal nostalgia<br />to modern Konkani pop.
          </h2>
        </header>

        <div className={styles.grid}>
          {TRACKS.map((t, i) => (
            <article key={t.title} className={styles.card} style={{ transitionDelay: `${0.06 + i * 0.12}s` }}>
              <div className={styles.cover}>
                <MusicIcon />
                <span>{t.title} — cover art</span>
              </div>
              <div className={styles.info}>
                <h3 className={styles.trackTitle}>{t.title}</h3>
                <p className={styles.trackDesc}>{t.desc}</p>
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.listenBtn}
                  aria-label={`Listen to ${t.title} on Spotify`}
                >
                  <SpotifyMini />
                  Listen on Spotify
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="ghost-text" aria-hidden="true">
        {meta.ghostText}
      </div>
    </section>
  );
}

function MusicIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="0.9" strokeLinecap="round" aria-hidden="true">
      <path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function SpotifyMini() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 15.5c2.8-1.3 6.2-1.1 8.5.5M7.5 12c3.2-1.5 7.1-1.2 9.5.5M8 8.5c3.7-1.7 8-1.3 10.5.5"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
