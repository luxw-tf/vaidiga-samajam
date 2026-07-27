import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.tagline}>A Journey of Seva, Learning, and Dharma</p>
          <div className={styles.heroLogoWrapper}>
            <Image src="/IMG_4594.PNG" alt="Vedam Foundation Logo" width={180} height={180} className={styles.heroLogo} priority />
          </div>
          <h1 className={styles.title}>Vedam Foundation</h1>
          <p className={styles.subtitle}>
            A traditional Vedic Gurukulam fostering simple living and spiritual growth. 
            Join us in preserving our timeless heritage and shaping future generations.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/gurukulam" className={styles.btnPrimary}>
              Explore Gurukulam
            </Link>
            <Link href="/donations" className={styles.btnSecondary}>
              Support Our Mission
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Our Pillars</h2>
          <p className={styles.sectionText}>
            We are dedicated to the preservation of Vedic traditions, the nurturing of young minds, and service to the community.
          </p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>ॐ</div>
              <h3 className={styles.cardTitle}>Vedic Learning</h3>
              <p className={styles.cardText}>
                Imparting traditional education in Shukla Yajur Veda, Krishna Yajur Veda, and Sanskrit to students aged 7-12 years.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>❀</div>
              <h3 className={styles.cardTitle}>Community Seva</h3>
              <p className={styles.cardText}>
                Active initiatives including Gowshala Seva, Annadanam, and the organization of religious functions for universal well-being.
              </p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>✧</div>
              <h3 className={styles.cardTitle}>Spiritual Growth</h3>
              <p className={styles.cardText}>
                Fostering character development, discipline, and a deep connection to our cultural roots through daily practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Join the Samajam</h2>
          <p className={styles.sectionText}>
            Become a part of our growing community. Your membership and contributions help us sustain the Gurukulam and expand our Seva initiatives.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/membership" className={styles.btnPrimary}>
              Become a Member
            </Link>
            <Link href="/contact" className={styles.btnSecondary}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
