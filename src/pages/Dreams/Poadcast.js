import React, {useState} from 'react';

//assets
import Papel from '../../assets/images/Dreams/Poadcast/Papel.png';
import QueSoniamos from '../../assets/images/Dreams/Poadcast/quesonamos.png';
import PlayButton from '../../assets/images/Dreams/Poadcast/play1.png';
import DefaultAudio from '../../assets/images/Dreams/Poadcast/default-audio.svg';

import NuevaOportunidadImg from '../../assets/images/Dreams/Poadcast/una-nueva-oportunidad.png';
import PermisoImg from '../../assets/images/Dreams/Poadcast/cuando-tenga-permiso.png';
import VidaNormalImg from '../../assets/images/Dreams/Poadcast/deseo-vida-normal.png';

// audios
import NuevaOportunidadAudio from '../../assets/audios/Gladis_nueva_oportunidad_VM.mp3';

const poadcastPlayerStyle = {
  backgroundImage: `url(${Papel})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
};

export default function Poadcast() {
  const [activeAudio, setActiveAudio] = useState({});

  const audios = [
    {
      image: NuevaOportunidadImg,
      src: NuevaOportunidadAudio,
      title: '"Una nueva oportunidad"',
    },
    {
      image: VidaNormalImg,
      src: '',
      title: '"Deseo llevar una vida normal, como antes"',
    },
    {
      image: '',
      src: '',
      title: '"Paz, tranquilidad y seguridad"',
    },
    {
      image: '',
      src: '',
      title: '"Cuando tenga el permiso de trabajar, luchar por mi vida"',
    },
    {
      image: '',
      src: '',
      title: '"Tenemos que salir adelante porque nos tenemos la una a la otra"',
    },
  ];

  return (
    <main className="sm:flex sm:min-w-0 lg:min-w-min sm:justify-center sm:items-center h-full">
      <section className="grid -mt-12 w-10/12 mx-auto md:mt-0 grid-cols-1 grid-rows-2 md:grid-rows-1 gap-0 h-full md:grid-cols-2">
        {/* AUDIO PLAYER */}
        <div
          style={poadcastPlayerStyle}
          className="relative w-full flex flex-col items-center"
        >
          <img
            src={QueSoniamos}
            className="w-1/2 z-0 absolute -top-6 -left-5 md:hidden"
            alt="¿Que soñamos?"
          />

          {Object.keys(activeAudio) > 0 ? (
            <img src={activeAudio.image} alt={activeAudio.title} />
          ) : (
            <div className="audio-player-image-default mt-20 ml-4 md:mt-40 md:ml-4"></div>
          )}

          <p className="ml-4 mt-2">{activeAudio.title}</p>
        </div>

        {/* INFORMATION COL */}
        <div className="flex flex-col justify-center items-center md:ml-8 max-w-xl">
          <img src={QueSoniamos} className="hidden md:block" alt="¿Que soñamos?" />

          <p className="text-justify mb-4">
            Mientras se encuentran en proceso de espera y reubicación las
            perspectivas de esperanza y futuro siempre están latentes entre las
            víctimas de desplazamiento forzado. Escuchemos algunas de ellas:
          </p>

          {audios.map((audio) => (
            <div
              onClick={() => setActiveAudio(audio)}
              className="flex mt-4 justify-start items-center cursor-pointer w-full"
            >
              <img src={PlayButton} width="50" alt="PlayButton" />
              <span className="ml-2">{audio.title}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
