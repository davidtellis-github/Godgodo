import { useRef, useEffect } from "react";
import { useInView } from "../hooks/useInView";
import styles from "./StagePresence.module.css";

const SOCIAL = [
  {
    label: "Spotify",
    href: "https://open.spotify.com/artist/4adHIcs8BymqtDgiCtaoUv",
    Icon: SpotifyIcon,
  },
  {
    label: "Apple Music",
    href: "https://music.apple.com/in/artist/godgodo/1852888701",
    Icon: AppleMusicIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC6lFVvDn42aKR2eIl_VVU9g",
    Icon: YoutubeIcon,
  },
];

export default function StagePresence() {
  const { ref, inView } = useInView(0.1);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!bgRef.current) return;
      const rect = bgRef.current.getBoundingClientRect();
      const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      bgRef.current.style.setProperty("--parallax", `${(progress - 0.5) * 80}px`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`${styles.section} ${inView ? styles.visible : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.inner}>
        {/* Gallery */}
        <div className={styles.gallery} ref={bgRef}>
          <div
            className="placeholder-media"
            style={{ width: "100%", height: "100%", borderRadius: "var(--radius-card)", transform: "translateY(var(--parallax, 0))" }}
          >
            <StageIcon />
            <span>Live performance photo / video gallery</span>
          </div>
          <div className={styles.galleryOverlay} aria-hidden="true" />
        </div>

        {/* Text side */}
        <div className={styles.textCol}>
          <p className="eyebrow">Visual Identity & Community</p>
          <h2 className={styles.heading}>
            <span className="gradient-text">The stage is<br />where we live.</span>
          </h2>
          <p className={styles.bio}>
            godgodo's live shows are legendary for their intensity and connection.
            Lead vocalist Viyan transforms intimate venues into warm, communal experiences.
            Calvin's tight drumming creates a sonic rhythm that grasps listeners instantly,
            paving the way for Jovith's musicianship to build waves of sound.
          </p>
          <div className={styles.links}>
            {SOCIAL.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label={label}
              >
                <Icon />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StageIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
      <path d="M7 15.5c2.8-1.3 6.2-1.1 8.5.5M7.5 12c3.2-1.5 7.1-1.2 9.5.5M8 8.5c3.7-1.7 8-1.3 10.5.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function AppleMusicIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
      <path d="M15 8.5v5.5M9 14v-2.5l6-1.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="14" r="1.2" fill="rgba(255,255,255,0.7)"/>
      <circle cx="15" cy="14" r="1.2" fill="rgba(255,255,255,0.7)"/>
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
      <path d="M10 9l5 3-5 3V9z" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}
