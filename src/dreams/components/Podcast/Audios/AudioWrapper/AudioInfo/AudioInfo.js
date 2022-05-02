import Play from 'dreams/assets/images/poadcast/play1.png'

import styles from './AudioInfo.module.css'

export default function AudioInfo({ audio }) {
 return (
    <li className={styles.item}>
      <div className={styles.imgWrapper}>
        <img src={Play} alt={audio.title} />
      </div>
      <div className={styles.titleWrapper}>
        <p>{ audio.title }</p>
      </div>
    </li>
  )
}
