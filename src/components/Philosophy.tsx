import { useInView } from "../hooks/useInView";
import styles from "./Philosophy.module.css";

const CARDS = [
  {
    icon: "🌊",
    title: "Genre-Defying Sound",
    body: "Coastal soul meets modern production, with nostalgia woven into every track.",
  },
  {
    icon: "🔥",
    title: "Raw Authenticity",
    body: "Unpolished emotion delivered through technical precision.",
  },
  {
    icon: "⚡",
    title: "Live Energy",
    body: "Explosive performances that leave audiences with a dose of joy.",
  },
];

export default function Philosophy() {
  const { ref, inView } = useInView(0.12);

  return (
    <section
      id="philosophy"
      className={`${styles.section} ${inView ? styles.visible : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className="eyebrow">What We Stand For</p>
          <h2 className={styles.heading}>
            <span className="gradient-text">Three pillars.<br />One sound.</span>
          </h2>
        </header>

        <div className={styles.grid}>
          {CARDS.map((card, i) => (
            <article
              key={card.title}
              className={styles.card}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <div className={styles.iconWrap} aria-hidden="true">
                <span className={styles.icon}>{card.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
              <div className={styles.cardGlow} aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
