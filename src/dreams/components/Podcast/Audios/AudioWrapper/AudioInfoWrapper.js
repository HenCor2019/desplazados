import AudioInfo from './AudioInfo/AudioInfo'

import styles from './AudioInfoWrapper.module.css'

export default function AudioInfoWrapper({ audios }) {
  return (
    <section className={styles.wrapper}>
      <ul className={styles.list}>
        {audios.map((audio) => <AudioInfo key={audio.src} audio={audio}/>)}
      </ul>
    </section>
  )
}
