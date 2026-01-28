import styles from './ContactSection.module.css';

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.glow} />
        <div className={styles.content}>
          <h2 className={styles.title}>SUMMON THE BUILDER</h2>
          <p className={styles.description}>
            Working on a frontend product, migration, or complex UI? Let’s talk and see how I can help.
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                type="email"
                placeholder="Your Digital Sigil (Email address)"
                required
              />
              <textarea
                className={styles.textarea}
                placeholder="Describe your quest (project, role, or collaboration)"
                required
              />
            </div>
            <button type="submit" className={styles.submitBtn}>
              Send the Message
            </button>
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
