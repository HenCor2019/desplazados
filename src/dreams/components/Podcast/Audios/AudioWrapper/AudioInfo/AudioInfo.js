import Play from 'dreams/assets/images/poadcast/play1.png'

import styles from './AudioInfo.module.css'

export default function AudioInfo({ audio, currentIndex, handleOnSelect }) {
  const activeClassName = currentIndex === audio.index ? styles.active : styles.noActive
  return (
    <li className={styles.item}>
      <div className={styles.imgWrapper}>
        <img src={Play} alt={audio.title} />
      </div>
      <div className={styles.titleWrapper}>
        <p className={`${activeClassName}`} onClick={() => handleOnSelect(audio)}>{ audio.title }</p>
      </div>
    </li>
  )
}
