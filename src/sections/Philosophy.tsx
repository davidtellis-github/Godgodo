import { useInView } from "../hooks/useInView";
import Blob from "../components/Blob";
import { SECTIONS } from "../sectionConfig";
import styles from "./Philosophy.module.css";

const meta = SECTIONS.find((s) => s.id === "philosophy")!;

const CARDS = [
  {
    title: "Genre-Defying Sound",
    body: "Coastal soul meets modern production, with nostalgia woven into every track.",
  },
  {
    title: "Raw Authenticity",
    body: "Unpolished emotion delivered through technical precision.",
  },
  {
    title: "Live Energy",
    body: "Explosive performances that leave audiences with a dose of joy.",
  },
];

export default function Philosophy() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="philosophy"
      className={`${styles.section} ${inView ? styles.visible : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <Blob color={meta.blobColor} pos={meta.blobPos} />

      <div className={styles.inner}>
        <header className={styles.header}>
          <p className="eyebrow">What We Stand For</p>
          <h2 className={styles.heading}>Three pillars. One sound.</h2>
        </header>
        <div className={styles.grid}>
          {CARDS.map(({ title, body }, i) => (
            <article
              key={title}
              className={styles.card}
              style={{ transitionDelay: `${0.08 + i * 0.12}s` }}
            >
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{body}</p>
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
