"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const PRESET_AMOUNTS = [1001, 2501, 5001, 11001, 25001];

export default function DonationsPage() {
  const [donationType, setDonationType] = useState<"one-time" | "recurring">("one-time");
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5001);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [purpose, setPurpose] = useState<string>("gurukulam");
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [panNumber, setPanNumber] = useState<string>("");
  const [dedication, setDedication] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleAmountClick = (amt: number) => {
    setSelectedAmount(amt);
    setCustomAmount("");
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const finalAmount = customAmount ? parseFloat(customAmount) || 0 : selectedAmount || 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (finalAmount <= 0) {
      alert("Please enter a valid contribution amount.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div className={styles.donationsWrapper}>
      {/* Editorial Page Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/rituals.jpg"
            alt="Sacred sacrificial fire and offerings"
            fill
            priority
            sizes="100vw"
            className={styles.heroBg}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="eyebrow eyebrow-dark">Sacred Offering</span>
            <h1 className={styles.heroTitle}>
              Contribute to <span className={styles.italicWord}>Dharma</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Your generous contribution directly sustains our residential Vidhyarthis, 
              protects our indigenous cows, and preserves centuries of Vedic learning. 
              All donations qualify for Section 80G tax exemption.
            </p>
          </div>
        </div>
      </section>

      {/* Main Donation Container */}
      <section className="section" aria-label="Donation Portal">
        <div className="container">
          <div className={styles.donationLayout}>
            {/* Left: Interactive Contribution Console */}
            <div className={styles.formContainer}>
              {isSubmitted ? (
                <div className={styles.successCard} role="status">
                  <div className={styles.successIcon}>✓</div>
                  <span className="eyebrow">Receipt Initiation</span>
                  <h2 className={styles.successTitle}>Dharmic Gratitude</h2>
                  <p className={styles.successLead}>
                    Thank you, <strong>{fullName || "Generous Patron"}</strong>, for pledging 
                    a contribution of <strong>₹{finalAmount.toLocaleString("en-IN")}</strong> towards{" "}
                    <strong>{purpose.toUpperCase()}</strong>.
                  </p>
                  <div className={styles.successDetailsBox}>
                    <p>
                      <strong>Frequency:</strong> {donationType === "one-time" ? "One-Time Contribution" : "Monthly Sustaining Pledge"}
                    </p>
                    <p>
                      <strong>Tax Exemption:</strong> 80G documentation will be issued to {email || "your email"}.
                    </p>
                    {panNumber && (
                      <p>
                        <strong>PAN Recorded:</strong> {panNumber.toUpperCase()}
                      </p>
                    )}
                    {dedication && (
                      <p>
                        <strong>Dedication:</strong> “{dedication}”
                      </p>
                    )}
                  </div>
                  <p className={styles.successInstructions}>
                    Please use the bank details on the right to complete the transfer, 
                    or scan our official temple UPI code. Reference your name in the remarks.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-secondary btn-sm"
                  >
                    ← Make Another Contribution
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.donationForm}>
                  {/* Frequency Toggle */}
                  <div className={styles.formSection}>
                    <label className={styles.sectionLabel}>1. Donation Frequency</label>
                    <div className={styles.typeToggle}>
                      <button
                        type="button"
                        className={`${styles.toggleBtn} ${
                          donationType === "one-time" ? styles.toggleActive : ""
                        }`}
                        onClick={() => setDonationType("one-time")}
                      >
                        One-Time Offering
                      </button>
                      <button
                        type="button"
                        className={`${styles.toggleBtn} ${
                          donationType === "recurring" ? styles.toggleActive : ""
                        }`}
                        onClick={() => setDonationType("recurring")}
                      >
                        Monthly Sustaining
                      </button>
                    </div>
                  </div>

                  {/* Amount Selection */}
                  <div className={styles.formSection}>
                    <label className={styles.sectionLabel}>2. Select Contribution Amount (₹)</label>
                    <div className={styles.amountGrid}>
                      {PRESET_AMOUNTS.map((amt) => {
                        const isSelected = selectedAmount === amt;
                        return (
                          <button
                            key={amt}
                            type="button"
                            className={`${styles.amountBtn} ${
                              isSelected ? styles.amountActive : ""
                            }`}
                            onClick={() => handleAmountClick(amt)}
                          >
                            ₹{amt.toLocaleString("en-IN")}
                          </button>
                        );
                      })}
                    </div>
                    <div className={styles.customAmountWrapper}>
                      <span className={styles.currencyPrefix}>₹</span>
                      <input
                        type="number"
                        min="100"
                        placeholder="Other Custom Amount"
                        value={customAmount}
                        onChange={handleCustomChange}
                        className={styles.customInput}
                      />
                    </div>
                  </div>

                  {/* Purpose of Donation */}
                  <div className={styles.formSection}>
                    <label className={styles.sectionLabel} htmlFor="donation-purpose">
                      3. Purpose of Contribution
                    </label>
                    <select
                      id="donation-purpose"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      className={styles.selectField}
                    >
                      <option value="general">General Fund (Where needed most)</option>
                      <option value="gurukulam">Gurukulam Vidhyarthi Seva (Free Education &amp; Lodging)</option>
                      <option value="gowshala">Gowshala Seva (Indigenous Cow Protection &amp; Fodder)</option>
                      <option value="annadanam">Nitya Annadanam (Sacred Food Distribution)</option>
                      <option value="corpus">Corpus Fund (Permanent Institutional Endowment)</option>
                    </select>
                  </div>

                  {/* Donor Information */}
                  <div className={styles.formSection}>
                    <label className={styles.sectionLabel}>4. Donor Details (for 80G Tax Exemption)</label>
                    <div className={styles.fieldsGrid}>
                      <div>
                        <label className={styles.inputLabel} htmlFor="donor-name">Full Name *</label>
                        <input
                          id="donor-name"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Your Legal Name"
                          className={styles.inputField}
                        />
                      </div>
                      <div>
                        <label className={styles.inputLabel} htmlFor="donor-email">Email Address *</label>
                        <input
                          id="donor-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your.email@example.com"
                          className={styles.inputField}
                        />
                      </div>
                      <div>
                        <label className={styles.inputLabel} htmlFor="donor-phone">Phone Number</label>
                        <input
                          id="donor-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 00000 00000"
                          className={styles.inputField}
                        />
                      </div>
                      <div>
                        <label className={styles.inputLabel} htmlFor="donor-pan">PAN Number (for 80G receipt)</label>
                        <input
                          id="donor-pan"
                          type="text"
                          maxLength={10}
                          value={panNumber}
                          onChange={(e) => setPanNumber(e.target.value)}
                          placeholder="ABCDE1234F"
                          className={styles.inputField}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dedication & Anonymity */}
                  <div className={styles.formSection}>
                    <label className={styles.sectionLabel} htmlFor="donation-dedication">
                      5. Sacred Dedication / Sankalpam (Optional)
                    </label>
                    <input
                      id="donation-dedication"
                      type="text"
                      value={dedication}
                      onChange={(e) => setDedication(e.target.value)}
                      placeholder="In memory of ancestors / in honor of family occasion..."
                      className={styles.inputField}
                    />

                    <label className={styles.checkboxLabel}>
                      <input
                        type="checkbox"
                        checked={isAnonymous}
                        onChange={(e) => setIsAnonymous(e.target.checked)}
                      />
                      <span>Make this donation anonymous (Do not list my name on public donor roll)</span>
                    </label>
                  </div>

                  {/* Submit CTA */}
                  <button type="submit" className={styles.submitBtn}>
                    Proceed to Contribute ₹{finalAmount.toLocaleString("en-IN")}
                  </button>
                </form>
              )}
            </div>

            {/* Right: Bank Transfer & Trust Sidebar */}
            <aside className={styles.sidebar}>
              {/* Direct Bank Details */}
              <div className={styles.bankCard}>
                <span className={styles.sidebarBadge}>Direct Bank Transfer</span>
                <h3 className={styles.bankTitle}>NEFT / RTGS / IMPS</h3>
                <p className={styles.bankDesc}>
                  You may also transfer your contribution directly to our registered trust bank account:
                </p>

                <div className={styles.bankDetailsList}>
                  <div className={styles.bankRow}>
                    <span className={styles.bankKey}>Account Name:</span>
                    <strong className={styles.bankVal}>Sri Uttara Indraprastha Vaidiga Samajam</strong>
                  </div>
                  <div className={styles.bankRow}>
                    <span className={styles.bankKey}>Bank Name:</span>
                    <strong className={styles.bankVal}>State Bank of India</strong>
                  </div>
                  <div className={styles.bankRow}>
                    <span className={styles.bankKey}>Account Type:</span>
                    <strong className={styles.bankVal}>Current Account</strong>
                  </div>
                  <div className={styles.bankRow}>
                    <span className={styles.bankKey}>Account Number:</span>
                    <strong className={styles.bankVal}>123456789012</strong>
                  </div>
                  <div className={styles.bankRow}>
                    <span className={styles.bankKey}>IFSC Code:</span>
                    <strong className={styles.bankVal}>SBIN0001234</strong>
                  </div>
                </div>

                <div className={styles.bankNote}>
                  Please email your transaction UTR reference and address to 
                  <strong> info@vaidigasamajam.org</strong> to receive your 80G receipt and sacred prasadam.
                </div>
              </div>

              {/* 80G Exemption Callout */}
              <div className={styles.taxExemptCard}>
                <div className={styles.taxIconBadge}>80G</div>
                <div>
                  <h4 className={styles.taxTitle}>100% Tax Deductible</h4>
                  <p className={styles.taxText}>
                    Vedam Foundation is a recognized non-profit trust. All donations are 
                    eligible for 50% deduction under Section 80G of the Income Tax Act.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
