import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us | Vedam Foundation',
};

export default function ContactPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.subtitle}>We welcome your inquiries, visits, and support.</p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <h3 className={styles.infoTitle}>Address</h3>
                <p className={styles.infoText}>
                  Vedam Foundation<br />
                  123 Traditional Path, Heritage Enclave<br />
                  City Name, State, 123456<br />
                  India
                </p>
              </div>

              <div className={styles.infoItem}>
                <h3 className={styles.infoTitle}>Contact Details</h3>
                <p className={styles.infoText}>
                  Phone: +91 98765 43210<br />
                  Email: info@vaidigasamajam.org
                </p>
              </div>

              <div className={styles.infoItem}>
                <h3 className={styles.infoTitle}>Office Timings</h3>
                <p className={styles.infoText}>
                  Morning: 9:00 AM - 1:00 PM<br />
                  Evening: 4:00 PM - 8:00 PM<br />
                  (Closed on Amavasya)
                </p>
              </div>

              <div className={styles.mapPlaceholder}>
                [ Interactive Map Placeholder ]
              </div>
            </div>

            <div className={styles.formCard}>
              <h2 className={styles.sectionTitle} style={{ fontSize: '2rem', marginBottom: '2rem' }}>Send an Inquiry</h2>
              <form>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Full Name</label>
                  <input type="text" className={styles.inputField} placeholder="Your Name" />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Email Address</label>
                  <input type="email" className={styles.inputField} placeholder="your.email@example.com" />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Phone Number (Optional)</label>
                  <input type="tel" className={styles.inputField} placeholder="+91 00000 00000" />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Message</label>
                  <textarea className={styles.textareaField} placeholder="How can we help you?"></textarea>
                </div>

                <button type="button" className={styles.submitBtn}>
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Can anyone visit the Gurukulam?</h3>
              <p className={styles.faqAnswer}>
                Yes, we welcome visitors who wish to observe our practices and learn about our mission. 
                However, we request that you schedule your visit in advance so as not to disturb the students' routine.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>How can I enroll my child in the Gurukulam?</h3>
              <p className={styles.faqAnswer}>
                Admissions typically take place before the academic year begins. Children aged 7-12 are eligible. 
                Please contact our office for detailed admission procedures and criteria.
              </p>
            </div>
            <div className={styles.faqItem}>
              <h3 className={styles.faqQuestion}>Are donations tax-exempt?</h3>
              <p className={styles.faqAnswer}>
                Yes, Vedam Foundation is a registered organization. 
                Donations are eligible for tax exemption under section 80G of the Income Tax Act. 
                Receipts will be provided for all contributions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
