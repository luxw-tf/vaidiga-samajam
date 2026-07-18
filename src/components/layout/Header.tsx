import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logoLink}>
            <Image src="/IMG_4594.PNG" alt="Vaidiga Samajam Logo" width={60} height={60} className={styles.logoImage} priority />
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
