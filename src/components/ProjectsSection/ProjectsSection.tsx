import { useLanguage } from '@/i18n';
import styles from './ProjectsSection.module.css';
import { CardProject } from './CardProject';
import { projects } from '@/data/projects';

export function ProjectsSection() {
  const { t } = useLanguage();
  const items = t('projects.items') as Array<{
    title: string;
    badge: string;
    description: string;
    highlights: string[];
  }>;

  return (
    <section className={styles.section} id="realms">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <span className={`material-symbols-outlined ${styles.titleIcon}`}>pets</span>
            <h2 className={styles.title}>{t('projects.title') as string}</h2>
            <span className={`material-symbols-outlined ${styles.titleIcon}`}>pets</span>
          </div>
          <p className={styles.subtitle}>{t('projects.subtitle') as string}</p>
        </div>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <CardProject
              key={project.title}
              title={items[i].title}
              badge={items[i].badge}
              description={items[i].description}
              highlights={project.highlights.map((h, j) => ({
                icon: h.icon,
                text: items[i].highlights[j],
              }))}
              legacyTech={project.legacyTech}
              modernTech={project.modernTech}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
