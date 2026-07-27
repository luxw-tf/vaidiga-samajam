import styles from './page.module.css';

export const metadata = {
  title: 'Events | Vedam Foundation',
};

export default function EventsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Events & Functions</h1>
          <p className={styles.subtitle}>Join us in our upcoming religious functions, celebrations, and community gatherings.</p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Upcoming Events</h2>
          
          <div className={styles.eventList}>
            <div className={styles.eventCard}>
              <div className={styles.eventDate}>
                <span className={styles.dateMonth}>Aug</span>
                <span className={styles.dateDay}>15</span>
                <span className={styles.dateYear}>2026</span>
              </div>
              <div className={styles.eventDetails}>
                <h3 className={styles.eventTitle}>Sravana Upakarma (Avani Avittam)</h3>
                <div className={styles.eventMeta}>
                  <span>📍 Gurukulam Premises</span>
                  <span>🕒 6:00 AM - 12:00 PM</span>
                </div>
                <p className={styles.eventDesc}>
                  The annual changing of the sacred thread (Yajnopaveetam). 
                  Join us for the collective chanting of Gayatri Mantra and Vedic rituals to 
                  rejuvenate our spiritual commitment.
                </p>
              </div>
            </div>

            <div className={styles.eventCard}>
              <div className={styles.eventDate}>
                <span className={styles.dateMonth}>Sep</span>
                <span className={styles.dateDay}>04</span>
                <span className={styles.dateYear}>2026</span>
              </div>
              <div className={styles.eventDetails}>
                <h3 className={styles.eventTitle}>Sri Krishna Janmashtami</h3>
                <div className={styles.eventMeta}>
                  <span>📍 Gurukulam Premises</span>
                  <span>🕒 5:00 PM Onwards</span>
                </div>
                <p className={styles.eventDesc}>
                  Celebrations marking the birth of Lord Krishna. The evening will feature 
                  bhajans, special poojas, and the offering of traditional neivedyam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Past Events</h2>
          
          <div className={styles.eventList}>
            <div className={`${styles.eventCard} ${styles.pastEventCard}`}>
              <div className={styles.eventDate}>
                <span className={styles.dateMonth}>Jan</span>
                <span className={styles.dateDay}>14</span>
                <span className={styles.dateYear}>2026</span>
              </div>
              <div className={styles.eventDetails}>
                <h3 className={styles.eventTitle}>Makara Sankranti / Pongal</h3>
                <p className={styles.eventDesc}>
                  A beautiful celebration of the harvest festival. The day began with a special 
                  Gopooja at our Gowshala followed by Surya Namaskaram and a grand Annadanam for over 500 people.
                </p>
              </div>
            </div>

            <div className={`${styles.eventCard} ${styles.pastEventCard}`}>
              <div className={styles.eventDate}>
                <span className={styles.dateMonth}>Nov</span>
                <span className={styles.dateDay}>12</span>
                <span className={styles.dateYear}>2025</span>
              </div>
              <div className={styles.eventDetails}>
                <h3 className={styles.eventTitle}>Annual Veda Parayanam</h3>
                <p className={styles.eventDesc}>
                  A three-day continuous chanting of the complete Yajur Veda by our Gurukulam 
                  students and guest Vedic scholars from across the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
