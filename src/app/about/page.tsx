import styles from './page.module.css';

export const metadata = {
  title: 'About Us | Sri Uttara Indraprastha Vaidiga Samajam',
};

export default function AboutPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Our Story</h1>
          <p className={styles.subtitle}>Preserving our heritage, nurturing our future.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Vision & Mission</h2>
          <div className={styles.textContent}>
            <p>
              Established in 2009, Sri Uttara Indraprastha Vaidiga Samajam (Regd.) was founded with the 
              vision of creating a sanctuary for traditional Vedic learning in the modern world.
            </p>
            <br/>
            <p>
              Our mission is to foster a community rooted in Dharma, where the timeless wisdom of the 
              Vedas is passed down seamlessly to the next generation. We strive to provide a serene, 
              authentic environment for students to live simply, learn deeply, and grow spiritually.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Core Values</h2>
          <div className={styles.grid}>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Authenticity</h3>
              <p>Adhering strictly to traditional Guru-Shishya parampara in our teaching methods.</p>
            </div>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Simplicity</h3>
              <p>Encouraging a life of minimalism and focus, free from modern distractions.</p>
            </div>
            <div className={styles.valueCard}>
              <h3 className={styles.valueTitle}>Seva</h3>
              <p>Cultivating a spirit of selfless service towards society and all living beings.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Guru Parampara & Leadership</h2>
          <div className={styles.textContent}>
            <p>
              We bow to the unbroken lineage of Gurus who have safeguarded the Vedic wisdom over millennia. 
              Our Samajam operates under the spiritual guidance of esteemed Acharyas, ensuring that every chant, 
              ritual, and lesson remains pure and untainted.
            </p>
            <br/>
            <p>
              Our leadership team consists of dedicated individuals committed to bridging the gap between 
              ancient traditions and the administrative requirements of the present, ensuring the institution 
              is future-ready while remaining culturally rooted.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Journey</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}></div>
              <div className={styles.timelineContent}>
                <h3>2009 - Foundation</h3>
                <p>The Samajam was officially registered and established to begin its mission.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}></div>
              <div className={styles.timelineContent}>
                <h3>2012 - Gurukulam Inauguration</h3>
                <p>Started the first batch of residential students focusing on Yajur Veda.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}></div>
              <div className={styles.timelineContent}>
                <h3>2015 - Expansion of Seva</h3>
                <p>Initiated the Gowshala and regular Annadanam programs for the local community.</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineYear}></div>
              <div className={styles.timelineContent}>
                <h3>Today - A Thriving Community</h3>
                <p>A growing institution with dedicated students, members, and ongoing traditional activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
