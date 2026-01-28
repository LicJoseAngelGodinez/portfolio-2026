import styles from './HeroSection.module.css';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.content}>
        <span className={styles.badge}>React · TypeScript · Architecture-minded approach</span>
        <h1 className={styles.title}>
          SENIOR<br />
          <span className={styles.titleHighlight}>FRONTEND DEVELOPER</span>
        </h1>
        <p className={styles.description}>
          Pragmatic frontend development since 2017. Functionality first, refactor second.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn} onClick={() => scrollToSection('realms')}>
            <span className="material-symbols-outlined">bolt</span>
            View My Code
          </button>
          <button className={styles.secondaryBtn} onClick={() => scrollToSection('wisdom')}>
            How I Build
          </button>
        </div>
      </div>
    </section>
  );
}
