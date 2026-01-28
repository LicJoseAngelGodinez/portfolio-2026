import styles from './Footer.module.css';
// ToDo:
// Frontend Builder focused on scalable React systems
// and long-lived product interfaces.
// Legacy → Modern • Modular UI • Monorepos • Feature Flags
// GitHub • LinkedIn • CV
// © 2026 Angel Godinez — Frontend Builder


export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.runes}>
        <span>LEGACY → MODERN</span>
        <span>MODULAR UI</span>
        <span>MONOREPOS</span>
        <span>FEATURE FLAGS</span>
      </div>
      <p className={styles.copyright}>
        &copy; 2026 ANGEL GODINEZ — FRONTEND BUILDER
      </p>
    </footer>
  );
}
