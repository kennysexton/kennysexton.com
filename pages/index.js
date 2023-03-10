/* eslint-disable import/no-unresolved */
import ImageAspect from '@components/ImageAspect'
import styles from '../styles/Home.module.css'

/* Start app commands
 - npx
 - next dev
*/

export default function Home() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <ImageAspect />
      </main>

    </div>
  )
}
