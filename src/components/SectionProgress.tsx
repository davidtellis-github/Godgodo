import styles from "./SectionProgress.module.css";
import { SECTIONS } from "../sectionConfig";

type Props = { activeId: string };

export default function SectionProgress({ activeId }: Props) {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav className={styles.progress} aria-label="Section progress">
      {SECTIONS.map((s) => {
        const active = activeId === s.id;
        return (
          <button
            key={s.id}
            className={`${styles.item} ${active ? styles.active : ""}`}
            onClick={() => scrollTo(s.id)}
            aria-label={`Go to ${s.label}`}
            aria-current={active ? "true" : undefined}
          >
            <span className={styles.label}>{s.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
