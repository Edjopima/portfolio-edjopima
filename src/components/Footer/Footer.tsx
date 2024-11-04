import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai/index'
import '../../styles/text.scss'
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <div className={styles.Footer}>
      <div></div>
      <div className={styles.Footer__socialContainer}>
        <span>Let's get in touch!</span>
        <div className='flex item-center'>
          <a className={styles.Footer__icon} href="https://github.com/edjopima" target="_blank" rel="noreferrer">
            <AiFillGithub size={20}/>
          </a>
          <a className={styles.Footer__icon} href="https://www.linkedin.com/in/edjopima/" target="_blank" rel="noreferrer">
            <AiFillLinkedin size={20}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer