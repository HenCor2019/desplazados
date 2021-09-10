import { useState } from 'react'
import Aside from '../../Components/Gallery/Aside'
import Header from '../../Components/Gallery/Header'
import Images from '../../Components/Gallery/Images'
import Lightbox from '../../Components/Lightbox/index'
import Modal from '../../Components/Modal/Modal'
import { galleryPhotos } from '../../constants/FooterMessages'

import '../../Components/Gallery/Gallery.css'

export default function () {
  const [isActive, setIsActive] = useState(false)
  const [activePhoto, setActiveImage] = useState(galleryPhotos[0])

  const handleOnClick = (imageInformation) => {
    setIsActive(!isActive)
    if (imageInformation) setActiveImage(imageInformation)
  }

  return (
    <>
      {isActive && (
        <Modal>
          <Lightbox
            content={activePhoto}
            handleOnClick={handleOnClick}
            images={galleryPhotos}
          />
        </Modal>
      )}

      <Header isActive={isActive} handleOnClick={handleOnClick} />
      <div className="w-full xl:w-11/12 lg:h-auto p-3 pt-4 md:p-0 mt-4 flex sm:flex-col sm:h-full md:h-full lg:flex-row justify-around items-start content-center">
        <Images
          isActive={isActive}
          handleOnClick={handleOnClick}
          images={galleryPhotos}
        />

        <Aside
          isActive={isActive}
          handleOnClick={handleOnClick}
          image={galleryPhotos[galleryPhotos.length - 1]}
        />
      </div>
    </>
  )
}
