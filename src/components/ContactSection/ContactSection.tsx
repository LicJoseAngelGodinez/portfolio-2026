import { useState } from 'react';
import styles from './ContactSection.module.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 10;
const MIN_ANIMATION_TIME = 2500; // Minimum time to show sending animation
const QUICK_RESPONSE_THRESHOLD = 1000; // If response is faster than this, add delay

export function ContactSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const isValidForm = EMAIL_REGEX.test(email) && message.trim().length >= MIN_MESSAGE_LENGTH;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!EMAIL_REGEX.test(email)) {
      setErrorMsg('Please enter a valid email address');
      return;
    }

    if (message.trim().length < MIN_MESSAGE_LENGTH) {
      setErrorMsg('Message must be at least 10 characters');
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

      // If response was quick, wait to show animation
      const elapsed = Date.now() - startTime;
      if (elapsed < QUICK_RESPONSE_THRESHOLD) {
        await new Promise(resolve => setTimeout(resolve, MIN_ANIMATION_TIME - elapsed));
      }

      setStatus('success');
      setEmail('');
      setMessage('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send. Please try again.');
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
        return 'Sending...';
      case 'success':
        return 'Message Sent';
      default:
        return 'Send the Message';
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
          <h2 className={styles.title}>SUMMON THE BUILDER</h2>
          <p className={styles.description}>
            Working on a frontend product, migration, or complex UI? Let's talk and see how I can help.
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                type="email"
                placeholder="Your Digital Sigil (Email address)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'sending'}
              />
              <textarea
                className={styles.textarea}
                placeholder="Describe your quest (project, role, or collaboration)"
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
              <p className={styles.errorMsg}>{errorMsg || 'Failed to send. Please try again.'}</p>
            )}
          </form>
          <div className={styles.socialLinks}>
            <a className={styles.socialLink} href="#">
              <span aria-label="Visit my GitHub profile" className="material-symbols-outlined">terminal</span>
              GITHUB
            </a>
            <a className={styles.socialLink} href="#">
              <span aria-label="Visit my LinkedIn profile" className="material-symbols-outlined">link</span>
              LINKEDIN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
