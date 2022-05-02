import AudioPlayer, { RHAP_UI }  from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import AudioExample from 'dreams/assets/audios/Lucia_paz_tranquilidad_VM.mp3'
import AudioSrc from 'dreams/assets/images/poadcast/normal-life.png'

import { ReactComponent as Backward } from 'dreams/assets/svg/backward.svg';
import { ReactComponent as Forward } from 'dreams/assets/svg/forward.svg';
import { ReactComponent as Pause } from 'dreams/assets/svg/pause.svg';

import styles from './Audio.module.css'
import './Audio.css'

export default function Audio() {
   const customIcons = {
  pause: <Pause className={styles.customIcons} />,
  previous: (
   <Backward className={styles.customIcons} />
  ),
  next: (
   <Forward className={styles.customIcons} />
  ),
 };

  return (
    <section className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <img src={AudioSrc} alt={AudioSrc}/>
        </div>
        <div className={styles.audioWrapper}>
          <AudioPlayer
            autoPlay
            autoPlayAfterSrcChange
            src={AudioExample}
            showJumpControls={false}
            showSkipControls
            customAdditionalControls={[RHAP_UI.LOOP]}
            customVolumeControls={[RHAP_UI.VOLUME]}
            customIcons={customIcons}
            />
      </div>
    </section>
  )
}
