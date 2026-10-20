import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Sacred Shloka Ribbon */}
      <div className={styles.mottoRibbon}>
        <div className="container">
          <div className={styles.mottoContainer}>
            <span className={styles.mottoEmblem}>❖</span>
            <div className={styles.mottoTextGroup}>
              <span className={styles.mottoDevanagari}>वेदो रक्षति रक्षितः</span>
              <span className={styles.mottoTransliteration}>
                Vedo Rakshati Rakshitaha
              </span>
              <span className={styles.mottoMeaning}>
                “The Vedas protect those who protect them.”
              </span>
            </div>
            <span className={styles.mottoEmblem}>❖</span>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Foundation Heritage */}
          <div className={styles.brandCol}>
            <div className={styles.brandHeader}>
              <div className={styles.emblemWrapper}>
                <Image
                  src="/vedam.png"
                  alt="Sri Uttara Indraprastha Vaidiga Samajam"
                  width={56}
                  height={56}
                  className={styles.emblemImage}
                />
              </div>
              <div>
                <h3 className={styles.brandName}>Vedam Foundation</h3>
                <span className={styles.brandAffiliation}>
                  Sri Uttara Indraprastha Vaidiga Samajam
                </span>
              </div>
            </div>
            <p className={styles.brandDescription}>
              Established in 2009 as a sanctuary for traditional Vedic learning,
              spiritual discipline, and selfless community seva. Preserving the
              unbroken Guru-Shishya parampara for future generations.
            </p>
            <div className={styles.taxBadge}>
              <span className={styles.taxIcon}>✓</span>
              <span>
                Registered Charitable Trust • Section 80G Tax-Exempt
              </span>
            </div>
          </div>

          {/* Column 2: Gurukulam Navigation */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>The Gurukulam</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/gurukulam">Veda Adhyayanam Overview</Link>
              </li>
              <li>
                <Link href="/gurukulam#curriculum">Shukla & Krishna Yajur Veda</Link>
              </li>
              <li>
                <Link href="/gurukulam#routine">Dinacharya (Daily Routine)</Link>
              </li>
              <li>
                <Link href="/gurukulam#admissions">Admissions (Ages 7–12)</Link>
              </li>
              <li>
                <Link href="/about#lineage">Guru-Shishya Parampara</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Seva Programs */}
          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Sacred Seva</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/seva#gurukulam">Gurukulam Vidhyarthi Seva</Link>
              </li>
              <li>
                <Link href="/seva#gowshala">Gowshala Seva (Cow Care)</Link>
              </li>
              <li>
                <Link href="/seva#annadanam">Nitya Annadanam</Link>
              </li>
              <li>
                <Link href="/seva#rituals">Vedic Homams & Functions</Link>
              </li>
              <li>
                <Link href="/donations">Make a Contribution</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Visits */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Sanctuary & Contact</h4>
            <address className={styles.contactDetails}>
              <p>
                <strong>Patashala Premises:</strong>
                <br />
                Heritage Enclave, Traditional Path
                <br />
                India
              </p>
              <p>
                <strong>Office Timings:</strong>
                <br />
                Morning: 9:00 AM – 1:00 PM
                <br />
                Evening: 4:00 PM – 8:00 PM
                <br />
                <span className={styles.timingNote}>
                  (Closed for visitors on Amavasya)
                </span>
              </p>
              <p>
                <strong>Direct Inquiries:</strong>
                <br />
                Phone:{" "}
                <a href="tel:+919876543210" className={styles.contactLink}>
                  +91 98765 43210
                </a>
                <br />
                Email:{" "}
                <a
                  href="mailto:info@vaidigasamajam.org"
                  className={styles.contactLink}
                >
                  info@vaidigasamajam.org
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Closing Foundation Statement */}
        <div className={styles.closingStatement}>
          <p>
            “A Journey of Seva, Learning, and Dharma — Nurturing minds with
            ancient wisdom, shaping compassionate character for the world.”
          </p>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Vedam Foundation. Sri Uttara
            Indraprastha Vaidiga Samajam. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/about">About Foundation</Link>
            <span>•</span>
            <Link href="/membership">Membership</Link>
            <span>•</span>
            <Link href="/donations">Donate (80G)</Link>
            <span>•</span>
            <Link href="/contact">Inquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
