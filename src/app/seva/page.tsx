import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Seva Initiatives | Sri Uttara Indraprastha Vaidiga Samajam',
};

export default function SevaPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Seva Initiatives</h1>
          <p className={styles.subtitle}>Selfless service for the welfare of all beings and the preservation of Dharma.</p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Our Ongoing Seva</h2>
          <p className={styles.textContent}>
            The Samajam actively engages in various forms of service (Seva) to support our community, 
            the environment, and our spiritual heritage. We invite you to join us in these sacred endeavors.
          </p>

          <div className={styles.grid}>
            <div className={styles.sevaRow}>
              <h3 className={styles.sevaTitle}>Gurukulam Seva</h3>
              <p className={styles.sevaDesc}>
                Supporting the daily needs, education, and well-being of the Vidhyarthis (students). 
                Your contributions help maintain the residential facilities, provide educational materials, 
                and ensure the unbroken transmission of Vedic knowledge to the next generation.
              </p>
            </div>

            <div className={styles.sevaRow}>
              <h3 className={styles.sevaTitle}>Gowshala Seva</h3>
              <p className={styles.sevaDesc}>
                Caring for the sacred cows, who hold a highly revered place in Vedic culture. 
                Our Gowshala ensures they are provided with proper nutrition, medical care, and a safe, 
                loving environment. Serving the Gomatha is considered one of the highest forms of Seva.
              </p>
            </div>

            <div className={styles.sevaRow}>
              <h3 className={styles.sevaTitle}>Annadanam</h3>
              <p className={styles.sevaDesc}>
                The sacred offering of food. We regularly conduct Annadanam at the Gurukulam and during 
                religious functions, ensuring that devotees, students, and visitors are nourished. 
                "Annam Parabrahma Swaroopam" – Food is a form of the Divine.
              </p>
            </div>

            <div className={styles.sevaRow}>
              <h3 className={styles.sevaTitle}>Religious Functions</h3>
              <p className={styles.sevaDesc}>
                Organizing and conducting vital Vedic rituals, homams, and poojas for universal peace and prosperity. 
                These functions help cleanse the environment and foster spiritual harmony within the community.
              </p>
            </div>
          </div>

          <div className={styles.ctaContainer}>
            <Link href="/donations" className={styles.btnPrimary}>
              Contribute to Seva
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
