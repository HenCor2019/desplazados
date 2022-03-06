import React, { useState } from 'react';
import Image from 'shared/components/Image/Image';
import processImg_es from 'waiting/assets/images/section/process_es.png';
import galleryImg_es from 'waiting/assets/images/section/gallery_es.png';
import meanwhileImg_es from 'waiting/assets/images/section/meanwhile_es.png';
import processImg_en from 'waiting/assets/images/section/process_en.png';
import galleryImg_en from 'waiting/assets/images/section/gallery_en.png';
import meanwhileImg_en from 'waiting/assets/images/section/meanwhile_en.png';
import { useHistory } from 'react-router-dom';

import { LazySection } from 'shared/components/LazySection/LazySection';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

function Home() {
  const [t] = useTranslation('waitingPagesSectionWaitingTime');

  const [isProcessHover, setProcessHover] = useState(false);
  const [isGalleryHover, setGalleryHover] = useState(false);
  const [isMeanwhileHover, setMeanwhileHover] = useState(false);
  const { push } = useHistory();

  let process; let gallery; let
    meanwhile;
  const grayscale = {
    filter: 'grayscale(1)',
  };

  if (isProcessHover) {
    gallery = grayscale;
    meanwhile = grayscale;
  }
  if (isGalleryHover) {
    process = grayscale;
    meanwhile = grayscale;
  }
  if (isMeanwhileHover) {
    process = grayscale;
    gallery = grayscale;
  }

  const handleOnProcess = () => {
    push('/la-espera/proceso');
  };

  const handleOnGallery = () => {
    push('/la-espera/galeria');
  };

  const handleOnMeanwhile = () => {
    push('/la-espera/mientras-tanto');
  };

  return (
    <div className="sm:flex sm:min-w-0 sm:justify-center sm:items-center h-full">
      <main className="grid grid-cols-1 grid-flow-row gap-4 h-full sm:grid-cols-2 md:gap-0">
        <Image
          img={i18next.language == 'en' ? processImg_en : processImg_es}
          alt="Process"
          grayscale={process}
          onMouseEnter={() => setProcessHover(true)}
          onMouseLeave={() => setProcessHover(false)}
          handleOnClick={handleOnProcess}
          position="justify-start items-center sm:justify-center"
        />
        <Image
          img={i18next.language == 'en' ? galleryImg_en : galleryImg_es}
          alt="Gallery"
          grayscale={gallery}
          onMouseEnter={() => setGalleryHover(true)}
          onMouseLeave={() => setGalleryHover(false)}
          handleOnClick={handleOnGallery}
          position="justify-end items-center sm:justify-center"
        />
        <div className="bg-time order-1 text-white flex justify-center items-center sm:order-none sm:bg-transparent sm:text-black">
          <p className="text-sm sm:text-base text-justify leading-snug p-4 md:p-8 font-acumin">
            {t('message')}
          </p>
        </div>
        <Image
          img={i18next.language == 'en' ? meanwhileImg_en : meanwhileImg_es}
          alt="Meanwhile"
          grayscale={meanwhile}
          onMouseEnter={() => setMeanwhileHover(true)}
          onMouseLeave={() => setMeanwhileHover(false)}
          handleOnClick={handleOnMeanwhile}
          position="justify-start items-center sm:justify-center"
        />
      </main>
    </div>
  );
}

const WaitingTime = LazySection(Home);
export { WaitingTime };
