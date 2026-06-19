import { useInView } from "../hooks/useInView";
import Blob from "../components/Blob";
import { SECTIONS } from "../sectionConfig";
import styles from "./Timeline.module.css";

const meta = SECTIONS.find((s) => s.id === "timeline")!;

const ENTRIES = [
  {
    year: "2022",
    tag: "Pre-godgodo",
    tagAccent: false,
    title: "First Hand at Konkani",
    body: "Calvin and Viyan released 'Thalo Magacho,' their first Konkani song, reimagining the waltz.",
  },
  {
    year: "Era: Skytrip",
    tag: "Bangalore",
    tagAccent: false,
    title: "The First Breakthrough",
    body: "Launched pop outfit Skytrip in Bangalore's independent scene — high-energy shows and hundreds of thousands of Spotify streams.",
  },
  {
    year: "2025",
    tag: "godgodo Born",
    tagAccent: false,
    title: "Social Media Rise",
    body: "Released 'Gelo Re Gelo' and formed godgodo. Grew from 20 to 50K+ Instagram followers in two months — completely organically.",
  },
  {
    year: "Dec 2025",
    tag: "Latest",
    tagAccent: true,
    title: "'Running Running' Music Video",
    body: "Bilingual Konkani-English single. Dance-leaning production. The moment godgodo became full-fledged original artists.",
  },
];

export default function Timeline() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="timeline"
      className={`${styles.section} ${inView ? styles.visible : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <Blob color={meta.blobColor} pos={meta.blobPos} />

      <div className={styles.inner}>
        <header className={styles.header}>
          <p className="eyebrow">The Evolution of godgodo</p>
          <h2 className={styles.heading}>How we got here.</h2>
        </header>

        <div className={styles.track}>
          <div className={styles.line} aria-hidden="true" />
          {ENTRIES.map((e, i) => (
            <div key={i} className={styles.entry} style={{ transitionDelay: `${0.06 + i * 0.1}s` }}>
              <div className={styles.dotWrap} aria-hidden="true">
                <div className={styles.dot} />
              </div>
              <div className={styles.card}>
                <div className={styles.meta}>
                  <span className={styles.year}>{e.year}</span>
                  <span className={`${styles.tag} ${e.tagAccent ? styles.tagAccent : ""}`}>{e.tag}</span>
                </div>
                <h3 className={styles.entryTitle}>{e.title}</h3>
                <p className={styles.entryBody}>{e.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ghost-text" aria-hidden="true">
        {meta.ghostText}
      </div>
    </section>
  );
}
