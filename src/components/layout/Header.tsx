import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            Vaidiga Samajam
          </Link>
          <div className={styles.links}>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/gurukulam" className={styles.link}>Gurukulam</Link>
            <Link href="/seva" className={styles.link}>Seva</Link>
            <Link href="/events" className={styles.link}>Events</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
          <div className={styles.actions}>
            <Link href="/membership" className={styles.link}>
              Join
            </Link>
            <Link href="/donations" className={styles.cta}>
              Donate
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
