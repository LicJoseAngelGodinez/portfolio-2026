import styles from './FoundationsSection.module.css';

export function FoundationsSection() {
  return (
    <section className={styles.section} id="foundations">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Foundations</h2>
          <p className={styles.subtitle}>
            The roots of the path: Transitioning from legacy realms to the modern age.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardLeft}>
            <span className={styles.badge}>Legacy Transformation</span>
            <h3 className={styles.cardTitle}>
              Sales & Communication Platform — Upnify Frontend Migration
            </h3>
            <div className={styles.legacyBadge}>
              <span className="material-symbols-outlined">apartment</span>
              <span>Legacy Systems</span>
            </div>
          </div>

          <div className={styles.cardCenter}>
            <div className={styles.columnHeader}>
              <span className={`material-symbols-outlined ${styles.columnIcon}`}>upgrade</span>
              <h4 className={styles.columnTitle}>Core Objectives</h4>
            </div>
            <ul className={styles.objectivesList}>
              <li className={styles.objectiveItem}>
                <span className={`material-symbols-outlined ${styles.objectiveIcon}`}>diamond</span>
                <span>Migration of a large proprietary frontend codebase</span>
              </li>
              <li className={styles.objectiveItem}>
                <span className={`material-symbols-outlined ${styles.objectiveIcon}`}>diamond</span>
                <span>Introduction of functional components and modern JS patterns</span>
              </li>
              <li className={styles.objectiveItem}>
                <span className={`material-symbols-outlined ${styles.objectiveIcon}`}>diamond</span>
                <span>Early transition toward ES6 and TypeScript</span>
              </li>
            </ul>
          </div>

          <div className={styles.cardRight}>
            <div className={styles.columnHeader}>
              <span className={`material-symbols-outlined ${styles.columnIcon}`}>sync_alt</span>
              <h4 className={styles.columnTitle}>The Great Bridge</h4>
            </div>
            <div className={styles.bridgeVisual}>
              <span className={`material-symbols-outlined ${styles.bridgeDecor}`}>sync_alt</span>
              <div className={styles.techTransition}>
                <div className={styles.legacyTech}>
                  <span>JavaScript</span>
                  <span className={styles.techDot}>•</span>
                  <span>jQuery</span>
                  <span className={styles.techDot}>•</span>
                  <span>HTML</span>
                  <span className={styles.techDot}>•</span>
                  <span>CSS</span>
                </div>
                <span className={`material-symbols-outlined ${styles.transitionArrow}`}>keyboard_double_arrow_down</span>
                <div className={styles.modernTech}>
                  <span>ES6+</span>
                  <span>TypeScript</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
