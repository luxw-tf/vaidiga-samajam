import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <h3>Sri Uttara Indraprastha Vaidiga Samajam</h3>
            <p>A Place for Vedic Learning, Simple Living, and Spiritual Growth. A Journey of Seva, Learning, and Dharma.</p>
          </div>
          <div className={styles.links}>
            <h4>Explore</h4>
            <div className={styles.linkList}>
              <Link href="/about">About Us</Link>
              <Link href="/gurukulam">Gurukulam</Link>
              <Link href="/seva">Seva Initiatives</Link>
              <Link href="/events">Events</Link>
            </div>
          </div>
          <div className={styles.links}>
            <h4>Connect</h4>
            <div className={styles.linkList}>
              <Link href="/membership">Membership</Link>
              <Link href="/donations">Donations</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          &copy; {new Date().getFullYear()} Sri Uttara Indraprastha Vaidiga Samajam (Regd.). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
