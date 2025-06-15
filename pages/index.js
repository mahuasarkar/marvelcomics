import styles from '../styles/home.module.scss'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ComicGallery from '../components/ComicGallery'
import HeroSection from '../components/HeroSection'
import LatestNews from '../components/LatestNews'
import FooterBannerSection from '../components/FooterBannerSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        <Banner />
        {/* <ComicGallery /> */}
      </div>
      {/* <HeroSection /> */}
      <LatestNews />
      <FooterBannerSection />
      <Footer />
    </div>
  )
}