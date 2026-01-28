import { useState } from 'react';
import styles from './ContactSection.module.css';

export function ContactSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', { email, message });
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });

      if (!response.ok) throw new Error('Failed to send');

      setStatus('success');
      setEmail('');
      setMessage('');
    } catch {
      setStatus('error');
    }
  };

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
            <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send the Message'}
            </button>
            {status === 'success' && (
              <p className={styles.successMsg}>Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>Failed to send. Please try again.</p>
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
