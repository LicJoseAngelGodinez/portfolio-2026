import { useLanguage } from '@/i18n';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero}>
      <div className={styles.glow} />
      <div className={styles.content}>
        <span className={styles.badge}>{t('hero.badge') as string}</span>
        <h1 className={styles.title}>
          {t('hero.titleLine1') as string}<br />
          <span className={styles.titleHighlight}>{t('hero.titleLine2') as string}</span>
        </h1>
        <p className={styles.description}>
          {t('hero.description') as string}
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn} onClick={() => scrollToSection('stack')}>
            <span className="material-symbols-outlined">bolt</span>
            {t('hero.primaryBtn') as string}
          </button>
          <button className={styles.secondaryBtn} onClick={() => scrollToSection('wisdom')}>
            {t('hero.secondaryBtn') as string}
          </button>
        </div>
      </div>
    </section>
  );
}
