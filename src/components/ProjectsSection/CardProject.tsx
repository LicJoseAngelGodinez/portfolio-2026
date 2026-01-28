import styles from './ProjectsSection.module.css';

interface Highlight {
  icon: string;
  text: string;
}

interface CardProjectProps {
  title: string;
  badge: string;
  description: string;
  highlights: Highlight[];
  legacyTech: string;
  modernTech: string;
  image: string;
}

export function CardProject({
  title,
  badge,
  description,
  highlights,
  legacyTech,
  modernTech,
  image,
}: CardProjectProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={image}
          alt={title}
        />
        <div className={styles.imageOverlay} />
      </div>
      <div className={styles.content}>
        <span className={styles.badge}>{badge}</span>
        <h4 className={styles.cardTitle}>{title}</h4>
        <p className={styles.cardDescription}>{description}</p>
        <ul className={styles.highlights}>
          {highlights.map((highlight, index) => (
            <li key={index} className={styles.highlightItem}>
              <span className={`material-symbols-outlined ${styles.highlightIcon}`}>
                {highlight.icon}
              </span>
              <span>{highlight.text}</span>
            </li>
          ))}
        </ul>
        <div className={styles.cardFooter}>
          <div className={styles.techTransition}>
            <span className={styles.legacyTech}>{legacyTech}</span>
            <span className={`material-symbols-outlined ${styles.techArrow}`}>arrow_right_alt</span>
            <span className={styles.modernTech}>{modernTech}</span>
          </div>
          {/* <button className={styles.arrowBtn}>
            <span className={`material-symbols-outlined`}>arrow_forward</span>
          </button> */}
        </div>
      </div>
    </article>
  );
}
