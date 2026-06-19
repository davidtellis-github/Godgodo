import { useInView } from "../hooks/useInView";
import styles from "./Timeline.module.css";

const ENTRIES = [
  {
    year: "2022",
    title: "Before godgodo",
    body: "Calvin and Viyan released \"Thalo Magacho,\" their first Konkani song, reimagining the waltz.",
    tag: "pre-godgodo",
  },
  {
    year: "TBD",
    title: "Skytrip Era",
    body: "Launched pop outfit Skytrip, active in Bangalore's independent scene, known for high-energy performances — hundreds of thousands of Spotify streams.",
    tag: null,
  },
  {
    year: "2025",
    title: "godgodo Founded",
    body: "Released \"Gelo Re Gelo,\" formed godgodo, grew Instagram from 20 to 50K+ followers organically in two months.",
    tag: null,
  },
  {
    year: "Dec 2025",
    title: "\"Running Running\"",
    body: "Bilingual Konkani-English music video launch, transition to full original artists.",
    tag: null,
  },
];

export default function Timeline() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      className={`${styles.section} ${inView ? styles.visible : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className="eyebrow">The Journey</p>
          <h2 className={styles.heading}>
            <span className="gradient-text">How we got here.</span>
          </h2>
        </header>

        <div className={styles.track}>
          <div className={styles.line} aria-hidden="true" />
          {ENTRIES.map((entry, i) => (
            <article
              key={i}
              className={styles.entry}
              style={{ transitionDelay: `${0.08 + i * 0.1}s` }}
            >
              <div className={styles.dot} aria-hidden="true">
                <div className={styles.dotInner} />
              </div>
              <div className={styles.card}>
                <div className={styles.meta}>
                  <span className={`${styles.year} ${entry.year === "TBD" ? styles.tbd : ""}`}>
                    {entry.year === "TBD" ? "TBD" : entry.year}
                  </span>
                  {entry.tag && <span className={styles.tag}>{entry.tag}</span>}
                </div>
                <h3 className={styles.title}>{entry.title}</h3>
                <p className={styles.body}>{entry.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
