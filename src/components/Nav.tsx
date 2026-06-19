import styles from "./Nav.module.css";
import { SECTION_COLORS } from "../sectionConfig";

type Props = { activeId: string };

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Nav({ activeId }: Props) {
  const sectionColor = SECTION_COLORS[activeId] ?? "#0F1B3D";

  return (
    <nav
      className={styles.nav}
      aria-label="Main navigation"
      style={{ "--nav-tint": sectionColor } as React.CSSProperties}
    >
      <div className={styles.inner}>
        {/* Left: hamburger */}
        <button className={styles.menuBtn} aria-label="Open menu">
          <span className={styles.menuBar} />
          <span className={styles.menuBar} />
          <span className={styles.menuLabel}>Menu</span>
        </button>

        {/* Center: wordmark */}
        <button
          className={styles.logo}
          onClick={() =>
            document.getElementById("scroll-container")?.scrollTo({ top: 0, behavior: "smooth" })
          }
          aria-label="godgodo — scroll to top"
        >
          <img src="src/assets/image.png" alt="godgodo" className={styles.logoImg} />
        </button>

        {/* Right: Book Us */}
        <div className={styles.right}>
          <button className={styles.bookBtn} onClick={() => scrollTo("contact")}>
            Book Us →
          </button>
        </div>
      </div>
    </nav>
  );
}
