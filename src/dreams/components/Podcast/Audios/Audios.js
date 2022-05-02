import AudioInfoWrapper from "./AudioWrapper/AudioInfoWrapper";

import styles from './Audios.module.css'

export default function Audios({ audios, currentIndex, handleOnSelect }) {
  return (
    <div className={styles.wrapper}>
      <AudioInfoWrapper audios={audios} currentIndex={currentIndex} handleOnSelect={handleOnSelect}/>
    </div>
  )
}
