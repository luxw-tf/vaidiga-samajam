import styles from './page.module.css';

export const metadata = {
  title: 'Gurukulam | Vedam Foundation',
};

export default function GurukulamPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>The Gurukulam</h1>
          <p className={styles.subtitle}>A sanctuary for traditional Vedic learning and holistic development.</p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Curriculum</h2>
          <p className={styles.textContent}>
            We welcome students between the ages of 7 and 12 years to begin their journey into the vast ocean of Vedic knowledge. 
            Our residential program is designed to immerse them entirely in the ancient traditions.
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Vedic Studies</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>Shukla Yajur Veda</li>
                <li className={styles.listItem}>Krishna Yajur Veda</li>
                <li className={styles.listItem}>Sanskrit Language & Grammar</li>
                <li className={styles.listItem}>Daily Prayers and Mantras</li>
                <li className={styles.listItem}>Study of Sacred Scriptures</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Enrichment Activities</h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>Yoga and Physical Well-being</li>
                <li className={styles.listItem}>Drawing and Traditional Arts</li>
                <li className={styles.listItem}>Abacus for Mental Agility</li>
                <li className={styles.listItem}>Value-based Cultural Activities</li>
                <li className={styles.listItem}>Participation in Seva</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Life at the Gurukulam</h2>
          <p className={styles.textContent}>
            Residential learning is at the heart of our methodology. By living alongside their Gurus, 
            students imbibe not just theoretical knowledge, but the very essence of a disciplined, spiritual life.
          </p>
          <div className={styles.grid}>
            <div className={styles.card} style={{ background: 'var(--background)' }}>
              <h3 className={styles.cardTitle}>Character & Discipline</h3>
              <p>A structured daily routine instills punctuality, respect, and self-control, laying the foundation for strong moral character.</p>
            </div>
            <div className={styles.card} style={{ background: 'var(--background)' }}>
              <h3 className={styles.cardTitle}>Community Living</h3>
              <p>Living together teaches students empathy, cooperation, and the joy of shared responsibilities in a harmonious environment.</p>
            </div>
            <div className={styles.card} style={{ background: 'var(--background)' }}>
              <h3 className={styles.cardTitle}>Spiritual Growth</h3>
              <p>Constant exposure to rituals, chants, and Seva naturally cultivates an inner peace and a deep-rooted spiritual awareness.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
