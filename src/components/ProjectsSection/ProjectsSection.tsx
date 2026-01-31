import styles from './ProjectsSection.module.css';
import { CardProject } from './CardProject';
import { projects } from '@/data/projects';

export function ProjectsSection() {
  return (
    <section className={styles.section} id="realms">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <span className={`material-symbols-outlined ${styles.titleIcon}`}>pets</span>
            <h2 className={styles.title}>Guarded Realms</h2>
            <span className={`material-symbols-outlined ${styles.titleIcon}`}>pets</span>
          </div>
          <p className={styles.subtitle}>Geri and Freki guard the code of these domains.</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <CardProject key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
