import PodcastMessageWrapper from './PodcastMessageWrapper/PodcastMessageWrapper'
import Audios from './Audios/Audios';
import i18next from 'i18next';

import DreamsSrcES from 'dreams/assets/images/poadcast/quesonamos.png';
import DreamsSrcEN from 'dreams/assets/images/poadcast/quesonamos_en.png';

import styles from './Podcast.module.css'
import { setAudios } from 'dreams/constants/podcast'
import { useTranslation } from 'react-i18next'
import Audio from './Audios/Audio/Audio';
import Video from './Video/Video';
import { useAudioPodcast } from 'Hooks/UseAudioPodcast';
import { useConfigContext } from 'contexts/ConfigContext';

export default function Podcast() {
  const { isTablet, isMobile } = useConfigContext();
  const isSmall = isTablet || isMobile

  const inlineStyles = i18next.language === 'en' || isSmall
    ? {}
    : {
      flexDirection: 'row'
    }

  const audiosStyles = i18next.language === 'en' || isSmall
    ? {}
    : {
      flexDirection: 'column-reverse',
      width: '45%',
      gap: '1rem'
    }

  const [t] = useTranslation('dreamsPoadcastPage');
  const audiosWithoutSrc = t('audios', { returnObjects: true });
  const audios = setAudios(audiosWithoutSrc);
  const message = t('message');
  const DreamsSrc = i18next.language === 'en' ? DreamsSrcEN : DreamsSrcES
  const {
    onPrevious,
    onNext,
    handleOnSelect,
    onEnded,
    currentAudio
  } = useAudioPodcast([ ...audios ])

  return (
    <main className={styles.main} style={inlineStyles} >
      {i18next.language === 'es' && !isSmall && <Audio audio={audios[currentAudio.index]} onPrevious={onPrevious} onNext={onNext} onEnded={onEnded} /> }
      <div className={styles.audios} style={audiosStyles}>
        {i18next.language === 'en'  && <Video onEnded={onEnded} embedId={currentAudio.embedId} /> }
        {i18next.language === 'es' && isSmall && <Audio audio={audios[currentAudio.index]} onPrevious={onPrevious} onNext={onNext} onEnded={onEnded} /> }
        { i18next.language === 'es' && !isSmall && <Audios audios={audios} currentIndex={currentAudio.index} handleOnSelect={handleOnSelect}/> }
        <PodcastMessageWrapper src={DreamsSrc} message={message}/>
      </div>
      { i18next.language === 'en' && <Audios audios={audios} currentIndex={currentAudio.index} handleOnSelect={handleOnSelect}/> }
      { i18next.language === 'es' && isSmall && <Audios audios={audios} currentIndex={currentAudio.index} handleOnSelect={handleOnSelect}/> }
    </main>
  )
};  
