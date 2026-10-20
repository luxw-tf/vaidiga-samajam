"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const FAQS = [
  {
    question: "Can anyone visit the Gurukulam premises?",
    answer:
      "Yes, we warmly welcome visitors, families, and seekers who wish to observe our traditional educational practices, visit the Gowshala, and participate in evening aarti. However, we request that you schedule your visit in advance so as not to disturb the Vidhyarthis' disciplined study hours. Please note that the campus is closed for general visitors on Amavasya.",
  },
  {
    question: "How can I enroll my child in the Veda Patashala?",
    answer:
      "Admissions typically open during the summer months prior to the start of the traditional academic year. Boys aged 7 to 12 years are eligible. The residential program provides complete 100% free boarding, lodging, clothing, healthcare, and education. Please contact our office directly or fill out the inquiry form to receive the detailed prospectus.",
  },
  {
    question: "Are contributions and donations tax-exempt?",
    answer:
      "Yes, Vedam Foundation (Sri Uttara Indraprastha Vaidiga Samajam) is an officially registered non-profit charitable trust. All monetary contributions qualify for income tax exemption under Section 80G of the Indian Income Tax Act. Official 80G receipts are automatically generated and emailed for all donations.",
  },
  {
    question: "Can I sponsor a specific event or homam for my family's Gothra?",
    answer:
      "Yes. Devotees regularly sponsor Annadanam on birthdays, anniversaries, or Shraddha days. You can also sponsor specific Havans, Veda Parayanams, or Gomatha poojas. Our Acharyas will perform the ritual with your family’s Gothra and Nakshatra sankalpam.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className={styles.contactWrapper}>
      {/* Editorial Page Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroImageContainer}>
          <Image
            src="/images/architecture.jpg"
            alt="Courtyard colonnade of Vedam Foundation"
            fill
            priority
            sizes="100vw"
            className={styles.heroBg}
          />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className="container">
          <div className={styles.heroContent}>
            <span className="eyebrow eyebrow-dark">Reach Our Sanctuary</span>
            <h1 className={styles.heroTitle}>
              Connect with <span className={styles.italicWord}>Vedam</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We welcome your visits, student admission inquiries, volunteer participation, 
              and queries regarding our Vedic programs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="section" aria-label="Contact Information and Inquiries">
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Left: Contact Information & Location */}
            <div className={styles.infoCol}>
              <div className={styles.infoCard}>
                <span className="eyebrow">Foundation Office</span>
                <h2 className={styles.infoHeading}>Sri Uttara Indraprastha Vaidiga Samajam</h2>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📍</div>
                  <div>
                    <h3 className={styles.infoTitle}>Sanctuary Address</h3>
                    <p className={styles.infoText}>
                      Vedam Foundation<br />
                      123 Traditional Path, Heritage Enclave<br />
                      Delhi NCR, India
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>📞</div>
                  <div>
                    <h3 className={styles.infoTitle}>Direct Contact</h3>
                    <p className={styles.infoText}>
                      Phone: <a href="tel:+919876543210" className={styles.linkText}>+91 98765 43210</a><br />
                      Email: <a href="mailto:info@vaidigasamajam.org" className={styles.linkText}>info@vaidigasamajam.org</a>
                    </p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIcon}>🕒</div>
                  <div>
                    <h3 className={styles.infoTitle}>Mandapam &amp; Office Hours</h3>
                    <p className={styles.infoText}>
                      Morning: 9:00 AM – 1:00 PM<br />
                      Evening: 4:00 PM – 8:00 PM<br />
                      <span className={styles.timingNote}>* Closed for general visitor tours on Amavasya</span>
                    </p>
                  </div>
                </div>

                {/* Refined Campus Directions Card */}
                <div className={styles.directionsCard}>
                  <div className={styles.directionsHeader}>
                    <span className={styles.directionsPin}>❖</span>
                    <h4>Visiting Decorum &amp; Transport</h4>
                  </div>
                  <p className={styles.directionsText}>
                    Conveniently connected via major transit routes. Visitors are requested 
                    to dress in modest traditional attire. Footwear must be removed at the 
                    outer stone gateway before entering the temple and classroom pavilions.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Inquiry Form */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                {isSubmitted ? (
                  <div className={styles.formSuccess} role="status">
                    <div className={styles.successIcon}>✓</div>
                    <h3 className={styles.successTitle}>Inquiry Received</h3>
                    <p className={styles.successText}>
                      Thank you, <strong>{formData.name}</strong>. Your message regarding{" "}
                      <strong>{formData.subject.toUpperCase()}</strong> has been forwarded to our 
                      administrative office. An Acharya or team coordinator will respond to{" "}
                      <strong>{formData.email}</strong> within 1–2 business days.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          subject: "general",
                          message: "",
                        });
                      }}
                      className="btn btn-secondary btn-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.inquiryForm}>
                    <span className="eyebrow">Send a Message</span>
                    <h2 className={styles.formTitle}>How Can We Assist You?</h2>

                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="contact-name">Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Full Name"
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="contact-email">Email Address *</label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your.email@example.com"
                          className={styles.input}
                        />
                      </div>
                      <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="contact-phone">Phone Number</label>
                        <input
                          id="contact-phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 00000 00000"
                          className={styles.input}
                        />
                      </div>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="contact-subject">Inquiry Subject</label>
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={styles.select}
                      >
                        <option value="general">General Information</option>
                        <option value="admission">Vidhyarthi Admissions (Ages 7–12)</option>
                        <option value="seva">Gowshala &amp; Annadanam Seva</option>
                        <option value="sponsorship">Festival Pooja / Sankalpam Sponsorship</option>
                        <option value="visit">Schedule a Campus Visit</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.label} htmlFor="contact-message">Your Message *</label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please describe your query in detail..."
                        className={styles.textarea}
                      ></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      Transmit Message →
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="section section-cream" aria-label="Frequently Asked Questions">
        <div className="container">
          <div className={styles.faqHeader}>
            <span className="eyebrow">Clarity &amp; Guidance</span>
            <h2>Frequently Asked Questions</h2>
            <p className={styles.faqSubtitle}>
              Essential details regarding visits, student admissions, and foundation operations.
            </p>
          </div>

          <div className={styles.faqAccordion}>
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ""}`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className={styles.faqQuestionBtn}
                    aria-expanded={isOpen}
                  >
                    <span className={styles.faqQuestionText}>{faq.question}</span>
                    <span className={styles.faqIcon}>{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && (
                    <div className={styles.faqAnswerBody}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
