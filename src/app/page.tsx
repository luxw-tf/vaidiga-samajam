import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      {/* ===================================================================
          1. HERO SECTION - Cinematic Gurukulam Editorial
          =================================================================== */}
      <section className={styles.heroSection} aria-label="Hero Overview">
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/hero.jpg"
            alt="Traditional Vedic Gurukulam courtyard at dawn with stone pillars and sacred banyan tree"
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className="container">
          <div className={styles.heroContent}>
            {/* Top Emblem & Badge */}
            <div className={styles.heroBadgeRow}>
              <div className={styles.heroEmblemWrapper}>
                <Image
                  src="/vedam.png"
                  alt="Vedam Foundation Sacred Emblem"
                  width={72}
                  height={72}
                  className={styles.heroEmblem}
                />
              </div>
              <div className={styles.heroBadgeText}>
                <span className={styles.heroEst}>SRI UTTARA INDRAPRASTHA VAIDIGA SAMAJAM</span>
                <span className={styles.heroDevanagari}>वेदो रक्षति रक्षितः • ESTD. 2009</span>
              </div>
            </div>

            {/* Display Typography */}
            <h1 className={styles.heroTitle}>
              A Sanctuary for <span className={styles.heroTitleItalic}>Vedic Wisdom</span>,
              <br className={styles.heroBreak} /> Simple Living &amp; Spiritual Growth
            </h1>

            <p className={styles.heroSubtitle}>
              A traditional Vedic Gurukulam fostering simple living and spiritual growth. 
              Join us in preserving our timeless heritage and shaping future generations 
              through authentic Guru-Shishya parampara.
            </p>

            {/* Hero CTAs */}
            <div className={styles.heroActions}>
              <Link href="/gurukulam" className="btn btn-gold">
                Explore The Gurukulam
              </Link>
              <Link href="/donations" className="btn btn-outline-gold">
                Support Our Mission
              </Link>
            </div>

            {/* Metric Strip */}
            <div className={styles.metricStrip}>
              <div className={styles.metricItem}>
                <span className={styles.metricNumber}>2009</span>
                <span className={styles.metricLabel}>Year Established</span>
              </div>
              <div className={styles.metricDivider}></div>
              <div className={styles.metricItem}>
                <span className={styles.metricNumber}>Yajur Veda</span>
                <span className={styles.metricLabel}>Shukla &amp; Krishna Parampara</span>
              </div>
              <div className={styles.metricDivider}></div>
              <div className={styles.metricItem}>
                <span className={styles.metricNumber}>100% Free</span>
                <span className={styles.metricLabel}>Residential Gurukulam Education</span>
              </div>
              <div className={styles.metricDivider}></div>
              <div className={styles.metricItem}>
                <span className={styles.metricNumber}>Daily Seva</span>
                <span className={styles.metricLabel}>Gowshala &amp; Annadanam</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          2. THE FOUNDATION ESSENCE - Editorial Narrative
          =================================================================== */}
      <section className="section" aria-label="About the Foundation">
        <div className="container">
          <div className={styles.narrativeGrid}>
            <div className={styles.narrativeTextCol}>
              <span className="eyebrow">The Living Heritage</span>
              <h2 className={styles.narrativeTitle}>
                Rooted in Dharma, Preserved across Millennia
              </h2>
              <p className={styles.narrativeLead}>
                Established in 2009, Vedam Foundation was founded with the vision 
                of creating an authentic sanctuary for traditional Vedic learning in the modern world.
              </p>
              <p className={styles.narrativeBody}>
                In an era dominated by rapid distraction, our Gurukulam stands as a tranquil 
                haven where young minds immerse themselves in Shukla Yajur Veda, Krishna Yajur Veda, 
                and Sanskrit under the unbroken guidance of revered Acharyas.
              </p>

              <blockquote className={styles.editorialQuote}>
                <p className="sanskrit-verse">
                  “सत्यं वद। धर्मं चर। स्वाध्यायान्मा प्रमदः।”
                </p>
                <cite className="sanskrit-translation">
                  “Speak the truth. Practice righteousness. Never neglect your sacred learning.”
                  <br />
                  <span className={styles.quoteSource}>— Taittiriya Upanishad</span>
                </cite>
              </blockquote>

              <div className={styles.narrativeAction}>
                <Link href="/about" className="btn btn-secondary">
                  Read Our Full Story &amp; Lineage →
                </Link>
              </div>
            </div>

            <div className={styles.narrativeImageCol}>
              <div className={styles.narrativeImageFrame}>
                <Image
                  src="/images/sacred-texts.jpg"
                  alt="Ancient Vedic palm-leaf manuscripts inscribed in Sanskrit with brass lamp and rudraksha beads"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.editorialImage}
                />
              </div>
              <div className={styles.narrativeCaptionCard}>
                <span className={styles.captionTag}>Sacred Manuscripts</span>
                <p className={styles.captionText}>
                  Transmission of the unwritten oral sound (Shruti) carefully 
                  guarded through generations of Guru-Shishya parampara.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          3. THE GURUKULAM - Immersive Visual Learning
          =================================================================== */}
      <section className="section section-cream" aria-label="Gurukulam Life">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">The Gurukulam Experience</span>
            <h2>Nurturing Intellect, Spirit &amp; Character</h2>
            <p className={styles.sectionSubtitle}>
              We welcome young Vidyarthis between the ages of 7 and 12 years into a holistic,
              disciplined residential journey where ancient wisdom meets grounded human values.
            </p>
          </div>

          <div className={styles.gurukulamFeature}>
            <div className={styles.featureImageContainer}>
              <Image
                src="/images/vedic-learning.jpg"
                alt="Young Vidyarthis reciting Vedic hymns alongside their Acharya in the stone pavilion"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={styles.featureImage}
              />
            </div>

            <div className={styles.featureDetails}>
              <h3 className={styles.featureTitle}>The Three Pillars of Formation</h3>
              
              <div className={styles.pillarItem}>
                <div className={styles.pillarNumber}>01</div>
                <div>
                  <h4 className={styles.pillarHeading}>Rigorous Vedic Adhyayanam</h4>
                  <p className={styles.pillarText}>
                    Systematic oral recitation of Shukla Yajur Veda and Krishna Yajur Veda, 
                    complemented by classical Sanskrit grammar and scriptural study.
                  </p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <div className={styles.pillarNumber}>02</div>
                <div>
                  <h4 className={styles.pillarHeading}>Character &amp; Discipline</h4>
                  <p className={styles.pillarText}>
                    A structured daily routine (Dinacharya) beginning before sunrise with 
                    Sandhyavandanam, physical exercise, and mutual responsibility in community living.
                  </p>
                </div>
              </div>

              <div className={styles.pillarItem}>
                <div className={styles.pillarNumber}>03</div>
                <div>
                  <h4 className={styles.pillarHeading}>Holistic Enrichment</h4>
                  <p className={styles.pillarText}>
                    Complementary training in Yoga, traditional drawing, Abacus for mental agility, 
                    and active participation in daily Gowshala and Annadanam seva.
                  </p>
                </div>
              </div>

              <div className={styles.featureAction}>
                <Link href="/gurukulam" className="btn btn-primary">
                  Explore Curriculum &amp; Admissions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          4. SEVA INITIATIVES - Selfless Service as Worship
          =================================================================== */}
      <section className="section" aria-label="Seva Initiatives">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className="eyebrow">Dharma in Action</span>
            <h2>Sacred Seva Initiatives</h2>
            <p className={styles.sectionSubtitle}>
              Seva is the cornerstone of our Samajam. Through selflessness, devotion, 
              and compassion, we serve our students, the sacred cows, and society.
            </p>
          </div>

          <div className={styles.sevaGrid}>
            {/* Card 1: Gowshala */}
            <article className={styles.sevaCard}>
              <div className={styles.sevaCardImage}>
                <Image
                  src="/images/gowshala.jpg"
                  alt="Desi Gir cow being fed in a serene traditional Gowshala sanctuary"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.cardImg}
                />
                <span className={styles.sevaBadge}>Gowshala Seva</span>
              </div>
              <div className={styles.sevaCardBody}>
                <h3 className={styles.sevaCardTitle}>Gomatha Rakshana</h3>
                <p className={styles.sevaCardText}>
                  Providing loving sanctuary, nutritious fodder, and medical care to indigenous 
                  cows. Serving the sacred Gomatha is revered as one of the highest forms of Seva.
                </p>
                <Link href="/seva#gowshala" className={styles.cardLink}>
                  Learn About Cow Welfare →
                </Link>
              </div>
            </article>

            {/* Card 2: Annadanam */}
            <article className={styles.sevaCard}>
              <div className={styles.sevaCardImage}>
                <Image
                  src="/images/annadanam.jpg"
                  alt="Traditional Annadanam meal laid out on banana leaves with pure brass vessels"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.cardImg}
                />
                <span className={styles.sevaBadge}>Annadanam</span>
              </div>
              <div className={styles.sevaCardBody}>
                <h3 className={styles.sevaCardTitle}>Sacred Food Offering</h3>
                <p className={styles.sevaCardText}>
                  “Annam Parabrahma Swaroopam.” Daily nutritious meals for our resident Vidyarthis, 
                  visiting devotees, and large-scale community feeding during major festivals.
                </p>
                <Link href="/seva#annadanam" className={styles.cardLink}>
                  Support Annadanam Program →
                </Link>
              </div>
            </article>

            {/* Card 3: Religious Functions & Homam */}
            <article className={styles.sevaCard}>
              <div className={styles.sevaCardImage}>
                <Image
                  src="/images/rituals.jpg"
                  alt="Vedic Homa ritual with sacred fire and offerings for universal harmony"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.cardImg}
                />
                <span className={styles.sevaBadge}>Vedic Functions</span>
              </div>
              <div className={styles.sevaCardBody}>
                <h3 className={styles.sevaCardTitle}>Yajna &amp; Universal Harmony</h3>
                <p className={styles.sevaCardText}>
                  Organizing authentic Vedic Homams, continuous Veda Parayanams, and traditional 
                  functions to invoke blessings of peace, health, and spiritual purity for society.
                </p>
                <Link href="/seva#rituals" className={styles.cardLink}>
                  View Religious Functions →
                </Link>
              </div>
            </article>
          </div>

          <div className={styles.sevaCtaRow}>
            <Link href="/seva" className="btn btn-secondary">
              View All Seva Initiatives
            </Link>
            <Link href="/donations" className="btn btn-primary">
              Contribute to Seva Directly
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================
          5. ARCHITECTURAL SANCTUARY - Atmosphere & Haven
          =================================================================== */}
      <section className={styles.sanctuaryBanner} aria-label="Campus Sanctuary">
        <div className={styles.sanctuaryImageContainer}>
          <Image
            src="/images/architecture.jpg"
            alt="Traditional stone corridors and courtyard pond of the Gurukulam campus"
            fill
            sizes="100vw"
            className={styles.sanctuaryImage}
          />
          <div className={styles.sanctuaryOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.sanctuaryContent}>
            <span className="eyebrow eyebrow-dark">Sacred Architecture</span>
            <h2 className={styles.sanctuaryTitle}>
              An Atmosphere of Stillness, Purity &amp; Contemplation
            </h2>
            <p className={styles.sanctuaryText}>
              Surrounded by whispering trees and stone mandapams, our campus is designed 
              as an intentional retreat from urban chaos. Here, the day begins with the resonance 
              of Vedic chants and concludes with the peaceful glow of the evening lamp.
            </p>
            <div className={styles.sanctuaryActions}>
              <Link href="/about" className="btn btn-gold">
                Learn About Our Heritage
              </Link>
              <Link href="/contact" className="btn btn-outline-gold">
                Schedule a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          6. UPCOMING EVENTS & GATHERINGS
          =================================================================== */}
      <section className="section" aria-label="Events and Celebrations">
        <div className="container">
          <div className={styles.eventsHeaderRow}>
            <div>
              <span className="eyebrow">Religious Calendar</span>
              <h2>Gatherings &amp; Celebrations</h2>
              <p className={styles.sectionSubtitle}>
                Participate in our sacred observances and traditional celebrations at the Gurukulam.
              </p>
            </div>
            <Link href="/events" className="btn btn-secondary">
              View Full Calendar →
            </Link>
          </div>

          <div className={styles.eventGrid}>
            {/* Event 1 */}
            <div className={styles.eventCard}>
              <div className={styles.eventDateBadge}>
                <span className={styles.eventMonth}>AUG</span>
                <span className={styles.eventDay}>15</span>
                <span className={styles.eventYear}>2026</span>
              </div>
              <div className={styles.eventInfo}>
                <span className={styles.eventCategory}>Sacred Observance</span>
                <h3 className={styles.eventName}>Sravana Upakarma (Avani Avittam)</h3>
                <div className={styles.eventMeta}>
                  <span>📍 Gurukulam Premises</span>
                  <span>🕒 6:00 AM – 12:00 PM</span>
                </div>
                <p className={styles.eventDescription}>
                  Annual renewal of the sacred thread (Yajnopaveetam), collective Gayatri Mantra 
                  chanting, and Vedic rites to rejuvenate spiritual resolve.
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className={styles.eventCard}>
              <div className={styles.eventDateBadge}>
                <span className={styles.eventMonth}>SEP</span>
                <span className={styles.eventDay}>04</span>
                <span className={styles.eventYear}>2026</span>
              </div>
              <div className={styles.eventInfo}>
                <span className={styles.eventCategory}>Utsavam</span>
                <h3 className={styles.eventName}>Sri Krishna Janmashtami</h3>
                <div className={styles.eventMeta}>
                  <span>📍 Gurukulam Premises</span>
                  <span>🕒 5:00 PM Onwards</span>
                </div>
                <p className={styles.eventDescription}>
                  Celebrations marking the birth of Lord Krishna. Featuring special poojas, 
                  sweet neivedyam offerings, and devotional bhajans by our Vidhyarthis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================
          7. JOIN THE SAMAJAM & SUPPORT (Call to Action)
          =================================================================== */}
      <section className="section section-cream" aria-label="Join and Support">
        <div className="container">
          <div className={styles.ctaDualContainer}>
            {/* Left: Membership Box */}
            <div className={styles.ctaBoxParchment}>
              <span className="eyebrow">Community Alliance</span>
              <h3 className={styles.ctaBoxTitle}>Become a Member of the Samajam</h3>
              <p className={styles.ctaBoxDesc}>
                Stand alongside our Acharyas and patrons as a guardian of Vedic learning. 
                Your membership sustains monthly Gurukulam expenses and long-term seva initiatives.
              </p>
              <ul className={styles.ctaList}>
                <li>✓ Monthly, Yearly, and Life Patronage options</li>
                <li>✓ Regular updates on Vidyarthi progress and Gurukulam festivals</li>
                <li>✓ Special sankalpam during annual Vedic Parayanams</li>
              </ul>
              <Link href="/membership" className="btn btn-secondary">
                Explore Membership Plans
              </Link>
            </div>

            {/* Right: Donation Box */}
            <div className={styles.ctaBoxForest}>
              <span className="eyebrow eyebrow-dark">Tax-Exempt Giving</span>
              <h3 className={styles.ctaBoxTitleDark}>Support the Mission with a Donation</h3>
              <p className={styles.ctaBoxDescDark}>
                Every contribution directly feeds a student, cares for an indigenous cow, 
                or maintains the sacred sanctity of our classrooms. All donations qualify 
                for Section 80G tax exemption.
              </p>
              <div className={styles.donationQuickAmounts}>
                <span className={styles.quickPill}>₹1,001</span>
                <span className={styles.quickPill}>₹2,501</span>
                <span className={styles.quickPill}>₹5,001</span>
                <span className={styles.quickPill}>₹11,001</span>
              </div>
              <Link href="/donations" className="btn btn-gold">
                Proceed to Contribute Online
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
