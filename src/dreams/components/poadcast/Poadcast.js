import React, { useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import "react-h5-audio-player/lib/styles.css";

import Paper from "../../assets/images/poadcast/podcast-bg.png";
import PlayButton from "../../assets/images/poadcast/play1.png";
import QueSoniamos from "../../assets/images/poadcast/quesonamos.png";
import { ReactComponent as Backward } from "../../../assets/svg/backward.svg";
import { ReactComponent as Forward } from "../../../assets/svg/forward.svg";
import { ReactComponent as Pause } from "../../../assets/svg/pause.svg";
import { setAudios } from "../../constants/podcast";

import "../../assets/css/padcast.css";

const poadcastPlayerStyle = {
  backgroundImage: `url(${Paper})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

export default (function Poadcast() {
  
  const [t] = useTranslation('dreamsPoadcastPage');
  const audiosWithoutSrc = t('audios', { returnObjects: true })
  const audios = setAudios(audiosWithoutSrc)
  const [activeAudio, setActiveAudio] = useState(audios[0]);

  const customIcons = {
    pause: <Pause className='h-10 w-10 cursor-pointer' />,
    previous: (
      <Backward className='h-5 w-5 sm:h-9 sm:w-9 md:w-7 md:h-7 m-auto lg:w-9 lg:h-9 pl-1  cursor-pointer' />
    ),
    next: (
      <Forward className='h-5 w-5 sm:h-9 m-auto sm:w-9 md:w-7 md:h-7 lg:w-9 lg:h-9  pr-1 cursor-pointer' />
    ),
  };

  const onEnded = () => {
    if (activeAudio.index === audios.length - 1) {
      setActiveAudio(audios[0]);
      return;
    }

    setActiveAudio(audios[activeAudio.index + 1]);
  };

  const onNext = () => {
    if (activeAudio.index === audios.length - 1) {
      setActiveAudio(audios[0]);
      return;
    }

    setActiveAudio(audios[activeAudio.index + 1]);
  };

  const onPrevious = () => {
    if (activeAudio.index === 0) {
      setActiveAudio(audios[audios.length - 1]);
      return;
    }

    setActiveAudio(audios[activeAudio.index - 1]);
  };
  // grid grid-cols-1 grid-flow-row  sm:w-72 md:w-72 lg:w-64
  return (
    <main className='sm:flex sm:justify-center sm:items-center h-auto w-full'>
      <section className='grid w-full h-auto grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1'>
        <div className='relative w-full h-full grid grid-cols-1 grid-flow-row order-5 md:my-2 lg:m-0'>
          <div className='absolute top-1 sm:relative z-20 flex justify-center items-center lg:hidden px-8 w-full'>
            <img
              src={QueSoniamos}
              className='sm:relative sm:bottom-auto sm:transform-none w-40 sm:w-72 md:w-72 lg:w-64 object-contain'
              alt='¿Que soñamos?' 
            />
          </div>
          <div className='flex justify-center items-center'>
            <div style={poadcastPlayerStyle} className='w-auto h-auto p-8 sm:p-16 lg-2:p-24'>
              <div className='audio-player flex flex-col justify-center items-center'>
              <div className="w-full h-16 sm:h-0"></div>
                <img
                  className='w-1/2 lg:w-1/2'
                  src={activeAudio.image}
                  alt={activeAudio.title}
                />
                <p className='my-6 w-1/2 font-sans text-sm md:text-sm lg:text-base text-center'>
                  {activeAudio.title}
                </p>
                <div className='audio-player-container mt-2'>
                  <AudioPlayer
                    autoPlay={true}
                    autoPlayAfterSrcChange={true}
                    src={activeAudio.src}
                    onEnded={onEnded}
                    showJumpControls={false}
                    showSkipControls={true}
                    customAdditionalControls={[RHAP_UI.LOOP]}
                    customVolumeControls={[RHAP_UI.VOLUME]}
                    onClickPrevious={onPrevious}
                    onClickNext={onNext}
                    customIcons={customIcons}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-start items-center order-5 mt-10'>
          <img
            src={QueSoniamos}
            className='hidden lg:block sm:w-6/12 md:w-5/12 lg:w-5/12 xl:w-6/12 xl-2:w-5/12'
            alt='¿Que soñamos?'
          />

          <p className='text-justify text-sm font-acumin m-4 w-10/12'>
            {t('message')}
          </p>

          <div className='flex flex-col justify-around items-center w-10/12 m-4'>
            {audios.map((audio) => (
              <div
                className={`${
                  activeAudio.index === audio.index ? "active-song" : ""
                } flex flex-row justify-start items-center cursor-pointer w-full text-left m-2`}
                onClick={() => setActiveAudio(audio)}
                key={audio.title}>
                <img src={PlayButton} className='w-10' alt='PlayButton' />
                <span className='font-sans px-4'>{audio.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
});
