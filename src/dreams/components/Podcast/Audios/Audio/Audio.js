import AudioPlayer, { RHAP_UI }  from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import styles from './Audio.module.css'
import './Audio.css'
import { customIcons } from './CustomIcons/CustomIcons';

export default function Audio({ audio, onPrevious, onNext, onEnded }) {

  return (
    <section className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={audio.image} alt={audio.title}/>
        </div>
        <h3 className={styles.title}>{ audio.title }</h3>
        <div className={styles.audioWrapper}>
          <AudioPlayer
            autoPlay
            autoPlayAfterSrcChange
            src={audio.src}
            showJumpControls={false}
            showSkipControls
            onClickPrevious={onPrevious}
            onClickNext={onNext}
            onEnded={onEnded}
            customAdditionalControls={[RHAP_UI.LOOP]}
            customVolumeControls={[RHAP_UI.VOLUME]}
            customIcons={customIcons}
            />
      </div>
    </section>
  )
}
