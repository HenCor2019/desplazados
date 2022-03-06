import React, { useState } from 'react';
import Text from 'waiting/components/Text/Text';
import Image from 'waiting/components/Image/Image';
import ImageWithText from 'waiting/components/ImageWithText/ImageWithText';
import image1_es from 'waiting/assets/images/meanwhile/Image1_es.png';
import image2_es from 'waiting/assets/images/meanwhile/Image2_es.png';
import image3_es from 'waiting/assets/images/meanwhile/Image3_es.png';
import image4_es from 'waiting/assets/images/meanwhile/Image4_es.png';
import image5_es from 'waiting/assets/images/meanwhile/Image5_es.png';
import image1_en from 'waiting/assets/images/meanwhile/Image1_en.png';
import image2_en from 'waiting/assets/images/meanwhile/Image2_en.png';
import image3_en from 'waiting/assets/images/meanwhile/Image3_en.png';
import image4_en from 'waiting/assets/images/meanwhile/Image4_en.png';
import image5_en from 'waiting/assets/images/meanwhile/Image5_en.png';
import theme from 'waiting/assets/images/meanwhile/Theme.png';
import Modal from 'shared/components/Modal/Modal';
import VideoLightbox from 'shared/components/Lightbox/Video/index';
import { useConfigContext } from 'contexts/ConfigContext';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { LazySection } from 'shared/components/LazySection/LazySection';

function WaitingTimeMeanwhile() {
  const [t] = useTranslation('waitingPagesMeanwhileMeanwhile');

  const galleryVideos = setGalleryVideos(t);

  const [isActive, setIsActive] = useState(false);
  const [activeVideo, setActiveVideo] = useState(galleryVideos[0]);
  const { isSmallMobile } = useConfigContext();

  const { isMobile } = useConfigContext();

  const handleOnClick = (videoInformation) => {
    setIsActive(!isActive);
    if (videoInformation) setActiveVideo(videoInformation);
  };

  return (
    <>
      {!isSmallMobile && isActive && (
        <Modal>
          <VideoLightbox onClick={handleOnClick} video={activeVideo} />
        </Modal>
      )}
      <div className="flex justify-center items-center h-full">
        <main className="bg-white-500 grid grid-cols-1 grid-flow-row gap-4 sm:gap-4 sm:grid-cols-2 sm:p-4 lg:grid-cols-3 lg:grid-cols-3 w-11/12">
          {galleryVideos.map((galleryVideos) => (
            <React.Fragment key={galleryVideos.img.toString()}>
              <Image
                img={galleryVideos.img}
                alt={galleryVideos.title}
                isActive={isActive}
                position={galleryVideos.imgPosition}
                handleOnClick={handleOnClick}
                isMobile={isMobile}
                video={galleryVideos}
              />
              <Text
                text={galleryVideos.description}
                position={galleryVideos.textPosition}
                visibility={galleryVideos.textVisibility}
              />
            </React.Fragment>
          ))}
          <ImageWithText
            img={theme}
            alt="Theme"
            position="justify-center items-center order-0 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2"
            text={t('title')}
          />
          <Text
            text={t('message')}
            position="justify-center items-top order-1 text-justify lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-4 lg:px-10"
          />
        </main>
      </div>
    </>
  );
}

const setGalleryVideos = (t) => [
  {
    title: t('lucia.title'),
    description: t('lucia.description'),
    embedId: t('lucia.embedId'),
    img: i18next.language == 'en' ? image1_en : image1_es,
    imgPosition:
        'justify-center items-center order-5 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    textPosition: 'justify-center items-center order-5',
    textVisibility: 'lg:hidden',
    index: 0,
  },
  {
    title: t('gladis.title'),
    description: t('gladis.description'),
    embedId: t('gladis.embedId'),
    img: i18next.language == 'en' ? image2_en : image2_es,
    imgPosition:
        'justify-center items-center order-5 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2',
    textPosition: 'justify-center items-center order-5',
    textVisibility: 'lg:hidden',
    index: 1,
  },
  {
    title: t('joaquin.title'),
    description: t('joaquin.description'),
    embedId: t('joaquin.embedId'),
    img: i18next.language == 'en' ? image3_en : image3_es,
    imgPosition:
        'justify-center items-center order-5 lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3',
    textPosition: 'justify-center items-center order-5',
    textVisibility: 'lg:hidden',
    index: 2,
  },
  {
    title: t('marcos.title'),
    description: t('marcos.description'),
    embedId: t('marcos.embedId'),
    img: i18next.language == 'en' ? image4_en : image4_es,
    imgPosition:
        'justify-center items-center order-5 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3',
    textPosition: 'justify-center items-center order-5',
    textVisibility: 'lg:hidden',
    index: 3,
  },
  {
    title: t('maritza.title'),
    description: t('maritza.description'),
    embedId: t('maritza.embedId'),
    img: i18next.language == 'en' ? image5_en : image5_es,
    imgPosition:
        'justify-center items-center order-5 lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4 2xl:pt-4',
    textPosition: 'justify-center items-center order-5',
    textVisibility: 'lg:hidden',
    index: 4,
  },
];

export default LazySection(WaitingTimeMeanwhile);
