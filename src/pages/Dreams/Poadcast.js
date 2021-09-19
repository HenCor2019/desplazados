import React, { useState } from 'react'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

import Paper from '../../assets/images/Dreams/Poadcast/podcast-bg.png'
import PlayButton from '../../assets/images/Dreams/Poadcast/play1.png'
import QueSoniamos from '../../assets/images/Dreams/Poadcast/quesonamos.png'
import { ReactComponent as Backward } from '../../assets/svg/backward.svg'
import { ReactComponent as Forward } from '../../assets/svg/forward.svg'
import { ReactComponent as Pause } from '../../assets/svg/pause.svg'
import { audios } from '../../constants/Dreams/Podcast'
import './index.css'

const poadcastPlayerStyle = {
  backgroundImage: `url(${Paper})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
}

export default function Poadcast() {
  const [activeAudio, setActiveAudio] = useState(audios[0])

  const customIcons = {
    pause: <Pause className="h-10 w-10 cursor-pointer" />,
    previous: (
      <Backward className="h-5 w-5 sm:h-9 sm:w-9 md:w-7 md:h-7 m-auto lg:w-9 lg:h-9 pl-1  cursor-pointer" />
    ),
    next: (
      <Forward className="h-5 w-5 sm:h-9 m-auto sm:w-9 md:w-7 md:h-7 lg:w-9 lg:h-9  pr-1 cursor-pointer" />
    )
  }

  const onEnded = () => {
    if (activeAudio.index === audios.length - 1) {
      setActiveAudio(audios[0])
      return
    }

    setActiveAudio(audios[activeAudio.index + 1])
  }

  const onNext = () => {
    if (activeAudio.index === audios.length - 1) {
      setActiveAudio(audios[0])
      return
    }

    setActiveAudio(audios[activeAudio.index + 1])
  }

  const onPrevious = () => {
    if (activeAudio.index === 0) {
      setActiveAudio(audios[audios.length - 1])
      return
    }

    setActiveAudio(audios[activeAudio.index - 1])
  }

  return (
    <main className="sm:flex sm:justify-center sm:items-center h-auto w-full">
      <section className="grid w-full h-auto grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1">
        <div className="relative w-full h-full flex justify-center items-center order-5 md:my-2 lg:m-0">
          <div style={poadcastPlayerStyle} className="relative w-full h-full">
            <div className="audio-player absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8/12 h-auto flex flex-col justify-center items-center pl-2 relative">
              <img
                src={QueSoniamos}
                className="-top-24 absolute transform z-20 w-36 sm:hidden"
                alt="¿Que soñamos?"
              />
              <img
                className="w-40 sm:w-60 lg:w-8/12 xl:w-10/12"
                src={activeAudio.image}
                alt={activeAudio.title}
              />

              <p className="w-3/4 sm:w-auto my-6 font-sans text-sm md:text-sm lg:text-base text-center tracking-wider">
                {activeAudio.title}
              </p>

              <div className="audio-player-container sm:w-5/6 lg:w-5/6 xl:w-full">
                <AudioPlayer
                  autoPlay={true}
                  className="w-full bg-transparent"
                  autoPlayAfterSrcChange={true}
                  src={activeAudio.src}
                  onEnded={onEnded}
                  showJumpControls={false}
                  showSkipControls={true}
                  customAdditionalControls={[RHAP_UI.VOLUME]}
                  customVolumeControls={[RHAP_UI.LOOP]}
                  onClickPrevious={onPrevious}
                  onClickNext={onNext}
                  customIcons={customIcons}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center order-6 sm:order-1 xl:order-5">
          <img
            src={QueSoniamos}
            className="hidden sm:block w-8/12"
            alt="¿Que soñamos?"
          />

          <p className="text-justify text-sm font-acumin m-4 w-10/12">
            Mientras se encuentran en proceso de espera y reubicación las
            perspectivas de esperanza y futuro siempre están latentes entre las
            víctimas de desplazamiento forzado. Escuchemos algunas de ellas:
          </p>

          <div className="flex flex-col justify-around items-center w-10/12 m-4">
            {audios.map((audio) => (
              <div
                className={`${
                  activeAudio.index === audio.index ? 'active-song' : ''
                } flex flex-row justify-start items-center cursor-pointer w-full text-left m-2`}
                onClick={() => setActiveAudio(audio)}
                key={audio.title}
              >
                <img src={PlayButton} className="w-10" alt="PlayButton" />
                <span className="font-sans px-4">{audio.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
