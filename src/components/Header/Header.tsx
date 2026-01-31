import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export function Header() {
  
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
        <nav className={styles.nav}>
          <button className={styles.navLink} onClick={() => scrollToSection('stack')}>Tech Stack</button>
          <button className={styles.navLink} onClick={() => scrollToSection('wisdom')}>Wisdom</button>
          <button className={styles.navLink} onClick={() => scrollToSection('foundations')}>Foundations</button>
          <button className={styles.navLink} onClick={() => scrollToSection('realms')}>Realms</button>
          <button className={styles.contactBtn} onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      </div>
    </header>
  );
}
