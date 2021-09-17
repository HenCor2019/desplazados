import React, { useState, useEffect } from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { ReactComponent as Backward } from "../../assets/svg/backward.svg";
import { ReactComponent as Forward } from "../../assets/svg/forward.svg";
import { ReactComponent as Heart } from "../../assets/svg/heart.svg";
import { ReactComponent as Loop } from "../../assets/svg/loop.svg";
import { ReactComponent as Pause } from "../../assets/svg/pause.svg";
import { ReactComponent as Shuffle } from "../../assets/svg/shuffle.svg";

//assets
import Papel from "../../assets/images/Dreams/Poadcast/Papel.png";
import QueSoniamos from "../../assets/images/Dreams/Poadcast/quesonamos.png";
import PlayButton from "../../assets/images/Dreams/Poadcast/play1.png";

import NuevaOportunidadImg from "../../assets/images/Dreams/Poadcast/una-nueva-oportunidad.png";
import PermisoImg from "../../assets/images/Dreams/Poadcast/cuando-tenga-permiso.png";
import VidaNormalImg from "../../assets/images/Dreams/Poadcast/deseo-vida-normal.png";
import PazTranquilidadImg from "../../assets/images/Dreams/Poadcast/paz-tranqulidad.png";
import SalirAdelanteImg from "../../assets/images/Dreams/Poadcast/tenemos-que-salir-adelante.png";

//audio player icons
import PlayIcon from "../../assets/images/Dreams/Poadcast/play1.png";
import BackwardIcon from "../../assets/images/Dreams/Poadcast/Backward.png";

// audios
import NuevaOportunidadAudio from "../../assets/audios/Gladis_nueva_oportunidad_VM.mp3";
import VidaNormalAudio from "../../assets/audios/Joaquin_vida_normal_como_antes_VM.mp3";
import PazTranquilidadAudio from "../../assets/audios/Lucia_paz_tranquilidad_VM.mp3";
import PermisoAudio from "../../assets/audios/Marcos_cuando_tenga_el_permiso_de_trabajar_VM.mp3";
import SalirAdelanteAudio from "../../assets/audios/Maritza_tenemos_que_salir_adelante_VM.mp3";

const poadcastPlayerStyle = {
  backgroundImage: `url(${Papel})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
};

export default function Poadcast() {
  const audios = [
    {
      image: NuevaOportunidadImg,
      src: NuevaOportunidadAudio,
      title: '"Una nueva oportunidad"',
      index: 0,
    },
    {
      image: VidaNormalImg,
      src: VidaNormalAudio,
      title: '"Deseo llevar una vida normal, como antes"',
      index: 1,
    },
    {
      image: PazTranquilidadImg,
      src: PazTranquilidadAudio,
      title: '"Paz, tranquilidad y seguridad"',
      index: 2,
    },
    {
      image: PermisoImg,
      src: PermisoAudio,
      title: '"Cuando tenga el permiso de trabajar, luchar por mi vida"',
      index: 3,
    },
    {
      image: SalirAdelanteImg,
      src: SalirAdelanteAudio,
      title: '"Tenemos que salir adelante porque nos tenemos la una a la otra"',
      index: 4,
    },
  ];

  const [activeAudio, setActiveAudio] = useState(audios[0]);
  const [isRandomAudio, setIsRandomAudio] = useState(false);

  const onEnded = (current) => {
    if (isRandomAudio) {
      setActiveAudio(
        audios[Math.trunc(Math.random() * (audios.length - 1) + 0)]
      );
      setIsRandomAudio(false);
      return;
    }

    if (current.index === 4) {
      setActiveAudio(audios[0]);
      setIsRandomAudio(false);
      return;
    }

    setActiveAudio(audios[current.index + 1]);
    setIsRandomAudio(false);
  };

  const onNextHandler = (current) => {
    if (current.index === 4) {
      setActiveAudio(audios[0]);
      setIsRandomAudio(false);
      return;
    }

    setActiveAudio(audios[current.index + 1]);
    setIsRandomAudio(false);
  };

  const onPreviousHandler = () => {
    setIsRandomAudio(!isRandomAudio);
  };

  useEffect(() => {
    console.log({ isRandomAudio });
  }, [isRandomAudio]);

  return (
    <main className='sm:flex sm:justify-center sm:items-center h-auto w-full'>
      <section className='grid w-full h-auto grid-cols-1 grid-rows-2 xl:grid-cols-2 xl:grid-rows-1'>
        <div className='relative w-full h-full flex justify-center items-center order-5 md:my-2 lg:m-0'>
          <div style={poadcastPlayerStyle} className='relative w-full h-full'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8/12 h-auto flex flex-col justify-center items-center pl-4 relative'>
              <img
                src={QueSoniamos}
                className='-left-8 -top-20 absolute transform -rotate-12 z-20 w-36 sm:hidden'
                alt='¿Que soñamos?'
              />
              <img
                className='w-40 sm:w-60 lg:w-8/12 xl:w-10/12'
                src={activeAudio.image}
                alt={activeAudio.title}
              />

              <p className='my-6 font-sans text-xs md:text-sm lg:text-base text-lg text-center tracking-wider'>
                {activeAudio.title}
              </p>

              <div className='w-auto sm:w-3/4'>
                <AudioPlayer
                  src={activeAudio.src}
                  onEnded={() => onEnded(activeAudio)}
                  customVolumeControls={[]}
                  showSkipControls={true}
                  customAdditionalControls={[]}
                  onClickPrevious={() => onPreviousHandler(activeAudio)}
                  onClickNext={() => onNextHandler(activeAudio)}
                  customIcons={{
                    pause: <Pause className='h-5 w-5 sm:h-10 sm:w-10' />,
                    rewind: <Backward className='h-5 w-5 sm:h-9 sm:w-9' />,
                    forward: <Forward className='h-5 w-5 sm:h-9 sm:w-9' />,
                    next: <Loop className='h-5 w-5 sm:h-9 sm:w-9' />,
                    previous: <Shuffle className='h-5 w-5 sm:h-9 sm:w-9' />,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col justify-center items-center order-6 sm:order-1 xl:order-5'>
          <img
            src={QueSoniamos}
            className='hidden sm:block w-8/12'
            alt='¿Que soñamos?'
          />

          <p className='text-justify text-sm font-acumin m-4 w-10/12'>
            Mientras se encuentran en proceso de espera y reubicación las
            perspectivas de esperanza y futuro siempre están latentes entre las
            víctimas de desplazamiento forzado. Escuchemos algunas de ellas:
          </p>

          <div className='flex flex-col justify-around items-center w-10/12 m-4'>
            {audios.map((audio) => (
              <div
                className='flex flex-row justify-start items-center cursor-pointer w-full text-left m-2'
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
}
