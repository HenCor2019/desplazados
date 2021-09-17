import React, {useState} from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

//assets
import Papel from '../../assets/images/Dreams/Poadcast/Papel.png';
import QueSoniamos from '../../assets/images/Dreams/Poadcast/quesonamos.png';
import PlayButton from '../../assets/images/Dreams/Poadcast/play1.png';

import NuevaOportunidadImg from '../../assets/images/Dreams/Poadcast/una-nueva-oportunidad.png';
import PermisoImg from '../../assets/images/Dreams/Poadcast/cuando-tenga-permiso.png';
import VidaNormalImg from '../../assets/images/Dreams/Poadcast/deseo-vida-normal.png';
import PazTranquilidadImg from '../../assets/images/Dreams/Poadcast/paz-tranqulidad.png';
import SalirAdelanteImg from '../../assets/images/Dreams/Poadcast/tenemos-que-salir-adelante.png';

//audio player icons
import PlayIcon from '../../assets/images/Dreams/Poadcast/play1.png'
import BackwardIcon from '../../assets/images/Dreams/Poadcast/Backward.png'

// audios
import NuevaOportunidadAudio from '../../assets/audios/Gladis_nueva_oportunidad_VM.mp3';
import VidaNormalAudio from '../../assets/audios/Joaquin_vida_normal_como_antes_VM.mp3';
import PazTranquilidadAudio from '../../assets/audios/Lucia_paz_tranquilidad_VM.mp3';
import PermisoAudio from '../../assets/audios/Marcos_cuando_tenga_el_permiso_de_trabajar_VM.mp3';
import SalirAdelanteAudio from '../../assets/audios/Maritza_tenemos_que_salir_adelante_VM.mp3';

const poadcastPlayerStyle = {
  backgroundImage: `url(${Papel})`,
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
};

export default function Poadcast() {
  
  const audios = [
    {
      image: NuevaOportunidadImg,
      src: NuevaOportunidadAudio,
      title: '"Una nueva oportunidad"',
    },
    {
      image: VidaNormalImg,
      src: VidaNormalAudio,
      title: '"Deseo llevar una vida normal, como antes"',
    },
    {
      image: PazTranquilidadImg,
      src: PazTranquilidadAudio,
      title: '"Paz, tranquilidad y seguridad"',
    },
    {
      image: PermisoImg,
      src: PermisoAudio,
      title: '"Cuando tenga el permiso de trabajar, luchar por mi vida"',
    },
    {
      image: SalirAdelanteImg,
      src: SalirAdelanteAudio,
      title: '"Tenemos que salir adelante porque nos tenemos la una a la otra"',
    },
  ];

  const [activeAudio, setActiveAudio] = useState(audios[0]);

  return (
    <main className="sm:flex sm:min-w-0 lg:min-w-min sm:justify-center sm:items-center h-full">
      <section className="grid -mt-12 w-10/12 mx-auto md:mt-0 grid-cols-1 grid-rows-2 md:grid-rows-1 gap-0 h-full md:grid-cols-2">
        {/* AUDIO PLAYER */}
        <div
          style={poadcastPlayerStyle}
          className="relative w-full h-full flex flex-col items-center"
        >
          <img
            src={QueSoniamos}
            className="w-1/2 z-0 absolute -top-6 -left-5 md:hidden"
            alt="¿Que soñamos?"
          />

          <div className="flex flex-col justify-center items-center w-full h-auto max-h-40 mt-48 pl-10">
            <img
              className="w-1/3 h-full"
              src={activeAudio.image}
              alt={activeAudio.title}
            />

            <p className="ml-4 mt-2">{activeAudio.title}</p>

            <div className="mx-auto w-3/4">
              <AudioPlayer
                src={activeAudio.src}
                customIcons={{
                  play: PlayIcon,
                  previous: BackwardIcon,
                }}
              />
            </div>
          </div>
        </div>

        {/* INFORMATION COL */}
        <div className="flex flex-col justify-center items-center md:ml-8 max-w-xl">
          <img
            src={QueSoniamos}
            className="hidden md:block"
            alt="¿Que soñamos?"
          />

          <p className="text-justify mb-4">
            Mientras se encuentran en proceso de espera y reubicación las
            perspectivas de esperanza y futuro siempre están latentes entre las
            víctimas de desplazamiento forzado. Escuchemos algunas de ellas:
          </p>

          {audios.map((audio) => (
            <div
              onClick={() => setActiveAudio(audio)}
              className="flex mt-4 justify-start items-center cursor-pointer w-full"
              key={audio.title}
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
