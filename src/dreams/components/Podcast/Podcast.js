import PodcastMessageWrapper from './PodcastMessageWrapper/PodcastMessageWrapper'
import Audios from './Audios/Audios';
import i18next from 'i18next';

import styles from './Podcast.module.css'
import { setAudios } from 'dreams/constants/podcast'
import { useTranslation } from 'react-i18next'
import Audio from './Audios/Audio/Audio';
import Video from './Video/Video';
import { useAudioPodcast } from 'Hooks/UseAudioPodcast';

export default function Podcast() {
  const [t] = useTranslation('dreamsPoadcastPage');
  const audiosWithoutSrc = t('audios', { returnObjects: true });
  const audios = setAudios(audiosWithoutSrc);
  const {
    onPrevious,
    onNext,
    handleOnSelect,
    onEnded,
    currentAudio
  } = useAudioPodcast({ ...audios })

  return (
    <main className={styles.main} >
      <div className={styles.audios}>
        {i18next.language === 'en' 
          ? <Video onEnded={onEnded} embedId={currentAudio.embedId} /> 
          : <Audio audio={audios[currentAudio.index]} onPrevious={onPrevious} onNext={onNext} onEnded={onEnded} />}
        <PodcastMessageWrapper />
      </div>
      <Audios audios={audios} currentIndex={currentAudio.index} handleOnSelect={handleOnSelect}/>
    </main>
  )
};  
