import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* Logo Row */}
      <div className={styles.logoRow}>
        <img 
          src="/images/logo.jpg" 
          alt="Marvel Logo" 
          className={styles.logo}
        />
      </div>

      {/* Main Footer Content */}
      <div className={styles.mainContent}>
        {/* Column 1 */}
        <div className={styles.column1}>
          <p>ABOUT MARVEL</p>
          <p>HELP/FAQS</p>
          <p>INTENSHIPS</p>
          <p>CAREERS</p>
        </div>

        {/* Column 2 */}
        <div className={styles.column2}>
          <p>ADVERTISING</p>
          <p>DISNEY+</p>
          <p>MARVELHQ.COM</p>
          <p>REDEEM DIGITAL COMICS</p>
        </div>

        {/* Column 3 */}
        <div className={styles.comboColumn}>
          <div className={styles.comboItem}>
            <div>
              <img src="/images/footer/marvel-insider.png" alt="Marvel Insider" />
            </div>
            <div className={styles.comboItemDiv}>
              <p className={styles.comboTitle}>MARVEL INSIDER</p>
              <p className={styles.comboText}>Get Rewarded for Being a Marvel Fan</p>
            </div>
          </div>
          <div className={styles.comboItem}>
            <div className={styles.comboItemDiv}>
              <img src="/images/footer/marvel-unlimited.png" alt="Marvel Unlimited" />
            </div>
            <div>
              <p className={styles.comboTitle}>MARVEL UNLIMITED</p>
              <p className={styles.comboText}>Access Over 30,000+ Digital Comics</p>
            </div>
          </div>
        </div>

        {/* Column 4 */}
        <div className={styles.column}>
          <p className={styles.comboTitle}>FOLLOW MARVEL</p>
          <img className={styles.socialIcons} src="/images/footer/social.jpg" alt="Social" />
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className={styles.legalSection}>
        <div className={styles.legalRow}>
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
          <span>Your California Privacy Rights</span>
          <span>Children's Online Privacy Policy</span>
          <span>Do Not Sell My Personal Information</span>
        </div>
        <div className={styles.legalRow}>
          <span>License Agreement</span>
          <span>Marvel Insider Terms</span>
          <span>©2022 MARVEL</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer