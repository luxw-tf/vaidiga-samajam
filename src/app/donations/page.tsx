import styles from './page.module.css';

export const metadata = {
  title: 'Donate | Vedam Foundation',
};

export default function DonationsPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.title}>Make a Donation</h1>
          <p className={styles.subtitle}>Your generous support sustains our Gurukulam, our Seva, and our Dharma.</p>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.formCard}>
            <form>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Donation Type</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="donation_type" value="one-time" defaultChecked />
                    One-time
                  </label>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="donation_type" value="recurring" />
                    Monthly Recurring
                  </label>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Select Amount (₹)</label>
                <div className={styles.amountGrid}>
                  <div className={styles.amountBtn}>1,001</div>
                  <div className={styles.amountBtn}>2,001</div>
                  <div className={`${styles.amountBtn} ${styles.active}`}>5,001</div>
                  <div className={styles.amountBtn}>10,001</div>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <input type="number" className={styles.inputField} placeholder="Custom Amount (₹)" />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Purpose of Donation</label>
                <select className={styles.inputField}>
                  <option value="general">General Fund (Where needed most)</option>
                  <option value="gurukulam">Gurukulam Seva (Education & Welfare)</option>
                  <option value="gowshala">Gowshala Seva (Cow Welfare)</option>
                  <option value="annadanam">Annadanam (Food Distribution)</option>
                  <option value="corpus">Corpus Fund</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Dedication (Optional)</label>
                <input type="text" className={styles.inputField} placeholder="In memory of / In honor of..." />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" name="anonymous" />
                  <span>Make this donation anonymous (Do not list my name publicly)</span>
                </label>
              </div>

              <button type="button" className={styles.submitBtn}>
                Proceed to Contribute
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
