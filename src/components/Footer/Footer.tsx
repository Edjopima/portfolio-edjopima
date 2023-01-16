import React from 'react'
import { AiFillHeart, AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import '../../styles/text.scss'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <div className={styles.Footer}>
      <div className='flex justify-center items-center'>
        <span>Made with</span>
        <AiFillHeart className='mx-1'/>
        <span> by Eduardo, 2023</span>
      </div>
      <div className={styles.Footer__socialContainer}>
        <span>Let's get in touch!</span>
        <div className='flex item-center'>
          <a className={styles.Footer__icon} href="" target="_blank" rel="noreferrer">
            <AiFillGithub size={20}/>
          </a>
          <a className={styles.Footer__icon} href="" target="_blank" rel="noreferrer">
            <AiOutlineTwitter size={20}/>
          </a>
          <a className={styles.Footer__icon} href="" target="_blank" rel="noreferrer">
            <AiFillLinkedin size={20}/>
          </a>
          <a className={styles.Footer__icon} href="" target="_blank" rel="noreferrer">
            <AiOutlineInstagram size={20}/>
          </a>
          <a className={styles.Footer__icon} href="" target="_blank" rel="noreferrer">
            <FaTelegramPlane size={20}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer