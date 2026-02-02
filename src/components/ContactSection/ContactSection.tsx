import { useState } from 'react';
import { useLanguage } from '@/i18n';
import styles from './ContactSection.module.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 10;
const MIN_ANIMATION_TIME = 2500;
const QUICK_RESPONSE_THRESHOLD = 1000;

export function ContactSection() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const isValidForm = EMAIL_REGEX.test(email) && message.trim().length >= MIN_MESSAGE_LENGTH;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!EMAIL_REGEX.test(email)) {
      setErrorMsg(t('contact.errorEmail') as string);
      return;
    }

    if (message.trim().length < MIN_MESSAGE_LENGTH) {
      setErrorMsg(t('contact.errorMessageLength') as string);
      return;
    }

    setStatus('sending');
    const startTime = Date.now();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), message: message.trim() }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to send');
      }

      const elapsed = Date.now() - startTime;
      if (elapsed < QUICK_RESPONSE_THRESHOLD) {
        await new Promise(resolve => setTimeout(resolve, MIN_ANIMATION_TIME - elapsed));
      }

      setStatus('success');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : t('contact.errorGeneric') as string);
    }
  };

  const handleButtonMouseEnter = () => {
    if (status === 'success') {
      setStatus('idle');
    }
  };

  const getButtonText = () => {
    switch (status) {
      case 'sending':
        return t('contact.sendingBtn') as string;
      case 'success':
        return t('contact.sentBtn') as string;
      default:
        return t('contact.sendBtn') as string;
    }
  };

  const buttonClasses = [
    styles.submitBtn,
    status === 'sending' && styles.sending,
    status === 'success' && styles.success,
  ].filter(Boolean).join(' ');

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.glow} />
        <div className={styles.content}>
          <h2 className={styles.title}>{t('contact.title') as string}</h2>
          <p className={styles.description}>
            {t('contact.description') as string}
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                type="email"
                placeholder={t('contact.emailPlaceholder') as string}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'sending'}
              />
              <textarea
                className={styles.textarea}
                placeholder={t('contact.messagePlaceholder') as string}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                disabled={status === 'sending'}
              />
            </div>
            <button
              type="submit"
              className={buttonClasses}
              disabled={status === 'sending' || (!isValidForm && status !== 'success')}
              onMouseEnter={handleButtonMouseEnter}
            >
              {getButtonText()}
            </button>
            {status === 'error' && (
              <p className={styles.errorMsg}>{errorMsg || (t('contact.errorGeneric') as string)}</p>
            )}
          </form>
          <div className={styles.socialLinks}>
            <a className={styles.socialLink} target="_blank" rel="noopener noreferrer" href="https://github.com/LicJoseAngelGodinez">
              <span aria-label="Visit my GitHub profile" className="material-symbols-outlined">terminal</span>
              GITHUB
            </a>
            <a className={styles.socialLink} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/angelgodinez/">
              <span aria-label="Visit my LinkedIn profile" className="material-symbols-outlined">link</span>
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
