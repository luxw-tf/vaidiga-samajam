import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata = {
  title: "Sacred Seva Initiatives | Vedam Foundation",
  description:
    "Explore and support our ongoing Seva initiatives: Gurukulam Vidhyarthi Care, Gowshala Cow Protection, Nitya Annadanam, and Vedic Religious Functions.",
};

export default function SevaPage() {
  return (
    <div className={styles.sevaWrapper}>
      {/* Editorial Page Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/rituals.jpg"
            alt="Sacred Vedic fire offering during a peace homam"
            fill
            priority
            sizes="100vw"
            className={styles.heroBg}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="eyebrow eyebrow-dark">Dharma in Action</span>
            <h1 className={styles.heroTitle}>
              Sacred <span className={styles.italicWord}>Seva</span> Initiatives
            </h1>
            <p className={styles.heroSubtitle}>
              Selfless service for the welfare of all beings, the preservation of our cultural roots, 
              and the sustenance of Vedic knowledge for future generations.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy of Seva */}
      <section className="section" aria-label="Philosophy of Seva">
        <div className="container">
          <div className={styles.philosophyBlock}>
            <span className="eyebrow">Service as Worship</span>
            <h2 className={styles.philosophyHeading}>“सर्वभूतहिते रताः” — Dedicated to the Good of All</h2>
            <p className={styles.philosophyLead}>
              In the Vedic worldview, true spiritual growth cannot exist in isolation. Seva 
              (selfless service) is an indispensable expression of gratitude toward the cosmos, 
              the Gurus, our sacred cows, and society.
            </p>
            <p className={styles.philosophyText}>
              Every initiative at Vedam Foundation is maintained entirely through the collective 
              devotion of our patrons and well-wishers. We invite you to be part of these sacred endeavors.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Seva Programs (Alternating Asymmetric Grid) */}

      {/* 1. Gurukulam Vidhyarthi Seva */}
      <section className="section section-cream" id="gurukulam" aria-label="Gurukulam Seva">
        <div className="container">
          <div className={styles.sevaRow}>
            <div className={styles.sevaImageCol}>
              <div className={styles.imageCard}>
                <Image
                  src="/images/vedic-learning.jpg"
                  alt="Students learning Vedic recitation under the Acharya"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.sevaPhoto}
                />
              </div>
            </div>
            <div className={styles.sevaTextCol}>
              <span className={styles.sevaCategoryTag}>Seva 01 • Education &amp; Welfare</span>
              <h2 className={styles.sevaHeading}>Gurukulam Vidhyarthi Seva</h2>
              <p className={styles.sevaParagraph}>
                Supporting the daily needs, education, lodging, and health of our resident Vidhyarthis. 
                Our students receive complete 100% free traditional schooling, books, traditional vastram, 
                and personal mentorship.
              </p>
              <p className={styles.sevaParagraph}>
                Your contribution ensures that the unbroken oral transmission of Shukla Yajur Veda 
                and Krishna Yajur Veda continues without financial compromise.
              </p>
              <div className={styles.sevaImpactPills}>
                <span className={styles.impactPill}>✓ Books &amp; Vastram</span>
                <span className={styles.impactPill}>✓ Medical Care</span>
                <span className={styles.impactPill}>✓ Residential Maintenance</span>
              </div>
              <div className={styles.sevaBtnGroup}>
                <Link href="/donations" className="btn btn-primary">
                  Sponsor a Vidhyarthi →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Gowshala Seva */}
      <section className="section" id="gowshala" aria-label="Gowshala Seva">
        <div className="container">
          <div className={styles.sevaRowReverse}>
            <div className={styles.sevaImageCol}>
              <div className={styles.imageCard}>
                <Image
                  src="/images/gowshala.jpg"
                  alt="Desi Gir cow receiving green fodder in the sanctuary"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.sevaPhoto}
                />
              </div>
            </div>
            <div className={styles.sevaTextCol}>
              <span className={styles.sevaCategoryTag}>Seva 02 • Cow Protection</span>
              <h2 className={styles.sevaHeading}>Gowshala Seva (Gomatha Rakshana)</h2>
              <p className={styles.sevaParagraph}>
                Caring for sacred indigenous cows, who hold a venerable place in Vedic culture. 
                Our Gowshala provides clean, spacious shelters, regular veterinary checkups, 
                and wholesome green nutrition.
              </p>
              <p className={styles.sevaParagraph}>
                Serving the Gomatha is revered as one of the highest spiritual disciplines, 
                blessing the home with peace, abundance, and positive energy.
              </p>
              <div className={styles.sevaImpactPills}>
                <span className={styles.impactPill}>✓ Fresh Green Fodder</span>
                <span className={styles.impactPill}>✓ Veterinary Care</span>
                <span className={styles.impactPill}>✓ Sanctified Cow Sheds</span>
              </div>
              <div className={styles.sevaBtnGroup}>
                <Link href="/donations" className="btn btn-primary">
                  Support Gowshala Seva →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Annadanam */}
      <section className="section section-cream" id="annadanam" aria-label="Annadanam Seva">
        <div className="container">
          <div className={styles.sevaRow}>
            <div className={styles.sevaImageCol}>
              <div className={styles.imageCard}>
                <Image
                  src="/images/annadanam.jpg"
                  alt="Satvik meals served on banana leaves with pure brass vessels"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.sevaPhoto}
                />
              </div>
            </div>
            <div className={styles.sevaTextCol}>
              <span className={styles.sevaCategoryTag}>Seva 03 • Sacred Food Distribution</span>
              <h2 className={styles.sevaHeading}>Nitya Annadanam</h2>
              <p className={styles.sevaParagraph}>
                “अन्नं परब्रह्म स्वरूपम्” — Food is the tangible manifestation of the Supreme. 
                We conduct daily Annadanam at the Gurukulam, ensuring our students, staff, visiting devotees, 
                and neighbors are fed with wholesome, pure satvik food.
              </p>
              <p className={styles.sevaParagraph}>
                During major religious festivals and annual functions, our Annadanam expands to feed 
                hundreds of devotees in the traditional dining hall.
              </p>
              <div className={styles.sevaImpactPills}>
                <span className={styles.impactPill}>✓ Pure Satvik Meals</span>
                <span className={styles.impactPill}>✓ Daily Student Nutrition</span>
                <span className={styles.impactPill}>✓ Festival Feasts</span>
              </div>
              <div className={styles.sevaBtnGroup}>
                <Link href="/donations" className="btn btn-primary">
                  Sponsor Annadanam Meals →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Religious Functions & Homams */}
      <section className="section" id="rituals" aria-label="Vedic Rituals">
        <div className="container">
          <div className={styles.sevaRowReverse}>
            <div className={styles.sevaImageCol}>
              <div className={styles.imageCard}>
                <Image
                  src="/images/rituals.jpg"
                  alt="Traditional Vedic fire ritual offering ghee to the flames"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.sevaPhoto}
                />
              </div>
            </div>
            <div className={styles.sevaTextCol}>
              <span className={styles.sevaCategoryTag}>Seva 04 • Spiritual Well-Being</span>
              <h2 className={styles.sevaHeading}>Religious Functions &amp; Homams</h2>
              <p className={styles.sevaParagraph}>
                Organizing vital Vedic rituals, Havans, and Poojas for universal peace, timely rains, 
                and environmental sanctification. These sacred functions purify the atmosphere and foster 
                harmony throughout the community.
              </p>
              <p className={styles.sevaParagraph}>
                Donors may register their families for special Sankalpams during major rituals such as 
                Sravana Upakarma, Krishna Janmashtami, and annual Veda Parayanam.
              </p>
              <div className={styles.sevaImpactPills}>
                <span className={styles.impactPill}>✓ Shanti Homams</span>
                <span className={styles.impactPill}>✓ Veda Parayanams</span>
                <span className={styles.impactPill}>✓ Family Sankalpams</span>
              </div>
              <div className={styles.sevaBtnGroup}>
                <Link href="/donations" className="btn btn-primary">
                  Participate with Sankalpam →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Exemption & Contribution CTA */}
      <section className="section section-dark" aria-label="Contribution Call">
        <div className="container">
          <div className={styles.ctaBox}>
            <span className="eyebrow eyebrow-dark">Tax Benefit</span>
            <h2 className={styles.ctaTitle}>Make a Difference Through Seva</h2>
            <p className={styles.ctaText}>
              All contributions toward Vedam Foundation (Sri Uttara Indraprastha Vaidiga Samajam) 
              qualify for tax exemption under <strong>Section 80G</strong> of the Income Tax Act. 
              Official tax exemption receipts and prasadam are issued for all contributions.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/donations" className="btn btn-gold">
                Proceed to Donate Online
              </Link>
              <Link href="/contact" className="btn btn-outline-gold">
                Contact for Direct Bank Transfer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
