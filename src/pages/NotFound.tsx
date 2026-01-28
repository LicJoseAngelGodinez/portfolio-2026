import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export function NotFound() {
  return (
    <section className={styles.container}>
      <div className={styles.glow} />
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Lost in the Void</h1>
        <div className={styles.runes}>
          <span>&#5765;</span>
          <span>&#5766;</span>
          <span>&#5768;</span>
        </div>
        <p className={styles.description}>
          The realm you seek has vanished into the mists of Niflheim.
          Perhaps the Norns have woven a different path for you.
        </p>
        <Link to="/" className={styles.homeLink}>
          <span className="material-symbols-outlined">home</span>
          Return to Midgard
        </Link>
        <div className={styles.wolves}>
          <span className={`material-symbols-outlined ${styles.wolfIcon}`}>pets</span>
          <span className={styles.wolfText}>Geri and Freki will guide you home</span>
          <span className={`material-symbols-outlined ${styles.wolfIcon}`}>pets</span>
        </div>
      </div>
    </section>
  );
}
