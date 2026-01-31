import styles from './TechStack.module.css';
import { technologies } from '@/data/technologies';

export function TechStack() {
  return (
    <section className={styles.section} id="stack">
      <div className={styles.header}>
        <h2 className={styles.title}>The Great Forge</h2>
        <p className={styles.subtitle}>The stack I use when building production-grade frontend applications.</p>
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
