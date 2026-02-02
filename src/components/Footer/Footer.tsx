import { useLanguage } from '@/i18n';
import styles from './Footer.module.css';

export function Footer() {
  const { t } = useLanguage();
  const runes = t('footer.runes') as string[];

  return (
    <footer className={styles.footer}>
      <div className={styles.runes}>
        {runes.map((rune) => (
          <span key={rune}>{rune}</span>
        ))}
      </div>
      <p className={styles.copyright}>
        {t('footer.copyright') as string}
      </p>
    </footer>
  );
}
