"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const MEMBERSHIP_PLANS = [
  {
    id: "monthly",
    name: "Nitya Sahayaka",
    subtitle: "Monthly Patron",
    amount: "₹1,000",
    period: "/ month",
    featured: false,
    description:
      "Provide steady, uninterrupted monthly sustenance for our resident Vidhyarthis' satvik meals and classroom supplies.",
    features: [
      "Sustains daily Annadanam & study materials",
      "Monthly digital updates from the Gurukulam",
      "Special sankalpam during monthly Shukla Paksha poojas",
      "Section 80G cumulative tax exemption receipt",
    ],
    ctaText: "Join as Monthly Patron",
  },
  {
    id: "yearly",
    name: "Varshika Poshaka",
    subtitle: "Annual Dharma Guardian",
    amount: "₹12,000",
    period: "/ year",
    featured: true,
    badge: "Most Recommended",
    description:
      "A complete annual commitment enabling the Samajam to plan long-term Vedic education batches and major annual Utsavams.",
    features: [
      "Covers 1 year of residential Vidyarthi vastram & texts",
      "Special family sankalpam at Sravana Upakarma & Janmashtami",
      "Prasadam shipped directly to your residence",
      "Annual printed Gurukulam chronicle & financial report",
      "Section 80G tax exemption certificate",
    ],
    ctaText: "Enroll as Annual Guardian",
  },
  {
    id: "life",
    name: "Maha Poshaka",
    subtitle: "Permanent Life Pillar",
    amount: "₹1,00,000",
    period: "one-time",
    featured: false,
    description:
      "Become an enduring pillar of the Samajam. Your contribution is deposited into the Corpus Fund to guarantee perpetual Vedic continuity.",
    features: [
      "Perpetual endowment in the Samajam Corpus Fund",
      "Permanent family name inscribed in the Patashala honor roll",
      "Annual special Homa conducted in your family’s Gothra",
      "Lifetime invitations to all sacred Patashala functions",
      "Complete 80G tax benefit documentation",
    ],
    ctaText: "Become a Life Patron",
  },
];

export default function MembershipPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>("yearly");
  const [confirmedPlan, setConfirmedPlan] = useState<string | null>(null);

  const handleSelect = (planId: string) => {
    setSelectedPlan(planId);
    setConfirmedPlan(planId);
  };

  return (
    <div className={styles.membershipWrapper}>
      {/* Editorial Page Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/architecture.jpg"
            alt="Courtyard of Vedam Foundation"
            fill
            priority
            sizes="100vw"
            className={styles.heroBg}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="eyebrow eyebrow-dark">Dharma Fellowship</span>
            <h1 className={styles.heroTitle}>
              Become a <span className={styles.italicWord}>Member</span> of the Samajam
            </h1>
            <p className={styles.heroSubtitle}>
              Join a dedicated fellowship of patrons committed to safeguarding 
              traditional Vedic learning, Gowshala care, and the sacred Guru-Shishya lineage.
            </p>
          </div>
        </div>
      </section>

      {/* Plan Selection Section */}
      <section className="section" aria-label="Membership Tiers">
        <div className="container">
          <div className={styles.introHeader}>
            <span className="eyebrow">Support the Samajam</span>
            <h2>Choose Your Sacred Commitment</h2>
            <p className={styles.introSubtitle}>
              By becoming a member, you play a vital role in ensuring the continuous operation of 
              the Gurukulam and our various Seva initiatives. Select a tier that aligns with your family’s resolve.
            </p>
          </div>

          {confirmedPlan && (
            <div className={styles.confirmedAlert} role="alert">
              <div className={styles.confirmedIcon}>✓</div>
              <div>
                <strong>Selected Tier: {MEMBERSHIP_PLANS.find(p => p.id === confirmedPlan)?.name} ({MEMBERSHIP_PLANS.find(p => p.id === confirmedPlan)?.subtitle})</strong>
                <p>
                  To complete your membership enrollment, please proceed to our secure donation portal 
                  with your contribution or contact our office for direct bank transfer instructions.
                </p>
              </div>
              <Link href="/donations" className="btn btn-primary btn-sm">
                Proceed to Contribute
              </Link>
            </div>
          )}

          <div className={styles.pricingGrid}>
            {MEMBERSHIP_PLANS.map((plan) => {
              const isSelected = selectedPlan === plan.id;
              return (
                <div
                  key={plan.id}
                  className={`${styles.pricingCard} ${
                    plan.featured ? styles.featuredCard : ""
                  } ${isSelected ? styles.selectedCard : ""}`}
                >
                  {plan.badge && (
                    <div className={styles.cardBadge}>{plan.badge}</div>
                  )}

                  <div className={styles.planHeader}>
                    <h3 className={styles.planName}>{plan.name}</h3>
                    <span className={styles.planSubtitle}>{plan.subtitle}</span>
                  </div>

                  <div className={styles.priceRow}>
                    <span className={styles.priceAmount}>{plan.amount}</span>
                    <span className={styles.pricePeriod}>{plan.period}</span>
                  </div>

                  <p className={styles.planDesc}>{plan.description}</p>

                  <div className={styles.divider}></div>

                  <ul className={styles.featureList}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className={styles.checkIcon}>✦</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => handleSelect(plan.id)}
                    className={`${styles.selectBtn} ${
                      plan.featured ? styles.btnFeatured : ""
                    }`}
                  >
                    {isSelected ? "Selected Tier ✓" : plan.ctaText}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Transparency */}
      <section className="section section-cream" aria-label="Member Benefits">
        <div className="container">
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>📜</div>
              <h4 className={styles.trustTitle}>80G Tax Exemption</h4>
              <p className={styles.trustText}>
                All membership fees and donations are 100% tax-exempt under Section 80G 
                of the Indian Income Tax Act.
              </p>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🕊️</div>
              <h4 className={styles.trustTitle}>Pure Seva Allocation</h4>
              <p className={styles.trustText}>
                Over 90% of funds go directly towards student boarding, medical care, 
                indigenous cow feed, and sacred rituals.
              </p>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>🪔</div>
              <h4 className={styles.trustTitle}>Spiritual Blessings</h4>
              <p className={styles.trustText}>
                Regular family sankalpam performed by our Acharyas and Vidhyarthis 
                during auspicious Tithis and festival days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
