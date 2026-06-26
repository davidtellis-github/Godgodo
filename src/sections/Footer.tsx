import styles from "./Footer.module.css";
import logoSrc from "../assets/image.png";

const NAV = [
  { label: "Story",   id: "story" },
  { label: "Music",   id: "music-showcase" },
  { label: "Book",    id: "contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.inner}>

        <button
          className={styles.logo}
          onClick={() => document.getElementById("scroll-container")?.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="godgodo — scroll to top"
        >
          <img src={logoSrc} alt="godgodo" className={styles.logoImg} />
        </button>

        <nav className={styles.nav} aria-label="Footer navigation">
          {NAV.map(({ label, id }) => (
            <button key={id} className={styles.navLink} onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </nav>

        <div className={styles.social}>
          <a href="https://www.instagram.com/godgodotv/" target="_blank" rel="noopener noreferrer"
            className={styles.socialLink} aria-label="Instagram">
            <IgIcon />
          </a>
          <a href="#" className={styles.socialLink} aria-label="Facebook (coming soon)">
            <FbIcon />
          </a>
        </div>

      </div>

      <div className={styles.copy}>
        <span>© 2026 godgodo. All rights reserved.</span>
        <span>Mangalore, India</span>
      </div>
    </footer>
  );
}

function IgIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function FbIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M13 21v-8h2.5l.5-3H13V8.5c0-.83.67-1.5 1.5-1.5H16V4h-2a4 4 0 0 0-4 4v2H8v3h2v8"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
