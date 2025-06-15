import styles from '../styles/FooterBannerSection.module.scss'

const FooterBannerSection = () => {
  return (
    <section className={styles.footerBanner}>
      <div className={styles.bannerContainer}>
        {/* Left Side Image */}
        <div className={styles.bannerImage}>
          <img 
            src="/images/footer-banner.jpg" 
            alt="Marvel Insider Banner"
          />
        </div>
        
        {/* Right Side Content */}
        <div className={styles.bannerContent}>
          <h2 className={styles.insiderTitle}>MARVEL INSIDER</h2>
          <p className={styles.insiderSubtitle}>watch, Earn, Redeem!</p>
          <p className={styles.insiderText}>
            Get a reward for what you already do as a fan.
          </p>
          <button className={styles.joinButton}>Join Now</button>
        </div>
      </div>
    </section>
  )
}

export default FooterBannerSection