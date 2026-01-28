import styles from './WisdomSection.module.css';

const wisdomCards = [
  {
    icon: 'psychology',
    title: 'Hugin: Thought (Code)',
    description: 'I focus on clear, intentional React implementations. Before writing code, I think through component structure, state flow, and responsibilities to avoid unnecessary complexity and make future changes easier.',
    tags: ['Custom Hooks', 'Context API'],
  },
  {
    icon: 'menu_book',
    title: 'Munin: Memory (Docs)',
    description: 'I value documentation as part of the development process. I document components, decisions, and usage patterns so teams can move faster, onboard easier, and understand the code long after it was written.',
    tags: ['Storybook', 'Component Documentation'],
  },
];

export function WisdomSection() {
  return (
    <section className={styles.section} id="wisdom">
      <div className={styles.container}>
        {wisdomCards.map((card) => (
          <div key={card.title} className={styles.card}>
            <span className={`material-symbols-outlined filled ${styles.ravenIcon}`}>raven</span>
            <div className={styles.cardHeader}>
              <span className={`material-symbols-outlined ${styles.cardIcon}`}>{card.icon}</span>
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
