import Image from 'dreams/assets/images/poadcast/quesonamos.png'

import styles from './PodcastImage.module.css'

export default function PodcastImage() {
  return (
    <section className={styles.imgWrapper}>
      <img src={Image}/>
    </section>
  )
}
