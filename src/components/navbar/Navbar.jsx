import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faSquareInstagram, faSquareThreads, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import ThemeToggle from '../themeToggle/ThemeToggle'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <FontAwesomeIcon icon={faFacebookSquare} width={28} height={28}/>
        <FontAwesomeIcon icon={faSquareInstagram} width={28} height={28}/>
        <FontAwesomeIcon icon={faSquareThreads} width={28} height={28}/>
        <FontAwesomeIcon icon={faLinkedin} width={28} height={28}/>
        <FontAwesomeIcon icon={faSquareXTwitter} width={28} height={28}/>
      </div>
      <div className={styles.logo}>
        <Image src="/logo.svg" width={250} height={125}/>
      </div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
        <AuthLinks/>
      </div>

    </div>
  )
}
