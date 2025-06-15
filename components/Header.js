import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/images/logo.jpg';
import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Image 
            src={logo}
            alt="Marvel Logo"
            width={204}
            height={84}
            priority    // Preload important image
        />
        <ul className={styles.menu}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Movies</Link></li>
          <li><Link href="/">Games</Link></li>
          <li><Link href="/comic">Comic</Link></li>
          <li><Link href="/characters">Character</Link></li>
          <li><Link href="/">News</Link></li>
          <li><Link href="/">More</Link></li>
        </ul>
      </nav>
    </header>
  )
}