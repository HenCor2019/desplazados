import { useState } from 'react'

import Modal from 'shared/components/Modal/Modal'
import Lightbox from 'Components/Lightbox/Image/index'

import { photos } from 'causes/constants/gallery/photos'
import { causesMessages } from 'causes/constants/messages'
import {  dimensions } from 'causes/constants/gallery/dimensions'

import Gallery from 'causes/components/Gallery/Gallery'
import Bullet from 'causes/components/Gallery/Bullet/Bullet'
import Message from 'causes/components/Gallery/Message/Message'
import CausesBullet from 'causes/assets/images/gallery/gallery_bullet.png'

import { useConfigContext } from 'contexts/ConfigContext'

import 'causes/pages/Gallery/styles/Gallery.css'

export default function CausesGallery() {
  const { isMobile } = useConfigContext()
  const [isActive, setIsActive] = useState(false)
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

      <Bullet src={CausesBullet} />

      <div className="md:w-11/12 lg:w-4/5 m-auto md:mt-10 xl:mt-0 sm:p-5 md:p-0 md:pb-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row md:grid-cols-causesGallery md:grid-rows-causesGallery flex-gallery gap-2 min-h-0 min-w-0">
          <Message
            text={'text-xs lg:text-base font-acumin'}
            cols={{ md: 'md:col-start-1 md:col-end-3' }}
            rows={{ md: 'md:row-start-1 md:row-end-2' }}
            order={{ base: 'order-1', sm: 'sm:order-1', md: 'md:order-5' }}
            message={causesMessages.principalCauseMessage}
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
