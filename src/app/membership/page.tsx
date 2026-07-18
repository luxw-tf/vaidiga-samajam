import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Membership | Sri Uttara Indraprastha Vaidiga Samajam',
};

export default function MembershipPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Become a Member</h1>
          <p className={styles.subtitle}>Join our community and help sustain the transmission of Vedic knowledge.</p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Support the Samajam</h2>
          <p className={styles.textContent}>
            By becoming a member, you play a vital role in ensuring the continuous operation of the Gurukulam 
            and our various Seva initiatives. Choose a plan that aligns with your commitment to preserving Dharma.
          </p>

          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <h3 className={styles.planName}>Monthly Support</h3>
              <p className={styles.planDesc}>
                Provide steady, ongoing support to the Gurukulam's day-to-day operations and regular Annadanam programs.
              </p>
              <button className={styles.btnPrimary} type="button">Select Plan</button>
            </div>

            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div className={styles.featuredBadge}>Recommended</div>
              <h3 className={styles.planName}>Yearly Membership</h3>
              <p className={styles.planDesc}>
                Commit to our mission for a full year. Your support helps us plan long-term educational initiatives 
                and major religious functions.
              </p>
              <button className={styles.btnPrimary} type="button">Select Plan</button>
            </div>

            <div className={styles.pricingCard}>
              <h3 className={styles.planName}>Life Membership</h3>
              <p className={styles.planDesc}>
                Become a permanent pillar of the Samajam. Life members are integral to our foundation and 
                help secure the institution's future for generations to come.
              </p>
              <button className={styles.btnPrimary} type="button">Select Plan</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
