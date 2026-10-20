import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "The Gurukulam & Curriculum | Vedam Foundation",
  description:
    "Explore the traditional residential Vedic education for students aged 7-12 at Vedam Foundation, featuring Shukla and Krishna Yajur Veda, Sanskrit, Yoga, and character formation.",
};

export default function GurukulamPage() {
  return (
    <div className={styles.gurukulamWrapper}>
      {/* Editorial Page Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/vedic-learning.jpg"
            alt="Vidyarthis in the stone mandapam reading sacred texts under Guru guidance"
            fill
            priority
            sizes="100vw"
            className={styles.heroBg}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="eyebrow eyebrow-dark">Traditional Education</span>
            <h1 className={styles.heroTitle}>
              Veda Vedanga <span className={styles.italicWord}>Patashala</span>
            </h1>
            <p className={styles.heroSubtitle}>
              A sacred residential sanctuary where young Vidyarthis immerse themselves 
              in the unbroken oral recitation of Yajur Veda, Sanskrit scholarship, 
              and disciplined spiritual living.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="section" id="curriculum" aria-label="Curriculum Details">
        <div className="container">
          <div className={styles.introBlock}>
            <span className="eyebrow">Ages 7 to 12 Years</span>
            <h2>Ancient Foundations, Wholesome Nurturing</h2>
            <p className={styles.introParagraph}>
              We welcome young boys between the ages of 7 and 12 years to begin their sacred journey 
              into the ocean of Vedic wisdom. Our residential curriculum balances rigorous traditional 
              recitation with modern cognitive enrichment, physical health, and character formation.
            </p>
          </div>

          <div className={styles.curriculumGrid}>
            {/* Core Vedic Adhyayanam */}
            <div className={styles.curriculumCard}>
              <div className={styles.curriculumCardHeader}>
                <span className={styles.curriculumCardIcon}>ॐ</span>
                <div>
                  <span className={styles.curriculumTag}>Core Sacred Discipline</span>
                  <h3 className={styles.curriculumCardTitle}>Veda Adhyayanam &amp; Sanskrit</h3>
                </div>
              </div>
              <p className={styles.curriculumCardDesc}>
                Rigorous oral memorization (Shruti) with exact phonetics (Shiksha) and intonation:
              </p>
              <ul className={styles.curriculumList}>
                <li>
                  <strong>Shukla Yajur Veda:</strong> Complete Samhita recitation, Pada and Krama patha.
                </li>
                <li>
                  <strong>Krishna Yajur Veda:</strong> Taittiriya Samhita, Aranyaka, and Upanishads.
                </li>
                <li>
                  <strong>Sanskrit Language:</strong> Classical grammar (Vyakarana), shlokas, and vocabulary.
                </li>
                <li>
                  <strong>Nitya Karmas:</strong> Sandhyavandanam, Agnikaryam, and essential daily rituals.
                </li>
                <li>
                  <strong>Scriptural Ethics:</strong> Study of foundational Dharmashastras and Itihasas.
                </li>
              </ul>
            </div>

            {/* Cognitive & Physical Enrichment */}
            <div className={styles.curriculumCard}>
              <div className={styles.curriculumCardHeader}>
                <span className={styles.curriculumCardIcon}>✦</span>
                <div>
                  <span className={styles.curriculumTag}>Holistic Formation</span>
                  <h3 className={styles.curriculumCardTitle}>Enrichment &amp; Life Skills</h3>
                </div>
              </div>
              <p className={styles.curriculumCardDesc}>
                Developing agile minds, sound bodies, and creative cultural sensibilities:
              </p>
              <ul className={styles.curriculumList}>
                <li>
                  <strong>Yoga &amp; Pranayama:</strong> Daily asana practice and breath control for vital energy.
                </li>
                <li>
                  <strong>Abacus &amp; Mental Agility:</strong> Sharp mathematical calculations and focus drills.
                </li>
                <li>
                  <strong>Traditional Arts:</strong> Kolam drawing, scriptwriting, and classical Indian arts.
                </li>
                <li>
                  <strong>Daily Gowshala Care:</strong> Hands-on service caring for indigenous cows and calves.
                </li>
                <li>
                  <strong>Community Seva:</strong> Serving food during Annadanam and helping fellow students.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Dinacharya (Daily Routine) */}
      <section className="section section-cream" id="routine" aria-label="Daily Routine">
        <div className="container">
          <div className={styles.centeredHeader}>
            <span className="eyebrow">Dinacharya</span>
            <h2>A Day at the Gurukulam</h2>
            <p className={styles.centeredSubtitle}>
              A disciplined, rhythmic lifestyle where every hour is aligned with natural biorhythms.
            </p>
          </div>

          <div className={styles.routineGrid}>
            <div className={styles.routineItem}>
              <div className={styles.routineTime}>4:30 AM</div>
              <div className={styles.routineContent}>
                <h4>Brahma Muhurtha &amp; Snanam</h4>
                <p>Rising before the sun, personal purification, morning prayer, and preparation.</p>
              </div>
            </div>

            <div className={styles.routineItem}>
              <div className={styles.routineTime}>5:30 AM</div>
              <div className={styles.routineContent}>
                <h4>Pratah Sandhyavandanam &amp; Agnikaryam</h4>
                <p>Sacred morning oblations, Gayatri japa, and personal fire offering at dawn.</p>
              </div>
            </div>

            <div className={styles.routineItem}>
              <div className={styles.routineTime}>6:30 AM</div>
              <div className={styles.routineContent}>
                <h4>First Adhyayanam Session</h4>
                <p>High-energy morning Vedic chanting, pronunciation drills with the Acharya.</p>
              </div>
            </div>

            <div className={styles.routineItem}>
              <div className={styles.routineTime}>8:30 AM</div>
              <div className={styles.routineContent}>
                <h4>Satvik Breakfast &amp; Gow Seva</h4>
                <p>Nutritious traditional meal followed by morning feeding at the Gowshala.</p>
              </div>
            </div>

            <div className={styles.routineItem}>
              <div className={styles.routineTime}>10:00 AM</div>
              <div className={styles.routineContent}>
                <h4>Sanskrit, Grammar &amp; Abacus</h4>
                <p>Classroom learning focusing on language structure, literature, and mental math.</p>
              </div>
            </div>

            <div className={styles.routineItem}>
              <div className={styles.routineTime}>1:00 PM</div>
              <div className={styles.routineContent}>
                <h4>Annadanam &amp; Afternoon Rest</h4>
                <p>Midday meal served in traditional brassware followed by quiet contemplative rest.</p>
              </div>
            </div>

            <div className={styles.routineItem}>
              <div className={styles.routineTime}>3:30 PM</div>
              <div className={styles.routineContent}>
                <h4>Afternoon Recitation &amp; Arts</h4>
                <p>Scripture revision, traditional arts, calligraphy, and cultural activities.</p>
              </div>
            </div>

            <div className={styles.routineItem}>
              <div className={styles.routineTime}>6:00 PM</div>
              <div className={styles.routineContent}>
                <h4>Sayam Sandhyavandanam &amp; Deepa Pooja</h4>
                <p>Sunset prayers, lighting the sacred temple lamps, and community bhajan.</p>
              </div>
            </div>

            <div className={styles.routineItem}>
              <div className={styles.routineTime}>8:00 PM</div>
              <div className={styles.routineContent}>
                <h4>Light Supper &amp; Peaceful Rest</h4>
                <p>Warm milk, light nourishment, daily introspection, and early restful sleep.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holistic Environment & Values */}
      <section className="section" aria-label="Life and Character">
        <div className="container">
          <div className={styles.centeredHeader}>
            <span className="eyebrow">Character &amp; Spirit</span>
            <h2>Living Alongside the Gurus</h2>
            <p className={styles.centeredSubtitle}>
              Residential learning is at the heart of our methodology. Students imbibe values not 
              from textbooks alone, but by watching their Acharyas live lives of quiet dedication.
            </p>
          </div>

          <div className={styles.triadGrid}>
            <div className={styles.triadCard}>
              <div className={styles.triadIcon}>🏛️</div>
              <h3 className={styles.triadTitle}>Character &amp; Discipline</h3>
              <p className={styles.triadText}>
                Punctuality, respect for elders, humility, and self-restraint are woven into 
                the fabric of daily interaction, forging steel-strong character.
              </p>
            </div>

            <div className={styles.triadCard}>
              <div className={styles.triadIcon}>🤝</div>
              <h3 className={styles.triadTitle}>Community Living</h3>
              <p className={styles.triadText}>
                Sharing dining, chores, and study builds lifelong brotherhood, empathy, 
                and a deep-seated joy in collaborative service.
              </p>
            </div>

            <div className={styles.triadCard}>
              <div className={styles.triadIcon}>🕊️</div>
              <h3 className={styles.triadTitle}>Spiritual Serenity</h3>
              <p className={styles.triadText}>
                Surrounded by nature, pure chants, and wholesome food, the young mind remains 
                uncluttered, peaceful, and receptive to transcendental truths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Notice & Support */}
      <section className="section section-dark" id="admissions" aria-label="Admissions">
        <div className="container">
          <div className={styles.admissionsBox}>
            <span className="eyebrow eyebrow-dark">Admissions Process</span>
            <h2 className={styles.admissionsTitle}>Enroll a Vidhyarthi at the Gurukulam</h2>
            <p className={styles.admissionsText}>
              Admissions for eligible boys (ages 7 to 12) open annually prior to the start of the 
              academic year. Education, lodging, traditional vastram, healthcare, and satvik meals 
              are provided <strong>100% free of charge</strong> by the Samajam through the generous 
              contributions of our patrons.
            </p>

            <div className={styles.admissionsActionRow}>
              <Link href="/contact" className="btn btn-gold">
                Inquire for Admission
              </Link>
              <Link href="/donations" className="btn btn-outline-gold">
                Sponsor a Vidhyarthi
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
