import { useState } from 'react';
import styles from '../styles/HeroSection.module.scss'
import HeroSectionModal from '../components/HeroSectionModal'// We'll create this next

const HeroSection = () => {
  const [selectedHero, setSelectedHero] = useState(null);

  // Sample data - replace with your actual data
  const cards = [
    {
      id: 1,
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg",
      details: {
        bio: "Thor is the God of Thunder, a founding member of the Avengers...",
        movies: ["Thor", "Avengers", "Thor: Ragnarok"],
        powers: ["Superhuman strength", "Weather manipulation", "Longevity"]
      }
    },
    {
      id: 2,
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg",
      details: {
        bio: "Thor is the God of Thunder, a founding member of the Avengers...",
        movies: ["Thor", "Avengers", "Thor: Ragnarok"],
        powers: ["Superhuman strength", "Weather manipulation", "Longevity"]
      }
    },
     {
      id: 3,
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg",
      details: {
        bio: "Thor is the God of Thunder, a founding member of the Avengers...",
        movies: ["Thor", "Avengers", "Thor: Ragnarok"],
        powers: ["Superhuman strength", "Weather manipulation", "Longevity"]
      }
    },
    {
      id: 4,
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg",
      details: {
        bio: "Thor is the God of Thunder, a founding member of the Avengers...",
        movies: ["Thor", "Avengers", "Thor: Ragnarok"],
        powers: ["Superhuman strength", "Weather manipulation", "Longevity"]
      }
    },
    {
      id: 5,
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg",
      details: {
        bio: "Thor is the God of Thunder, a founding member of the Avengers...",
        movies: ["Thor", "Avengers", "Thor: Ragnarok"],
        powers: ["Superhuman strength", "Weather manipulation", "Longevity"]
      }
    },
    {
      id: 6,
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg",
      details: {
        bio: "Thor is the God of Thunder, a founding member of the Avengers...",
        movies: ["Thor", "Avengers", "Thor: Ragnarok"],
        powers: ["Superhuman strength", "Weather manipulation", "Longevity"]
      }
    },
    {
      id: 7,
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg",
      details: {
        bio: "Thor is the God of Thunder, a founding member of the Avengers...",
        movies: ["Thor", "Avengers", "Thor: Ragnarok"],
        powers: ["Superhuman strength", "Weather manipulation", "Longevity"]
      }
    },
    {
      id: 8,
      title: "Thor",
      name: "Chris Hemsworth",
      year: "1983",
      image: "/images/herosection/thor.jpg",
      details: {
        bio: "Thor is the God of Thunder, a founding member of the Avengers...",
        movies: ["Thor", "Avengers", "Thor: Ragnarok"],
        powers: ["Superhuman strength", "Weather manipulation", "Longevity"]
      }
    }
  ];

  return (
    <div className={styles.heroSection}>
      <h3 className={styles.heroSectiontitle}>See Marvel Heros</h3>
      <section>
        {/* First row */}
        <div className={styles.row}>
          {cards.slice(0, 4).map((card, index) => (
            <div 
              key={index} 
              className={styles.card}
              onClick={() => setSelectedHero(card)}
            >
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
          {cards.slice(4, 8).map((card, index) => (
            <div 
              key={index} 
              className={styles.card}
              onClick={() => setSelectedHero(card)}
            >
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

      {/* Modal */}
      {selectedHero && (
        <HeroSectionModal 
          hero={selectedHero}
          onClose={() => setSelectedHero(null)}
        />
      )}

    </div>
  );
};

export default HeroSection;