import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (

    <footer className="h-20 bg-neutral-900 flex justify-center items-center gap-6">
      <a href="https://www.instagram.com/kenny_sexton/" target="_blank" rel="noreferrer noopener">
        <div className={styles.circle}>
          <Image width={16} height={16} src="/icons/instagram.svg" alt="instagram" />
        </div>
      </a>

      <a href="https://github.com/kennysexton" target="_blank" rel="noreferrer noopener">
        <div className={styles.circle}>
          <Image width={16} height={16} src="/icons/github.svg" alt="github" />
        </div>
      </a>

      <a href="https://www.flickr.com/photos/146645820@N03/" target="_blank" rel="noreferrer noopener">
        <div className={styles.circle}>
          <Image width={16} height={16} src="/icons/flickr.svg" alt="flickr" />
        </div>
      </a>
    </footer>
  )
}
