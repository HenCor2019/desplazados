import styles from './Video.module.css'

export default function Video({ onEnded, embedId }){
  return (
    <div className={styles.wrapper}>
      <div className={styles.aspectRatio}>
        <iframe
          onEnded={onEnded}
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          allowFullScreen
          title="Reproductor de YouTube"
          />
      </div>
    </div>
  )
}
