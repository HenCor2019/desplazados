import { useState } from 'react'

import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import Modal from 'shared/components/Modal/Modal'
import Lightbox from 'Components/Lightbox/Image/index'

import { dimensions } from 'causes/constants/gallery/dimensions'

import Gallery from 'causes/components/Gallery/Gallery'
import Topic from 'causes/components/Gallery/Bullet/Bullet'
import Message from 'causes/components/Gallery/Message/Message'
import Topic_en from '../../assets/images/gallery/topics/topic-en.png'
import Topic_es from 'causes/assets/images/gallery/topics/topic-es.png'

import { useConfigContext } from 'contexts/ConfigContext'

import 'causes/pages/Gallery/styles/Gallery.css'
import { addImagesAndThumbnails } from 'causes/constants/gallery/helper'

export default function CausesGallery() {
  const [t] = useTranslation('causesPagesGallery')
  const { isMobile } = useConfigContext()
  const [isActive, setIsActive] = useState(false)
  const photosWithoutImages = t('photos', { returnObjects: true })
  const photos = addImagesAndThumbnails(photosWithoutImages);
  const [activePhoto, setActiveImage] = useState(photos[0])

  const onClickHandler = (imageInformation) => {
    setIsActive(!isActive)
    if (imageInformation) setActiveImage(imageInformation)
  }

  return (
    <>
      {!isMobile && isActive && (
        <Modal>
          <Lightbox
            current={activePhoto}
            onClick={onClickHandler}
            images={photos}
          />
        </Modal>
      )}

      <Topic src={i18next.language === 'en' ? Topic_en : Topic_es} />

      <div className="md:w-11/12 lg:w-4/5 m-auto md:mt-10 xl:mt-0 sm:p-5 md:p-0 md:pb-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row md:grid-cols-causesGallery md:grid-rows-causesGallery flex-gallery gap-2 min-h-0 min-w-0">
          <Message
            text={'text-xs lg:text-base font-acumin'}
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
    </>
  )
}
