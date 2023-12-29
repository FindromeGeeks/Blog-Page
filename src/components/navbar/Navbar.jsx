import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faSquareInstagram, faSquareThreads, faLinkedin, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <FontAwesomeIcon icon={faFacebookSquare} width={24} height={24}/>
        <FontAwesomeIcon icon={faSquareInstagram} width={24} height={24}/>
        <FontAwesomeIcon icon={faSquareThreads} width={24} height={24}/>
        <FontAwesomeIcon icon={faLinkedin} width={24} height={24}/>
        <FontAwesomeIcon icon={faSquareXTwitter} width={24} height={24}/>
      </div>
      <div className={styles.logo}></div>
      <div className={styles.links}></div>

    </div>
  )
}
