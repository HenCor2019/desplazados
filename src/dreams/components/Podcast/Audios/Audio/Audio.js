import i18next from 'i18next';
import AudioPlayer, { RHAP_UI }  from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import styles from './Audio.module.css'
import './Audio.css'
import { customIcons } from './CustomIcons/CustomIcons';
import { useConfigContext } from 'contexts/ConfigContext';

export default function Audio({ audio, onPrevious, onNext, onEnded }) {

  const { isTablet, isMobile } = useConfigContext()
  const isSmall = isTablet || isMobile

  const inlineStyles = i18next.language === 'en' || isSmall
  ? {}
  : {
    width: '45%'
  }
  return (
    <section className={styles.wrapper} style={inlineStyles}>
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
