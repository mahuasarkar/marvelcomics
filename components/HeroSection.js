import styles from '../styles/HeroSection.module.scss'

const HeroSection = () => {
  // Sample data - replace with your actual data
  const cards = [
    {
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg"  
    },
    {
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg"  
    },
    {
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg"  
    },
    {
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg"  
    },
    {
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg"  
    },
    {
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg"  
    },
    {
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg"  
    },
    {
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg"  
    },
  ];

  return (
    <div className={styles.heroSection}>
      <h3 className={styles.heroSectiontitle}>See Marvel Heros</h3>
      <section>
          {/* First row */}
          <div className={styles.row}>
              {cards.slice(0, 4).map((card, index) => (
              <div key={index} className={styles.card}>
                  <div className={styles.cardImage}>
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className={styles.cardDetails}>
                    <div>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <span className={styles.cardName}>{card.name}</span>
                    </div>
                    <span className={styles.cardYear}>{card.year}</span>
                  </div>
              </div>
              ))}
          </div>
          
          {/* Second row */}
          <div className={styles.row}>
              {cards.slice(0, 4).map((card, index) => (
              <div key={index} className={styles.card}>
                  <div className={styles.cardImage}>
                    <img src={card.image} alt={card.title} />
                  </div>
                  <div className={styles.cardDetails}>
                    <div>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <span className={styles.cardName}>{card.name}</span>
                    </div>
                    <span className={styles.cardYear}>{card.year}</span>
                  </div>
              </div>
              ))}
          </div>

      </section>
    </div>
  );
};

export default HeroSection;