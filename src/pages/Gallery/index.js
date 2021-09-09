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
    setActiveImage(imageInformation)
  }

  return (
    <>
      {false && (
        <Modal>
          <Lightbox
            imageInformation={activePhoto}
            handleOnClick={handleOnClick}
          />
        </Modal>
      )}

      <Header isActive={isActive} handleOnClick={handleOnClick} />
      <div className="w-full h-64 md:h-2/4 p-3 pt-4 mt-4 flex sm:flex-col sm:h-full md:flex-row justify-around items-center content-center">
        <Images isActive={isActive} handleOnClick={handleOnClick} />
        <Aside isActive={isActive} handleOnClick={handleOnClick} />
      </div>
    </>
  )
}
