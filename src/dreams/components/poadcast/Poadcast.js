import React, { useState } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import 'react-h5-audio-player/lib/styles.css';

import Paper from '../../assets/images/poadcast/podcast-bg.png';
import PlayButton from '../../assets/images/poadcast/play1.png';

import QueSoniamos from '../../assets/images/poadcast/quesonamos.png';
import QueSoniamosEN from '../../assets/images/poadcast/quesonamos_en.png';

import { ReactComponent as Backward } from '../../../assets/svg/backward.svg';
import { ReactComponent as Forward } from '../../../assets/svg/forward.svg';
import { ReactComponent as Pause } from '../../../assets/svg/pause.svg';
import { setAudios } from '../../constants/podcast';

import '../../assets/css/padcast.css';
import SimpleVideoPlayer from 'introduction/components/SimpleVideoPlayer';

const poadcastPlayerStyle = {
  backgroundImage: `url(${Paper})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  };

export default (function Poadcast() {
  const [t] = useTranslation('dreamsPoadcastPage');
  const videos = t('videos', { returnObjects: true });
  const [index, setIndex] = useState(0)
  const [activeAudio, setActiveAudio] = useState(videos[index]);

  const customIcons = {
    pause: <Pause className="h-10 w-10 cursor-pointer"/>,
    previous: (
      <Backward className="h-5 w-5 sm:h-9 sm:w-9 md:w-7 md:h-7 m-auto lg:w-9 lg:h-9 pl-1  cursor-pointer"/>
    ),
    next: (
      <Forward className="h-5 w-5 sm:h-9 m-auto sm:w-9 md:w-7 md:h-7 lg:w-9 lg:h-9  pr-1 cursor-pointer"/>
    ),
  };

  const onEnded = () => {
    if (activeAudio.index === videos.length - 1) {
      setIndex(0)
      setActiveAudio(videos[0]);
      return;
    }

    setIndex(index + 1)
    setActiveAudio(videos[activeAudio.index + 1]);
  };

  const onNext = () => {
    if (activeAudio.index === videos.length - 1) {
      setIndex(0)
      setActiveAudio(videos[0]);
      return;
    }

    setIndex(index + 1)
    setActiveAudio(videos[activeAudio.index + 1]);
  };

  const onPrevious = () => {
    if (activeAudio.index === 0) {
      setIndex(videos.length - 1)
      setActiveAudio(videos[videos.length - 1]);
      return;
    }

    setIndex(index - 1)
    setActiveAudio(videos[videos.length - 1]);
  };
  
  return (
    <main className="sm:flex sm:justify-center sm:items-center h-auto w-full">
      <section className="grid grid-flow-row-dense w-full h-auto grid-cols-1 lg:grid-cols-3">
        <div className="relative w-full h-full grid grid-cols-1 grid-flow-row order-5 md:my-2 lg:m-0 lg:col-span-2">
          <div className="flex-col items-center w-fit p-2/3">
            <div style={poadcastPlayerStyle} className="flex justify-center items-center w-full h-full bg-contain lg:w-full">
              <div className='flex justify-center items-center py-4 px-3 sm:h-90/100 sm:px-14 sm:py-4 md:w-4/6 md:h-4/5 md:py-0 lg:w-1/3 lg:px-6 xl:w-full xl:ml-40 xl:mr-32'>
                <SimpleVideoPlayer
                  title={activeAudio.title}
                  embedId={activeAudio.embedId}
                  />
              </div>
            </div>
              <div className="flex flex-col justify-center items-center content-center w-10/12 ml-6 lg:ml-20">
              {videos.map((video) => (
                <div
                  className={`${
                    activeAudio.index === video.index ? 'active-song' : ''
                  } flex flex-row justify-stretch items-center cursor-pointer w-full text-left m-2`}
                  onClick={() => setActiveAudio(video)}
                  key={video.title}
                >
                  <img src={PlayButton} className="w-12 xl:ml-28" alt="PlayButton" />
                  <span className="font-sans font-bold ml-10">{video.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center order-1 lg:order-5 lg:mt-10">
          <img
            src={i18next.language === 'en' ? QueSoniamosEN : QueSoniamos}
            className=""
            alt="¿Que soñamos?"
          />

          <p className="text-justify text-lg font-medium m-4 w-10/12">
            {t('message')}
          </p>
        </div>
      </section>
    </main>
  );
});
