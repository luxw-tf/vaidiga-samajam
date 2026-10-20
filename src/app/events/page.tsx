import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Vedic Events & Religious Functions | Vedam Foundation",
  description:
    "Explore upcoming festivals, Upakarma, Krishna Janmashtami, Veda Parayanams, and past sacred gatherings at Vedam Foundation.",
};

export default function EventsPage() {
  return (
    <div className={styles.eventsWrapper}>
      {/* Editorial Page Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/rituals.jpg"
            alt="Vedic homam and temple celebrations"
            fill
            priority
            sizes="100vw"
            className={styles.heroBg}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="eyebrow eyebrow-dark">Panchangam &amp; Celebrations</span>
            <h1 className={styles.heroTitle}>
              Events &amp; <span className={styles.italicWord}>Sacred</span> Gatherings
            </h1>
            <p className={styles.heroSubtitle}>
              Join us in our upcoming religious functions, Utsavams, and community gatherings 
              to experience the timeless resonance of Vedic traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section" aria-label="Upcoming Events">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Upcoming Observances</span>
            <h2>Upcoming Religious Functions</h2>
            <p className={styles.sectionSubtitle}>
              Devotees and families are cordially invited to participate in person or participate remotely via Sankalpam.
            </p>
          </div>

          <div className={styles.eventsList}>
            {/* Event 1 */}
            <article className={styles.eventCard}>
              <div className={styles.dateBadge}>
                <span className={styles.dateMonth}>AUG</span>
                <span className={styles.dateDay}>15</span>
                <span className={styles.dateYear}>2026</span>
              </div>
              <div className={styles.eventDetails}>
                <div className={styles.eventTopMeta}>
                  <span className={styles.eventTag}>Sacred Annual Ritual</span>
                  <span className={styles.eventStatusPill}>Upcoming</span>
                </div>
                <h3 className={styles.eventTitle}>Sravana Upakarma (Avani Avittam)</h3>
                <div className={styles.metaRow}>
                  <span className={styles.metaItem}>
                    <span className={styles.metaIcon}>📍</span> Gurukulam Mandapam Premises
                  </span>
                  <span className={styles.metaItem}>
                    <span className={styles.metaIcon}>🕒</span> 6:00 AM – 12:00 PM IST
                  </span>
                  <span className={styles.metaItem}>
                    <span className={styles.metaIcon}>✦</span> Yajur Veda Tradition
                  </span>
                </div>
                <p className={styles.eventDesc}>
                  The annual changing of the sacred thread (Yajnopaveetam). Join our Acharyas and 
                  resident Vidhyarthis for collective Mahasankalpam, Kamo Karshit Manyur Akarshit Japa, 
                  and the renewed recitation of the Gayatri Mantra to rejuvenate spiritual commitment.
                </p>
                <div className={styles.eventActions}>
                  <Link href="/contact" className="btn btn-secondary btn-sm">
                    Inquire to Attend
                  </Link>
                  <Link href="/donations" className="btn btn-primary btn-sm">
                    Sponsor Upakarma Seva
                  </Link>
                </div>
              </div>
            </article>

            {/* Event 2 */}
            <article className={styles.eventCard}>
              <div className={styles.dateBadge}>
                <span className={styles.dateMonth}>SEP</span>
                <span className={styles.dateDay}>04</span>
                <span className={styles.dateYear}>2026</span>
              </div>
              <div className={styles.eventDetails}>
                <div className={styles.eventTopMeta}>
                  <span className={styles.eventTag}>Maha Utsavam</span>
                  <span className={styles.eventStatusPill}>Upcoming</span>
                </div>
                <h3 className={styles.eventTitle}>Sri Krishna Janmashtami</h3>
                <div className={styles.metaRow}>
                  <span className={styles.metaItem}>
                    <span className={styles.metaIcon}>📍</span> Gurukulam Premises &amp; Gowshala
                  </span>
                  <span className={styles.metaItem}>
                    <span className={styles.metaIcon}>🕒</span> 5:00 PM Onwards
                  </span>
                  <span className={styles.metaItem}>
                    <span className={styles.metaIcon}>✦</span> Community Festival
                  </span>
                </div>
                <p className={styles.eventDesc}>
                  Grand celebrations marking the divine birth of Lord Sri Krishna. The festival 
                  features Gopooja at the Gowshala, devotional singing by our young students, 
                  traditional neivedyam preparation (butter, seedai, aval), and mid-night archana.
                </p>
                <div className={styles.eventActions}>
                  <Link href="/contact" className="btn btn-secondary btn-sm">
                    Register Family Attendance
                  </Link>
                  <Link href="/donations" className="btn btn-primary btn-sm">
                    Offer Janmashtami Neivedyam
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Past Events & Archival Records */}
      <section className="section section-cream" aria-label="Past Events">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Archival Chronicles</span>
            <h2>Past Gatherings &amp; Milestones</h2>
            <p className={styles.sectionSubtitle}>
              Highlights from our recent celebrations, community feasts, and continuous scriptural recitations.
            </p>
          </div>

          <div className={styles.pastGrid}>
            {/* Past Event 1 */}
            <div className={styles.pastCard}>
              <div className={styles.pastDateCol}>
                <span className={styles.pastMonth}>JAN</span>
                <span className={styles.pastDay}>14</span>
                <span className={styles.pastYear}>2026</span>
              </div>
              <div className={styles.pastBody}>
                <span className={styles.pastTag}>Harvest Celebration</span>
                <h3 className={styles.pastTitle}>Makara Sankranti / Pongal</h3>
                <p className={styles.pastText}>
                  A joyous celebration of the sun god and harvest gratitude. Commenced with a special 
                  Gopooja at our Gowshala followed by traditional Surya Namaskaram and a grand 
                  Annadanam serving over 500 devotees from neighboring areas.
                </p>
                <div className={styles.pastHighlight}>
                  <span>Over 500 meals served • Special Gow Alankaram conducted</span>
                </div>
              </div>
            </div>

            {/* Past Event 2 */}
            <div className={styles.pastCard}>
              <div className={styles.pastDateCol}>
                <span className={styles.pastMonth}>NOV</span>
                <span className={styles.pastDay}>12</span>
                <span className={styles.pastYear}>2025</span>
              </div>
              <div className={styles.pastBody}>
                <span className={styles.pastTag}>Vedic Recitation</span>
                <h3 className={styles.pastTitle}>Annual Veda Parayanam</h3>
                <p className={styles.pastText}>
                  A sacred three-day continuous chanting of the complete Krishna &amp; Shukla Yajur Veda 
                  Samhitas by our senior Gurukulam students alongside guest Vedic pandits and scholars 
                  from across India.
                </p>
                <div className={styles.pastHighlight}>
                  <span>72 hours unbroken recitation • 24 Scholar Acharyas participating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visitor Guidance Notice */}
      <section className="section" aria-label="Visitor Information">
        <div className="container">
          <div className={styles.visitorBox}>
            <h3 className={styles.visitorTitle}>Planning to Attend a Function?</h3>
            <p className={styles.visitorDesc}>
              Devotees are requested to arrive in traditional attire (Dhoti / Kurta / Saree) 
              and respect the serene sanctity of the Gurukulam. Photography inside the sanctum 
              during rituals is restricted to preserve the meditative atmosphere.
            </p>
            <Link href="/contact" className="btn btn-secondary">
              Contact Event Coordinator →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
