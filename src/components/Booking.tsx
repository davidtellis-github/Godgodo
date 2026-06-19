import { useInView } from "../hooks/useInView";
import styles from "./Booking.module.css";

export default function Booking() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="contact"
      className={`${styles.section} ${inView ? styles.visible : ""}`}
      ref={ref as React.RefObject<HTMLElement>}
    >
      {/* Background accent */}
      <div className={styles.bgAccent} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.card}>
          <p className="eyebrow">Book godgodo</p>
          <h2 className={styles.heading}>
            <span className="gradient-text">
              Let's Make Music Together —<br />
              Book Us Today!
            </span>
          </h2>
          <p className={styles.body}>
            godgodo is currently accepting bookings for festivals and stage shows
            throughout 2026. Reach out to discuss availability and make it happen.
          </p>

          <div className={styles.contacts}>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Contact</span>
              <span className={styles.contactValue}>Calvin Menezes</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email</span>
              <a href="mailto:info@godgodo.com" className={styles.contactLink}>
                info@godgodo.com
              </a>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Phone</span>
              <a href="tel:+918123089712" className={styles.contactLink}>
                +91 81230 89712
              </a>
            </div>
          </div>

          <div className={styles.ctaRow}>
            <a href="mailto:info@godgodo.com" className="cta-pill">
              <span className="label">Send Booking Enquiry</span>
              <Arrow />
            </a>
            <a href="tel:+918123089712" className={styles.phoneLink}>
              <PhoneIcon />
              <span>Call us</span>
            </a>
          </div>

          {/* Decorative card glow */}
          <div className={styles.cardGlow} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M7.5 2.5 12 7l-4.5 4.5" stroke="url(#ba)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="ba" x1="2" y1="7" x2="12" y2="7" gradientUnits="userSpaceOnUse">
          <stop stopColor="#B500A3"/><stop offset="0.54" stopColor="#365B9E"/><stop offset="1" stopColor="#6A36C4"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.2h3a2 2 0 0 1 2 1.72c.127.96.36 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.78a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.34 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}
