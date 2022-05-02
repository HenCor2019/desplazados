import PodcastMessageWrapper from './PodcastMessageWrapper/PodcastMessageWrapper'
import Audios from './Audios/Audios';

import styles from './Podcast.module.css'
import { setAudios } from 'dreams/constants/podcast'
import { useTranslation } from 'react-i18next'
import Audio from './Audios/Audio/Audio';

export default function Podcast() {
 const [t] = useTranslation('dreamsPoadcastPage');
 const audiosWithoutSrc = t('audios', { returnObjects: true });
 const audios = setAudios(audiosWithoutSrc);

  return (
    <main className={styles.main} >
      <div className={styles.audios}>
        <Audio />
        <PodcastMessageWrapper />
      </div>
      <Audios audios={audios}/>
    </main>
  )
};
