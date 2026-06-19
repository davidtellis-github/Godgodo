import { useInView } from "../hooks/useInView";
import Blob from "../components/Blob";
import { SECTIONS } from "../sectionConfig";
import styles from "./Booking.module.css";

const meta = SECTIONS.find((s) => s.id === "contact")!;

export default function Booking() {
  const { ref, inView } = useInView(0.08);

  return (
    <section
      id="contact"
      className={`${styles.section} ${inView ? styles.visible : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <Blob color={meta.blobColor} pos={meta.blobPos} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <p className="eyebrow">Book godgodo</p>
          <h2 className={styles.heading}>
            Let's Make<br />Music Together
          </h2>
          <p className={styles.subhead}>
            Accepting bookings for festivals and stage shows throughout 2026.
          </p>

          <div className={styles.infoGrid}>
            <div className={styles.infoCol}>
              <p className={styles.infoLabel}>Management & Booking</p>
              <p className={styles.infoName}>Calvin Menezes</p>
              <a href="mailto:info@godgodo.com" className={styles.infoLink}>
                info@godgodo.com
              </a>
              <a href="tel:+918123089712" className={styles.infoLink}>
                +91 81230 89712
              </a>
            </div>
            <div className={styles.ctaCol}>
              <a href="mailto:info@godgodo.com" className={styles.bookLink}>
                Book Now →
              </a>
              <p className={styles.ctaNote}>We respond within 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
