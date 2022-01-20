import { useState } from 'react'
import CausesBullet from 'assets/images/Causes/Gallery/gallery_bullet.png'
import Bullet from 'Components/Gallery/Cause/Bullet'
import Gallery from 'Components/Gallery/Cause/Gallery'
import 'Components/Gallery/Cause/Gallery.css'
import Message from 'Components/Gallery/Cause/Message'
import Lightbox from 'Components/Lightbox/Image/index'
import Modal from 'Components/Modal/Modal'
import { causesMessages } from 'causes/constants/messages'
import { galleryPhotos } from 'constants/Galleries/Causes/Causes'
import {  gridDimensions } from 'constants/Galleries/Causes/Dimensions'
import { useConfigContext } from 'contexts/ConfigContext'

export default function CausesGallery() {
  const { isMobile } = useConfigContext()
  const [isActive, setIsActive] = useState(false)
  const [activePhoto, setActiveImage] = useState(galleryPhotos[0])

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
            images={galleryPhotos}
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
            photos={galleryPhotos}
            onClick={onClickHandler}
            isMobile={isMobile}
            dimensions={gridDimensions}
          />
        </ul>
      </div>
    </>
  )
}
