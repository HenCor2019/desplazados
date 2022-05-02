import styles from './Video.module.css'

export default function Video(){
  return (
    <div className={styles.wrapper}>
      <div className={styles.aspectRatio}>
        <iframe
          src={`https://www.youtube.com/embed/oKhOxhzbswA`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          allowFullScreen
          title="Reproductor de YouTube"
          />
      </div>
    </div>
  )
}
