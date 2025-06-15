import { useState } from 'react';
import styles from '../styles/HeroSection.module.scss'
import HeroSectionModal from '../components/HeroSectionModal'// We'll create this next

const HeroSection = () => {
  const [selectedHero, setSelectedHero] = useState(null);

  // Sample data - replace with your actual data
  const cards = [
    {
      id: 1,
      title: "Iron Man",
      name: "Robert Downey Jr.",
      year: "1965",
      image: "/images/herosection/ironman.jpg",
      details: {
        bio: "Iron Man, aka Tony Stark, is a genius billionaire who created a powerful suit of armor to fight injustice.",
        movies: ["Iron Man", "Avengers", "Civil War"],
        powers: ["Powered armor suit", "Genius intellect", "Energy blasts"]
      }
    },
    {
      id: 2,
      title: "Scarlet Witch",
      name: "Elizabeth Olsen",
      year: "1989",
      image: "/images/herosection/wasp.jpg",
      details: {
        bio: "Scarlet Witch, also known as Wanda Maximoff, wields chaos magic and can alter reality itself.",
        movies: ["Avengers: Age of Ultron", "WandaVision", "Doctor Strange 2"],
        powers: ["Reality warping", "Telekinesis", "Energy manipulation"]
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
      title: "Hulk",
      name: "Mark Ruffalo",
      year: "1967",
      image: "/images/herosection/hulk.jpg",
      details: {
        bio: "Hulk, the alter ego of Bruce Banner, is a brilliant scientist who transforms into a powerful green giant when enraged.",
        movies: ["The Incredible Hulk", "Avengers", "Thor: Ragnarok"],
        powers: ["Superhuman strength", "Regeneration", "Durability"]
      }
    },
    {
      id: 5,
      title: "Captain Marvel",
      name: "Brie Larson",
      year: "1989",
      image: "/images/herosection/gamora.jpg",
      details: {
        bio: "Captain Marvel, aka Carol Danvers, is a former Air Force pilot with cosmic powers granted by the Tesseract.",
        movies: ["Captain Marvel", "Avengers: Endgame", "The Marvels"],
        powers: ["Energy absorption", "Flight", "Superhuman strength"]
      }
    },
    {
      id: 6,
      title: "Gamora",
      name: "Zoe Saldana",
      year: "1978",
      image: "/images/herosection/gamora.jpg",
      details: {
        bio: "Gamora is the adopted daughter of Thanos and a member of the Guardians of the Galaxy, known for her combat skills and agility.",
        movies: ["Guardians of the Galaxy", "Avengers: Infinity War", "Endgame"],
        powers: ["Expert combatant", "Agility", "Healing"],
      }
    },
    {
      id: 7,
      title: "Wasp",
      name: "Evangeline Lilly",
      year: "1979",
      image: "/images/herosection/wasp.jpg",
      details: {
        bio: "Wasp, aka Hope van Dyne, is a skilled fighter and scientist who uses a suit that allows her to shrink and fly.",
        movies: ["Ant-Man", "Ant-Man and the Wasp", "Endgame"],
        powers: ["Size manipulation", "Flight", "Energy blasts"]
      }
    },
    {
      id: 8,
      title: "Spider-Man",
      name: "Tom Holland",
      year: "1996",
      image: "/images/herosection/ironman.jpg",
      details: {
        bio: "Spider-Man, aka Peter Parker, is a young hero gifted with spider-like abilities after a radioactive spider bite.",
        movies: ["Spider-Man: Homecoming", "Avengers: Endgame", "No Way Home"],
        powers: ["Wall-crawling", "Spider-sense", "Super agility"]
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