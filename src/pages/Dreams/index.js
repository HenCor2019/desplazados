import Podcast from '../../assets/images/Dreams/podcast-dreams.png';
import Gallery from '../../assets/images/Dreams/gallery-dreams.png';
import React, {useState} from 'react';

const styles = {};

export default function Dreams() {
  const [isPodcastHover, setIsPodcastHover] = useState(false);
  const [isGalleryHover, setIsGalleryHover] = useState(false);

  let stylePodcast, styleGallery;
  const grayscale = {filter: 'grayscale(1)'};

  if (isPodcastHover) styleGallery = grayscale;
  else if (isGalleryHover) stylePodcast = grayscale;

  return (
    <main className="grid grid-cols-1 grid-flow-row lg:grid-cols-2 lg:grid-rows-4 gap-0 p-10">
      <div className="flex w-full justify-center items-center row-span-2 col-start-1 col-end-2">
        <img
          src={Podcast}
          alt="Podcast"
          style={stylePodcast}
          className="animate-flip object-contain w-full md:w-2/3 2xl:w-1/2 md:min-w-support-image cursor-pointer"
          onMouseEnter={() => setIsPodcastHover(true)}
          onMouseLeave={() => setIsPodcastHover(false)}
          loading="lazy"
        />
      </div>
      <div className="flex w-full items-center row-start-2 row-end-4 col-start-2 col-end-3">
        <img
          src={Gallery}
          alt="Galería"
          style={styleGallery}
          className="animate-flip object-contain w-full md:w-2/3 2xl:w-1/2 md:min-w-support-image cursor-pointer"
          onMouseEnter={() => setIsGalleryHover(true)}
          onMouseLeave={() => setIsGalleryHover(false)}
          loading="lazy"
        />
      </div>
      {/* <div></div> */}
      <div className="flex justify-center items-start row-start-3 row-end-5 col-start-1 col-end-2 p-6">
        <p className="text-justify leading-5 md:w-2/3 2xl:w-1/2">
          Soñar es imaginar algo que se persigue o se anhela con mucho deseo,
          que probablemente difiera en gran medida de la realidad, pero que
          condiciona la voluntad de trabajar en la construcción de ese ideal.
          Soñar es lo que mantiene con vida a muchas personas que han sido
          víctimas de desplazamiento forzado, pero ¿cómo sueñan el futuro los
          niños?, ¿qué futuro esperan los padres para sus hijos?
        </p>
      </div>
    </main>
  );
}
