"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/gurukulam", label: "Gurukulam" },
  { href: "/seva", label: "Seva" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Top Heritage Notice Bar */}
      <aside className={styles.topbar}>
        <div className="container">
          <div className={styles.topbarContent}>
            <span className={styles.topbarMotto}>
              <span className={styles.sanskritText}>वेदो रक्षति रक्षितः</span>
              <span className={styles.mottoSeparator}>❖</span>
              <span>Sri Uttara Indraprastha Vaidiga Samajam (Regd. 2009)</span>
            </span>
            <div className={styles.topbarContact}>
              <span className={styles.topbarItem}>
                <span className={styles.topbarIcon}>✦</span>
                80G Tax Exemption Certified
              </span>
              <a href="tel:+919876543210" className={styles.topbarLink}>
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Sticky Navigation */}
      <header
        className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}
      >
        <div className="container">
          <nav className={styles.nav} aria-label="Main Navigation">
            {/* Brand Logo & Institution Mark */}
            <Link href="/" className={styles.brand} onClick={closeMenu}>
              <div className={styles.logoWrapper}>
                <Image
                  src="/vedam.png"
                  alt="Vedam Foundation Sacred Emblem"
                  width={48}
                  height={48}
                  className={styles.logoImage}
                  priority
                />
              </div>
              <div className={styles.brandTextGroup}>
                <span className={styles.brandName}>VEDAM FOUNDATION</span>
                <span className={styles.brandSubtitle}>
                  Veda Vedanga Patashala
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className={styles.desktopNav}>
              <ul className={styles.navLinks}>
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`${styles.navLink} ${
                          isActive ? styles.navLinkActive : ""
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Action Buttons */}
              <div className={styles.actions}>
                <Link
                  href="/membership"
                  className={`${styles.membershipLink} ${
                    pathname === "/membership" ? styles.membershipActive : ""
                  }`}
                >
                  Join Samajam
                </Link>
                <Link href="/donations" className={styles.donateBtn}>
                  <span className={styles.donateDot}></span>
                  Donate
                </Link>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className={styles.hamburger}
              onClick={toggleMenu}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <span
                className={`${styles.bar} ${
                  isMobileMenuOpen ? styles.barOpen1 : ""
                }`}
              ></span>
              <span
                className={`${styles.bar} ${
                  isMobileMenuOpen ? styles.barOpen2 : ""
                }`}
              ></span>
              <span
                className={`${styles.bar} ${
                  isMobileMenuOpen ? styles.barOpen3 : ""
                }`}
              ></span>
            </button>
          </nav>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`${styles.mobileDrawer} ${
            isMobileMenuOpen ? styles.mobileDrawerOpen : ""
          }`}
          aria-hidden={!isMobileMenuOpen}
        >
          <div className={styles.mobileDrawerInner}>
            <div className={styles.mobileSanskritBadge}>
              “A Journey of Seva, Learning, and Dharma”
            </div>

            <ul className={styles.mobileNavLinks}>
              <li>
                <Link
                  href="/"
                  className={`${styles.mobileNavLink} ${
                    pathname === "/" ? styles.mobileNavLinkActive : ""
                  }`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.mobileNavLink} ${
                        isActive ? styles.mobileNavLinkActive : ""
                      }`}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className={styles.mobileDivider}></div>

            <div className={styles.mobileActions}>
              <Link
                href="/membership"
                className={styles.mobileMembershipBtn}
                onClick={closeMenu}
              >
                Become a Member
              </Link>
              <Link
                href="/donations"
                className={styles.mobileDonateBtn}
                onClick={closeMenu}
              >
                Support Our Mission (Donate)
              </Link>
            </div>

            <div className={styles.mobileMeta}>
              <p>Registered Office: Delhi NCR, India</p>
              <p>Email: info@vaidigasamajam.org</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
