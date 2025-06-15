import styles from '../styles/Banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h1 className={styles.title}>Spider-Man's 60th</h1>
        <p className={styles.subtitle}>
          Celebrate Spidey's 60th anniversary with most of his most iconic stories!
        </p>
      </div>
    </div>
  )
}