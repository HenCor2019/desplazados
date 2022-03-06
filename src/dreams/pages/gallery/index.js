import React, { useState } from 'react';
import Lightbox from 'shared/components/Lightbox/Image/index';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { setImagesThumbs } from '../../constants/gallery';

import { useConfigContext } from '../../../contexts/ConfigContext';
import { LazySection } from '../../../shared/components/LazySection/LazySection';

import Image from '../../components/gallery/Image';

import title from '../../assets/images/gallery/title.png';
import titleEN from '../../assets/images/gallery/title_en.png';

import Modal from '../../../shared/components/Modal/Modal';

function DreamsGallery() {
  const [isActive, setIsActive] = useState(false);
  const [t] = useTranslation('dreamsGalleryPage');

  const photosWithoutImages = t('photos', { returnObjects: true });
  const photos = setImagesThumbs(photosWithoutImages);
  const [activeImage, setActiveImage] = useState(photos[0]);

  const { isMobile, isTablet } = useConfigContext();

  const handleOnClick = (imageInformation) => {
    setIsActive(!isActive);
    if (imageInformation) setActiveImage(imageInformation);
  };

  return (
    <div className="md:flex sm:min-w-0 md:justify-center md:items-center h-full">
      {!isMobile && isActive && (
        <Modal>
          <Lightbox
            current={activeImage}
            onClick={handleOnClick}
            images={photos}
          />
        </Modal>
      )}
      <main className="flex flex-col xl:flex-row justify-around items-start h-full md:w-4/5 lg:5/5 xl:w-11/12">
        <div className="grid grid-cols-1 grid-flow-row md:grid-cols-dreamsGallery md:grid-rows-dreamGallery flex-gallery gap-2 min-h-0 min-w-0 p-2 order-2 xl:order-1">
          {photos.map((dreamImage) => (
            <Image
              key={dreamImage.src + dreamImage.index}
              content={dreamImage}
              onClick={handleOnClick}
              isMobile={isMobile}
            />
          ))}
        </div>
        <div className="flex flex-col sm:flex-row xl:flex-col justify-start items-center flex-rigid xl:flex-shrink-3 w-full order-1 xl:order-2 xl:max-w-sm">
          <div className="w-full h-full flex lg:justify-start justify-center items-center flex-shrink-2">
            <img
              src={i18next.language === 'en' ? titleEN : title}
              alt="Los sueños entre la realidad y la fantasía"
              className="object-contain w-2/3 sm:w-full 2xl:w-60 p-4 lg:p-0 lg:pl-4 lg:pt-2"
            />
          </div>
          <div className="w-full h-full flex justify-start items-center">
            <p className="text-base text-justify font-acumin p-4">
              {t('message')}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LazySection(DreamsGallery);
