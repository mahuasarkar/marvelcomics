import styles from '../styles/LatestNews.module.scss'

const LatestNews = () => {

  const newsItems = [
    {
      id: 1,
      title: "Watch: Marvel Introduces Classic Mutant In New She-Hulk Clip",
      image: "/images/latestnews/latest-news-3.jpg"
    },
    {
      id: 2,
      title: "MCU: Alison Brie Fantasizes About Playing 'Great' Marvel Supervillain",
      image: "/images/latestnews/latest-news-4.jpg"
    },
    {
      id: 3,
      title: "Dave Filoni Defends Star Wars' 'Flexible' Tone Amid Criticism",
      image: "/images/latestnews/latest-news-5.jpg"
    },
    {
      id: 4,
      title: "Marvel Actress Teases Potential Role In MCU Thunderbolts Movie",
      image: "/images/latestnews/latest-news-3.jpg"
    },
    {
      id: 5,
      title: "Marvel Scolded Loki's Owen Wilson Multiple Times for MCU Spoilers",
      image: "/images/latestnews/latest-news-4.jpg"
    },
    {
      id: 6,
      title: "Marvel's Fantastic Four Origin Rule Raises 1 Giant MCU Question",
      image: "/images/latestnews/latest-news-6.jpg"
    }
  ]

  return (
    <section className={styles.latestNews}>

      <h2 className={styles.sectionTitle}>Latest News</h2>
      
      <div className={styles.newsColumns}>
        {/* First Column with 3 rows */}
        <div className={styles.newsColumn}>
          {newsItems.slice(0, 3).map(item => (
            <div key={`col1-${item.id}`} className={styles.newsCard}>
              <div className={styles.newsImage}>
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className={styles.newsTitle}>{item.title}</h3>
            </div>
          ))}
        </div>
        
        {/* Second Column with 3 rows */}
        <div className={styles.newsColumn}>
          {newsItems.slice(3, 6).map(item => (
            <div key={`col2-${item.id}`} className={styles.newsCard}>
              <div className={styles.newsImage}>
                <img src={item.image} alt={item.title} />
              </div>
              <h3 className={styles.newsTitle}>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default LatestNews;