import { useInView } from "../hooks/useInView";
import Blob from "../components/Blob";
import { SECTIONS } from "../sectionConfig";
import styles from "./Story.module.css";

const meta = SECTIONS.find((s) => s.id === "story")!;

const PARAS = [
  "Born in 2025 on the coast of Mangalore, godgodo started with one simple intention: to make Konkani music feel alive, exciting, and deeply modern. What began as a passion project — three friends in a small room creating original music — became a sound that blends sentiment with groove, reimagining the true sound of home.",
  "Our breakout moment came with 'Gelo Re Gelo,' followed by our reinterpretation of 'Godacho Panv,' which connected instantly with fans across the world. With 'Running Running,' we kept sharpening what makes us us — playful songwriting, memorable hooks, rich production, and a sound that stays unmistakably godgodo.",
  "Every track we release comes from a place of truth, friendship, and the desire to represent a culture that's ours on a bigger stage — not just for the coast, but for listeners everywhere. We're not trying to fit into any genre. We're building our own world, our own sound, our own voice — one epic song at a time.",
];

export default function Story() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="story"
      className={`${styles.section} ${inView ? styles.visible : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <Blob color={meta.blobColor} pos={meta.blobPos} />

      <div className={styles.inner}>
        <div className={styles.textCol}>
          <p className="eyebrow">The Story Behind the Music</p>
          <h2 className={styles.heading}>
            Three friends.<br />One coast.<br />A sound of their own.
          </h2>
          <div className={styles.paras}>
            {PARAS.map((p, i) => (
              <p key={i} className={styles.para} style={{ transitionDelay: `${0.1 + i * 0.07}s` }}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.imageCol}>
          <div className={styles.imgPlaceholder}>
            <PersonIcon />
            <span>Band Photo</span>
          </div>
        </div>
      </div>

      <div className="ghost-text" aria-hidden="true">
        {meta.ghostText}
      </div>
    </section>
  );
}

function PersonIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" aria-hidden="true">
      <circle cx="9" cy="7" r="3" /><circle cx="15" cy="7" r="3" />
      <path d="M3 21v-2a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v2" />
    </svg>
  );
}
