import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n';
import styles from './Header.module.css';

export function Header() {
  const { locale, setLocale, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <span className={`material-symbols-outlined ${styles.logoIcon}`}>terminal</span>
          <h1 className={styles.logoText}>Angel Godinez</h1>
        </Link>
        <div className={styles.navContent}>
          <nav className={styles.nav}>
            <button className={styles.navLink} onClick={() => scrollToSection('stack')}>{t('header.nav.techStack') as string}</button>
            <button className={styles.navLink} onClick={() => scrollToSection('wisdom')}>{t('header.nav.wisdom') as string}</button>
            <button className={styles.navLink} onClick={() => scrollToSection('foundations')}>{t('header.nav.foundations') as string}</button>
            <button className={styles.navLink} onClick={() => scrollToSection('realms')}>{t('header.nav.realms') as string}</button>
            <button className={styles.contactBtn} onClick={() => scrollToSection('contact')}>{t('header.nav.contact') as string}</button>
          </nav>
          <div className={styles.langToggle}>
            <button
              className={`${styles.langBtn} ${locale === 'en' ? styles.langActive : ''}`}
              onClick={() => setLocale('en')}
            >
              EN
            </button>
            <span className={styles.langSep}>|</span>
            <button
              className={`${styles.langBtn} ${locale === 'es' ? styles.langActive : ''}`}
              onClick={() => setLocale('es')}
            >
              ES
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
