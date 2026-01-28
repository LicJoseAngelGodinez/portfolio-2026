import styles from './TechStack.module.css';

const technologies = [
  { name: 'React', icon: 'hub', isPrimary: true },
  { name: 'TypeScript', icon: 'data_object', isPrimary: false },
  { name: 'Design Systems', icon: 'architecture', isPrimary: false },
  { name: 'CSS (BEM / Modules)', icon: 'palette', isPrimary: false },
];


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
              <div className={tech.isPrimary ? styles.techIconPrimary : styles.techIconSecondary}>
                <span className="material-symbols-outlined">{tech.icon}</span>
              </div>
              <span className={tech.isPrimary ? styles.techNamePrimary : styles.techNameSecondary}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
