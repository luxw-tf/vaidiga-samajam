import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "About Our Heritage & Lineage | Vedam Foundation",
  description:
    "Discover the origin, Guru Parampara, core values, and historical journey of Vedam Foundation (Sri Uttara Indraprastha Vaidiga Samajam), established in 2009.",
};

export default function AboutPage() {
  return (
    <div className={styles.aboutWrapper}>
      {/* Editorial Page Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/architecture.jpg"
            alt="Courtyard and stone mandapam of Vedam Foundation"
            fill
            priority
            sizes="100vw"
            className={styles.heroBg}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="eyebrow eyebrow-dark">History &amp; Purpose</span>
            <h1 className={styles.heroTitle}>
              A Sanctuary of <span className={styles.italicWord}>Dharma</span> &amp; Sacred Learning
            </h1>
            <p className={styles.heroSubtitle}>
              Established in 2009, Vedam Foundation is dedicated to the preservation 
              of traditional Vedic knowledge, the sacred Guru-Shishya parampara, and selfless service to humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Statement */}
      <section className="section" aria-label="Vision and Mission">
        <div className="container">
          <div className={styles.visionGrid}>
            <div className={styles.visionTextCol}>
              <span className="eyebrow">Our Guiding Light</span>
              <h2 className={styles.visionHeading}>Preserving the Living Flame of Vedic Wisdom</h2>
              <p className={styles.visionLead}>
                Established in 2009, Vedam Foundation was founded with the vision of 
                creating a sanctuary for traditional Vedic learning in the modern world.
              </p>
              <p className={styles.visionBody}>
                Our mission is to foster a community rooted in Dharma, where the timeless wisdom of 
                the Vedas is passed down seamlessly to the next generation. We strive to provide a serene, 
                authentic environment for students to live simply, learn deeply, and grow spiritually.
              </p>
              <div className={styles.visionQuoteBox}>
                <p className="sanskrit-verse">
                  “वेदो नित्यमधीयतां तदुदितं कर्म स्वनुष्ठीयताम्”
                </p>
                <span className="sanskrit-translation">
                  “Study the Vedas daily, and diligently perform the noble duties prescribed therein.”
                  <br />
                  <span className={styles.quoteSource}>— Adi Shankaracharya, Sadhana Panchakam</span>
                </span>
              </div>
            </div>

            <div className={styles.visionImageCol}>
              <div className={styles.visionImageCard}>
                <Image
                  src="/images/sacred-texts.jpg"
                  alt="Traditional Sanskrit palm-leaf manuscripts preserved in pristine condition"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={styles.visionImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section section-cream" aria-label="Core Values">
        <div className="container">
          <div className={styles.centeredHeader}>
            <span className="eyebrow">Foundational Tenets</span>
            <h2>Our Core Values</h2>
            <p className={styles.centeredSubtitle}>
              Three enduring principles guide every teaching, daily ritual, and community initiative.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {/* Value 1 */}
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>I</div>
              <h3 className={styles.valueTitle}>Authenticity</h3>
              <p className={styles.valueDesc}>
                Adhering strictly to traditional Guru-Shishya parampara in our teaching methods. 
                Every mantra, intonation (Svara), and ritual is transmitted without alteration.
              </p>
            </div>

            {/* Value 2 */}
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>II</div>
              <h3 className={styles.valueTitle}>Simplicity</h3>
              <p className={styles.valueDesc}>
                Encouraging a life of minimalism, contemplative discipline, and focus. 
                Free from the clutter of modern distractions, students discover clarity and peace.
              </p>
            </div>

            {/* Value 3 */}
            <div className={styles.valueCard}>
              <div className={styles.valueNumber}>III</div>
              <h3 className={styles.valueTitle}>Selfless Seva</h3>
              <p className={styles.valueDesc}>
                Cultivating a pure spirit of service towards society, nature, and all living beings 
                through daily Gowshala care, Annadanam, and collective community prayers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guru Parampara & Leadership */}
      <section className="section section-dark" id="lineage" aria-label="Guru Parampara">
        <div className="container">
          <div className={styles.paramparaGrid}>
            <div className={styles.paramparaText}>
              <span className="eyebrow eyebrow-dark">Unbroken Lineage</span>
              <h2 className={styles.paramparaHeading}>Guru Parampara &amp; Leadership</h2>
              
              <p className={styles.paramparaLead}>
                We bow in reverent devotion to the unbroken lineage of Gurus who have safeguarded 
                the Vedic wisdom across millennia through unwavering discipline and sacrifice.
              </p>

              <p className={styles.paramparaBody}>
                Our Samajam operates under the spiritual guidance of esteemed Acharyas, ensuring 
                that every chant, ritual, and lesson remains pure, untainted, and true to scriptural tradition.
              </p>

              <p className={styles.paramparaBody}>
                Our leadership team consists of dedicated individuals committed to bridging the gap 
                between ancient traditions and the administrative requirements of the present, ensuring 
                the institution is future-ready while remaining deeply culturally rooted.
              </p>

              <div className={styles.shlokaBoxDark}>
                <p className={styles.shlokaChant}>
                  “गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः ।<br />
                  गुरुः साक्षात् परं ब्रह्म तस्मै श्रीगुरवे नमः ॥”
                </p>
                <span className={styles.shlokaMeaning}>
                  “The Guru is Brahma, the Guru is Vishnu, the Guru is the Great Lord Shiva. 
                  The Guru is verily the Supreme Absolute. Salutations to the revered Guru.”
                </span>
              </div>
            </div>

            <div className={styles.paramparaImageWrapper}>
              <div className={styles.paramparaImageFrame}>
                <Image
                  src="/images/vedic-learning.jpg"
                  alt="Revered Guru guiding students in Vedic recitation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={styles.paramparaImg}
                />
              </div>
              <div className={styles.paramparaBadge}>
                <span className={styles.badgeLine1}>SRI UTTARA INDRAPRASTHA</span>
                <span className={styles.badgeLine2}>Vaidiga Samajam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section" aria-label="Historical Journey">
        <div className="container">
          <div className={styles.centeredHeader}>
            <span className="eyebrow">Our Milestones</span>
            <h2>A Journey of Faith &amp; Dedication</h2>
            <p className={styles.centeredSubtitle}>
              From humble beginnings to a thriving sanctuary of Vedic scholarship.
            </p>
          </div>

          <div className={styles.timelineWrapper}>
            <div className={styles.timelineSpine}></div>

            {/* Timeline Item 1 */}
            <div className={styles.timelineEntry}>
              <div className={styles.timelineMarker}>
                <span>2009</span>
              </div>
              <div className={styles.timelineCard}>
                <span className={styles.timelineYearBadge}>2009</span>
                <h3 className={styles.timelineTitle}>Foundation of the Samajam</h3>
                <p className={styles.timelineText}>
                  Sri Uttara Indraprastha Vaidiga Samajam was officially registered and established 
                  with the noble intent of reviving and protecting traditional Vedic education.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className={styles.timelineEntry}>
              <div className={styles.timelineMarker}>
                <span>2012</span>
              </div>
              <div className={styles.timelineCard}>
                <span className={styles.timelineYearBadge}>2012</span>
                <h3 className={styles.timelineTitle}>Gurukulam Inauguration</h3>
                <p className={styles.timelineText}>
                  Welcomed the first batch of residential Vidyarthis focusing on the oral tradition 
                  of Yajur Veda under full-time residential Acharyas.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className={styles.timelineEntry}>
              <div className={styles.timelineMarker}>
                <span>2015</span>
              </div>
              <div className={styles.timelineCard}>
                <span className={styles.timelineYearBadge}>2015</span>
                <h3 className={styles.timelineTitle}>Expansion of Seva Programs</h3>
                <p className={styles.timelineText}>
                  Established the on-site Gowshala for indigenous cow protection and instituted 
                  regular Annadanam (sacred food offerings) for visitors and the surrounding community.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className={styles.timelineEntry}>
              <div className={styles.timelineMarker}>
                <span>TODAY</span>
              </div>
              <div className={styles.timelineCard}>
                <span className={styles.timelineYearBadge}>Present Day</span>
                <h3 className={styles.timelineTitle}>A Thriving Center of Learning</h3>
                <p className={styles.timelineText}>
                  A vibrant, growing institution training dedicated students, conducting annual 
                  Veda Parayanams, and serving hundreds through everyday charitable initiatives.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.timelineCta}>
            <Link href="/gurukulam" className="btn btn-primary">
              Discover Our Curriculum
            </Link>
            <Link href="/membership" className="btn btn-secondary">
              Join Our Mission
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
