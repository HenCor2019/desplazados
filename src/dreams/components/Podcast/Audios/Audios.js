import AudioInfoWrapper from "./AudioWrapper/AudioInfoWrapper";

import styles from './Audios.module.css'

export default function Audios({ audios }) {
  return (
    <div className={styles.wrapper}>
      <AudioInfoWrapper audios={audios}/>
    </div>
  )
}
