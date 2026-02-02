import { useLanguage } from '@/i18n';
import styles from './FoundationsSection.module.css';

export function FoundationsSection() {
  const { t } = useLanguage();
  const objectives = t('foundations.objectives') as string[];

  return (
    <section className={styles.section} id="foundations">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t('foundations.title') as string}</h2>
          <p className={styles.subtitle}>
            {t('foundations.subtitle') as string}
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.cardLeft}>
            <span className={styles.badge}>{t('foundations.badge') as string}</span>
            <h3 className={styles.cardTitle}>
              {t('foundations.cardTitle') as string}
            </h3>
            <div className={styles.legacyBadge}>
              <span className="material-symbols-outlined">apartment</span>
              <span>{t('foundations.legacyBadge') as string}</span>
            </div>
          </div>

          <div className={styles.cardCenter}>
            <div className={styles.columnHeader}>
              <span className={`material-symbols-outlined ${styles.columnIcon}`}>upgrade</span>
              <h4 className={styles.columnTitle}>{t('foundations.coreObjectivesTitle') as string}</h4>
            </div>
            <ul className={styles.objectivesList}>
              {objectives.map((obj) => (
                <li key={obj} className={styles.objectiveItem}>
                  <span className={`material-symbols-outlined ${styles.objectiveIcon}`}>diamond</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.cardRight}>
            <div className={styles.columnHeader}>
              <span className={`material-symbols-outlined ${styles.columnIcon}`}>sync_alt</span>
              <h4 className={styles.columnTitle}>{t('foundations.bridgeTitle') as string}</h4>
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
                  <span>ES6</span>
                  <span>+</span>
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
