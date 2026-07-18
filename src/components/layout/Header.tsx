"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logoLink} onClick={closeMenu}>
            <Image src="/IMG_4594.PNG" alt="Vaidiga Samajam Logo" width={60} height={60} className={styles.logoImage} priority />
          </Link>
          
          <div className={styles.desktopNav}>
            <div className={styles.links}>
              <Link href="/about" className={styles.link}>About</Link>
              <Link href="/gurukulam" className={styles.link}>Gurukulam</Link>
              <Link href="/seva" className={styles.link}>Seva</Link>
              <Link href="/events" className={styles.link}>Events</Link>
              <Link href="/contact" className={styles.link}>Contact</Link>
            </div>
            <div className={styles.actions}>
              <Link href="/membership" className={styles.link}>Join</Link>
              <Link href="/donations" className={styles.cta}>Donate</Link>
            </div>
          </div>

          <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barOpen1 : ''}`}></span>
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barOpen2 : ''}`}></span>
            <span className={`${styles.bar} ${isMobileMenuOpen ? styles.barOpen3 : ''}`}></span>
          </button>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/about" className={styles.mobileLink} onClick={closeMenu}>About</Link>
          <Link href="/gurukulam" className={styles.mobileLink} onClick={closeMenu}>Gurukulam</Link>
          <Link href="/seva" className={styles.mobileLink} onClick={closeMenu}>Seva</Link>
          <Link href="/events" className={styles.mobileLink} onClick={closeMenu}>Events</Link>
          <Link href="/contact" className={styles.mobileLink} onClick={closeMenu}>Contact</Link>
          <hr className={styles.divider} />
          <Link href="/membership" className={styles.mobileLink} onClick={closeMenu}>Join</Link>
          <Link href="/donations" className={`${styles.mobileLink} ${styles.mobileCta}`} onClick={closeMenu}>Donate</Link>
        </div>
      )}
    </header>
  );
}
