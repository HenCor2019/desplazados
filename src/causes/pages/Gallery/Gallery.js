import { useState } from 'react';

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Modal from 'shared/components/Modal/Modal';
import Lightbox from 'shared/components/Lightbox/Image/index';

import { dimensions } from 'causes/constants/gallery/dimensions';

import { Gallery, GalleryTopic, GalleryMessage } from 'causes/components';

import { useConfigContext } from 'contexts/ConfigContext';

import { addImagesAndThumbnails } from 'causes/constants/gallery/helper';
import { getImages } from './helper/getImages';

import 'causes/pages/Gallery/styles/Gallery.css';
import Footer from 'home/components/Footer';

export function CausesGallery() {
  const [t] = useTranslation('causesPagesGallery');
  const { TopicImage } = getImages(i18next.language);
  const { isMobile } = useConfigContext();
  const [isActive, setIsActive] = useState(false);
  const photosWithoutImages = t('photos', { returnObjects: true });
  const photos = addImagesAndThumbnails(photosWithoutImages);
  const [activePhoto, setActiveImage] = useState(photos[0]);

  const onClickHandler = (imageInformation) => {
    setIsActive(!isActive);
    if (imageInformation) setActiveImage(imageInformation);
  };

  return (
    <div>
      <div>
        {!isMobile && isActive && (
          <Modal>
            <Lightbox
              current={activePhoto}
              onClick={onClickHandler}
              images={photos}
            />
          </Modal>
        )}

        <GalleryTopic src={TopicImage} />

        <div className="md:w-11/12 lg:w-4/5 m-auto md:mt-10 xl:mt-0 sm:p-5 md:p-0 md:pb-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row md:grid-cols-causesGallery md:grid-rows-causesGallery flex-gallery gap-2 min-h-0 min-w-0">
            <GalleryMessage
              text="text-xs lg:text-base font-acumin"
              cols={{ md: 'md:col-start-1 md:col-end-3' }}
              rows={{ md: 'md:row-start-1 md:row-end-2' }}
              order={{ base: 'order-1', sm: 'sm:order-1', md: 'md:order-5' }}
              message={t('principal')}
            />

            <Gallery
              photos={photos}
              onClick={onClickHandler}
              isMobile={isMobile}
              dimensions={dimensions}
            />
          </ul>
        </div>
      </div>
      <Footer translateButtons={false} />
    </div>
  );
}
