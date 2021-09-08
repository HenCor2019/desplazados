import { useState } from 'react'
import Aside from '../../Components/Gallery/Aside'
import Header from '../../Components/Gallery/Header'
import Images from '../../Components/Gallery/Images'
import Lightbox from '../../Components/Lightbox/index'
import Modal from '../../Components/Modal/Modal'
import { galleryPhotos } from '../../constants/FooterMessages'

export default function () {
  const [isActive, setIsActive] = useState(false)
  const [activePhoto, setActiveImage] = useState(galleryPhotos[0])

  const handleOnClick = (imageInformation) => {
    setIsActive(!isActive)
    setActiveImage(imageInformation)
  }

  const handleChangePrevPhoto = ({ index }) => {
    if (index === 0) return

    const newImageInformation = galleryPhotos[index - 1]
    setActiveImage(newImageInformation)
  }

  const handleChangeNextPhoto = ({ index }) => {
    if (index === galleryPhotos.length - 1) return

    const newImageInformation = galleryPhotos[index + 1]
    setActiveImage(newImageInformation)
  }

  return (
    <>
      {isActive && (
        <Modal>
          <Lightbox
            imageInformation={activePhoto}
            handleOnClick={handleOnClick}
            handleChangeNextPhoto={handleChangeNextPhoto}
            handleChangePrevPhoto={handleChangePrevPhoto}
          />
        </Modal>
      )}

      <Header isActive={isActive} handleOnClick={handleOnClick} />
      <div className="w-full h-56 p-3 pt-4 mt-4 flex justify-around items-center content-center">
        <Images isActive={isActive} handleOnClick={handleOnClick} />
        <Aside isActive={isActive} handleOnClick={handleOnClick} />
      </div>
    </>
  )
}
