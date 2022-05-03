import styles from './PodcastImage.module.css'

export default function PodcastImage({ src }) {
  return (
    <section className={styles.imgWrapper}>
      <img src={src}/>
    </section>
  )
}
