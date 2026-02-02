import { useLanguage } from '@/i18n';
import styles from './WisdomSection.module.css';

const cardIcons = ['psychology', 'menu_book'];

export function WisdomSection() {
  const { t } = useLanguage();
  const cards = t('wisdom.cards') as Array<{ title: string; description: string; tags: string[] }>;

  return (
    <section className={styles.section} id="wisdom">
      <div className={styles.container}>
        {cards.map((card, i) => (
          <div key={card.title} className={styles.card}>
            <span className={`material-symbols-outlined filled ${styles.ravenIcon}`}>raven</span>
            <div className={styles.cardHeader}>
              <span className={`material-symbols-outlined ${styles.cardIcon}`}>{cardIcons[i]}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>
            </div>
            <p className={styles.cardDescription}>{card.description}</p>
            <div className={styles.tags}>
              {card.tags.map((tag) => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
