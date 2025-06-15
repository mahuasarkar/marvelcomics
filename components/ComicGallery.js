import styles from '../styles/ComicGallery.module.scss'

const ComicGallery = () => {
  // Sample data - replace with your actual data
  const cards = [
    {
      title: "Thor Love and Thunder",
      duration: "119 min",
      date: "8 JULY, 2022",
      image: "/images/thor.jpg"
    },
    {
      title: "Black Panther Wakanda Forever",
      duration: "125 min",
      date: "11 NOV, 2022",
      image: "/images/black-panther.jpg"
    },
    {
      title: "Thor Love and Thunder",
      duration: "119 min",
      date: "8 JULY, 2022",
      image: "/images/thor.jpg"
    },
    {
      title: "Black Panther Wakanda Forever",
      duration: "125 min",
      date: "11 NOV, 2022",
      image: "/images/black-panther.jpg"
    },
    {
      title: "Thor Love and Thunder",
      duration: "119 min",
      date: "8 JULY, 2022",
      image: "/images/thor.jpg"
    },
    {
      title: "Black Panther Wakanda Forever",
      duration: "125 min",
      date: "11 NOV, 2022",
      image: "/images/black-panther.jpg"
    },
    {
      title: "Thor Love and Thunder",
      duration: "119 min",
      date: "8 JULY, 2022",
      image: "/images/thor.jpg"
    },
    {
      title: "Black Panther Wakanda Forever",
      duration: "125 min",
      date: "11 NOV, 2022",
      image: "/images/black-panther.jpg"
    },
    // Add 6 more cards following the same structure
  ];

  return (
    <div>
        <button className={styles.button}>Read More</button>
        <div className={styles.comicGallerySection}>
          <section className={styles.comicGallery}>
              {/* Red gradient line */}
              <div className={styles.redLine}></div>
              
              {/* First row */}
              <div className={styles.row}>
                  {cards.slice(0, 4).map((card, index) => (
                  <div key={index} className={styles.card}>
                      <div className={styles.cardImage}>
                      <img src={card.image} alt={card.title} />
                      </div>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <div className={styles.cardDetails}>
                      <span>{card.duration}</span>
                      <span className={styles.separator}>|</span>
                      <span>{card.date}</span>
                      </div>
                  </div>
                  ))}
              </div>
              
              {/* Second row */}
              <div className={styles.row}>
                  {cards.slice(4, 8).map((card, index) => (
                  <div key={index} className={styles.card}>
                      <div className={styles.cardImage}>
                      <img src={card.image} alt={card.title} />
                      </div>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <div className={styles.cardDetails}>
                      <span>{card.duration}</span>
                      <span className={styles.separator}>|</span>
                      <span>{card.date}</span>
                      </div>
                  </div>
                  ))}
              </div>
          </section>
        </div>
    </div>
    
  );
};

export default ComicGallery;