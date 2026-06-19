import { useInView } from "../hooks/useInView";
import styles from "./MusicShowcase.module.css";

const TRACKS = [
  {
    title: "Gelo Re Gelo",
    desc: "Our original Konkani release: playful, rhythmic, and rooted in simple village storytelling. Built on reggae-inspired grooves and a signature godgodo bounce.",
    spotify: "https://open.spotify.com/artist/4adHIcs8BymqtDgiCtaoUv",
  },
  {
    title: "Godacho Panv",
    desc: "A reinterpretation of a beloved Konkani classic. This version highlights our vocal warmth, modern production, and the ability to bring new life to nostalgic melodies.",
    spotify: "https://open.spotify.com/artist/4adHIcs8BymqtDgiCtaoUv",
  },
  {
    title: "Running Running",
    desc: "A bilingual Konkani-English single that expands our sonic palette with bigger arrangements, dance-leaning drums, and a fresh, contemporary feel.",
    spotify: "https://open.spotify.com/artist/4adHIcs8BymqtDgiCtaoUv",
  },
];

export default function MusicShowcase() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="music"
      className={`${styles.section} ${inView ? styles.visible : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className="eyebrow">Sound That Speaks</p>
          <h2 className={styles.heading}>
            <span className="gradient-text">Three tracks.<br />Infinite replay.</span>
          </h2>
        </header>

        <div className={styles.grid}>
          {TRACKS.map((track, i) => (
            <a
              key={track.title}
              href={track.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={{ transitionDelay: `${0.08 + i * 0.12}s` }}
              aria-label={`Listen to ${track.title} on Spotify`}
            >
              <div
                className="placeholder-media"
                style={{ width: "100%", aspectRatio: "1/1", borderRadius: "16px 16px 0 0", border: "none" }}
              >
                <MusicNoteIcon />
                <span>{track.title} — cover art</span>
              </div>
              <div className={styles.info}>
                <div className={styles.titleRow}>
                  <h3 className={styles.trackTitle}>{track.title}</h3>
                  <SpotifySmall />
                </div>
                <p className={styles.trackDesc}>{track.desc}</p>
              </div>
              <div className={styles.cardGlow} aria-hidden="true" />
            </a>
          ))}
        </div>

        <div className={styles.cta}>
          <a
            href="https://open.spotify.com/artist/4adHIcs8BymqtDgiCtaoUv"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-pill"
          >
            <span className="label">All Tracks on Spotify</span>
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

function MusicNoteIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
    </svg>
  );
}

function SpotifySmall() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
      <path d="M7 15.5c2.8-1.3 6.2-1.1 8.5.5M7.5 12c3.2-1.5 7.1-1.2 9.5.5M8 8.5c3.7-1.7 8-1.3 10.5.5" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M7.5 2.5 12 7l-4.5 4.5" stroke="url(#ma)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="ma" x1="2" y1="7" x2="12" y2="7" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B500A3"/><stop offset="0.54" stopColor="#365B9E"/><stop offset="1" stopColor="#6A36C4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
