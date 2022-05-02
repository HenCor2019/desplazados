import styles from './PodcastMessage.module.css'
export default function PodcastMessage({ message }) {
  return (
    <section className={styles.wrapper}>
      <p className={styles.message}>
        { message }
      </p>
    </section>
  )
}
