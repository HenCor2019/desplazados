import Podcast from '../../assets/images/Dreams/podcast-dreams.png';
import Gallery from '../../assets/images/Dreams/gallery-dreams.png';
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

import Image from '../../Components/WaitingTime/Image';

export default function Dreams() {
  const [isPodcastHover, setIsPodcastHover] = useState(false);
  const [isGalleryHover, setIsGalleryHover] = useState(false);
  const {push} = useHistory();

  let stylePodcast, styleGallery;
  const grayscale = {filter: 'grayscale(1)'};

  if (isPodcastHover) styleGallery = grayscale;
  else if (isGalleryHover) stylePodcast = grayscale;

  const handleOnDrawsGallery = () => {
    push('/sueños/galeria');
  };

  const handleOnPodcast = () => {
    push('/sueños/podcast');
  };

  return (
    <main className="sm:flex sm:min-w-0 sm:justify-center sm:items-center h-full">
      <section className="grid grid-cols-1 grid-flow-row gap-0 h-full md:grid-cols-2  md:mt-20 md:p-6 lg:mt-0 lg:p-0 lg:gap-4 lg:relative">
        <Image
          img={Podcast}
          alt={'Podcast'}
          grayscale={stylePodcast}
          onMouseEnter={() => setIsPodcastHover(true)}
          onMouseLeave={() => setIsPodcastHover(false)}
          handleOnClick={handleOnPodcast}
          position={'cursor-pointer items-center justify-center lg:row-start-2'}
        />

        <Image
          img={Gallery}
          alt={'Galería'}
          grayscale={styleGallery}
          onMouseEnter={() => setIsGalleryHover(true)}
          onMouseLeave={() => setIsGalleryHover(false)}
          handleOnClick={handleOnDrawsGallery}
          position={
            'cursor-pointer items-center justify-center mt-6 mb-6 md:mt-0 md:mb-0 lg:row-start-2 lg:col-start-2 lg:absolute lg:top-44'
          }
        />

        <div className="bg-red-600 md:bg-transparent order-1 text-white md:text-black flex justify-center items-center md:items-start md:w-full md:col-span-2 lg:col-span-1 lg:row-start-3 lg:-mt-16 2xl:-mt-24">
          <p className="text-sm sm:text-base text-justify leading-snug p-4 md:pt-4 lg:p-8 lg:max-w-md">
            Soñar es imaginar algo que se persigue o se anhela con mucho deseo,
            que probablemente difiera en gran medida de la realidad, pero que
            condiciona la voluntad de trabajar en la construcción de ese ideal.
            Soñar es lo que mantiene con vida a muchas personas que han sido
            víctimas de desplazamiento forzado, pero ¿cómo sueñan el futuro los
            niños?, ¿qué futuro esperan los padres para sus hijos?
          </p>
        </div>
      </section>
    </main>
  );
}
