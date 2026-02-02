import { useLanguage } from '@/i18n';
import styles from './TechStack.module.css';
import { technologies } from '@/data/technologies';

export function TechStack() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="stack">
      <div className={styles.header}>
        <h2 className={styles.title}>{t('techStack.title') as string}</h2>
        <p className={styles.subtitle}>{t('techStack.subtitle') as string}</p>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {technologies.map((tech) => (
            <div key={tech.name} className={styles.techItem}>
              <div className={styles.techIcon}>
                <span className="material-symbols-outlined">{tech.icon}</span>
              </div>
              <span className={styles.techName}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
