import styles from '../styles/HeroSectionModal.module.scss'

const HeroSectionModal = ({ hero, onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        
        <div className={styles.modalContent}>
          <div className={styles.modalImage}>
            <img src={hero.image} alt={hero.title} />
          </div>
          
          <div className={styles.modalDetails}>
            <h2>{hero.title}</h2>
            <h3>{hero.name}</h3>
            <p className={styles.bio}>{hero.details.bio}</p>
            
            <div className={styles.detailsSection}>
              <h4>Movies:</h4>
              <ul>
                {hero.details.movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
            </div>
            
            <div className={styles.detailsSection}>
              <h4>Powers:</h4>
              <ul>
                {hero.details.powers.map((power, index) => (
                  <li key={index}>{power}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionModal;