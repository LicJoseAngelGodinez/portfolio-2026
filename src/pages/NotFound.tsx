import { Link } from 'react-router-dom';
import { useLanguage } from '@/i18n';
import styles from './NotFound.module.css';

export function NotFound() {
  const { t } = useLanguage();

  return (
    <section className={styles.container}>
      <div className={styles.glow} />
      <div className={styles.content}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>{t('notFound.title') as string}</h1>
        <p className={styles.description}>
          {t('notFound.description') as string}
        </p>
        <Link to="/" className={styles.homeLink}>
          <span className="material-symbols-outlined">home</span>
          {t('notFound.homeLink') as string}
        </Link>
        <div className={styles.wolves}>
          <span className={`material-symbols-outlined ${styles.wolfIcon}`}>pets</span>
          <span className={styles.wolfText}>{t('notFound.wolves') as string}</span>
          <span className={`material-symbols-outlined ${styles.wolfIcon}`}>pets</span>
        </div>
      </div>
    </section>
  );
}
