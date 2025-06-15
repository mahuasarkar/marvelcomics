import { useEffect, useState } from 'react';
import styles from '../styles/ComicGallery.module.scss';

const ComicCard = ({ comic }) => {

  // Format the date nicely (e.g., "8 JULY, 2022")
  // Date the volume was added to Comic Vine.
  // const formattedDate = new Date(comic.date_added).toLocaleDateString('en-US', {
  //   day: 'numeric',
  //   month: 'short',
  //   year: 'numeric'
  // }).toUpperCase();

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img 
          src={comic.image?.medium_url || '/images/default-comic.jpg'} 
          alt={comic.name || 'Comic cover'} 
        />
      </div>
      <h3 className={styles.cardTitle}>{comic.name || 'Untitled Comic'}</h3>
      <div className={styles.cardDetails}>
        <span>Issue #{comic.last_issue.id}</span>
        <span className={styles.separator}>|</span>
        <span>{comic.start_year}</span>
      </div>
    </div>
  );
};

const ComicGallery = () => {
  const [comics, setComics] = useState([]);
  const [selectedVillain, setSelectedVillain] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComics = async (villain = '') => {
    try {
      setLoading(true);

      let characterQuery = `name%3ASpider-Man`;
      if (villain) {
        characterQuery = `name%3A${encodeURIComponent(villain)}`;
      }

      const response = await fetch(`/api/fetchcomics?character=${characterQuery}`);
      const data = await response.json();
      setComics(data || []);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComics(selectedVillain);
  }, [selectedVillain]);

  if (error) return <div className={styles.loading}>Error: {error}</div>;

  return (
    <div>
      <div className={styles.filterContainer}>
        <select 
          value={selectedVillain} 
          onChange={(e) => setSelectedVillain(e.target.value)} 
          className={styles.filterDropdown}
        >
          <option value="">All Villains</option>
          <option value="Doctor Octopus">Doctor Octopus</option>
          <option value="Carnage">Carnage</option>
          <option value="Chameleon">Chameleon</option>
          <option value="Electro">Electro</option>
          <option value="Green Goblin">Green Goblin</option>
          <option value="Hobgoblin">Hobgoblin</option>
          <option value="Kraven the Hunter">Kraven the Hunter</option>
          <option value="Venom">Venom</option>
          <option value="Shocker">Shocker</option>
        </select>
      </div>

      <div className={styles.comicGallerySection}>
        <section className={styles.comicGallery}>
          <div className={styles.redLine}></div>

          {loading ? (
            <>
              <div className={styles.row}>
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={`skeleton1-${index}`} className={styles.skeletonCard}></div>
                ))}
              </div>
              <div className={styles.row}>
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={`skeleton2-${index}`} className={styles.skeletonCard}></div>
                ))}
              </div>
            </>
          ) : comics.length > 0 ? (
            <>
              <div className={styles.row}>
                {comics.slice(0, 4).map((comic) => (
                  <ComicCard key={comic.id} comic={comic} />
                ))}
              </div>
              <div className={styles.row}>
                {comics.slice(4, 8).map((comic) => (
                  <ComicCard key={comic.id} comic={comic} />
                ))}
              </div>
            </>
          ) : (
            <div className={styles.noResults}>No comics found for the selected filter.</div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ComicGallery;