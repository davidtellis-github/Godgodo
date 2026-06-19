import styles from "./Footer.module.css";

const NAV_LINKS = [
  { label: "Story", href: "#story" },
  { label: "Music", href: "#music" },
  { label: "Studio", href: "#philosophy" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  { label: "Instagram", href: "https://www.instagram.com/godgodotv/", Icon: IgIcon },
  { label: "Facebook", href: "#", Icon: FbIcon },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.inner}>
        <a href="#" className={styles.logo} aria-label="godgodo home">
          godgodo
        </a>

        <nav className={styles.nav} aria-label="Footer navigation">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.right}>
          {SOCIAL.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href !== "#" ? "_blank" : undefined}
              rel={href !== "#" ? "noopener noreferrer" : undefined}
              className={styles.socialIcon}
              aria-label={label}
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className={styles.copy}>
        <p>© 2026 godgodo. All rights reserved.</p>
        <p>Mangalore, India</p>
      </div>
    </footer>
  );
}

function IgIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  );
}

function FbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="6" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13 21v-8h2.5l.5-3H13V8.5c0-.83.67-1.5 1.5-1.5H16V4h-2a4 4 0 0 0-4 4v2H8v3h2v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
