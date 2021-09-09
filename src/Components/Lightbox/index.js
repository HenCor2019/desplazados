import Button from '../../assets/images/Lightbox/button.png'
import LightboxImage from './LightboxImage'
import Slide from './Slide'
import './Card/Card.css'
import { galleryPhotos } from '../../constants/FooterMessages'
import { useState } from 'react'

export default function Lightbox(props) {
  const { imageInformation, handleOnClick } = props

  const [newImage, setNewImage] = useState(imageInformation)

  const handleChangePrevPhoto = ({ index }) => {
    if (index === 0) return

    const newImageInformation = galleryPhotos[index - 1]
    setNewImage(newImageInformation)
  }

  const handleChangeNextPhoto = ({ index }) => {
    if (index === galleryPhotos.length - 1) return

    const newImageInformation = galleryPhotos[index + 1]
    setNewImage(newImageInformation)
  }

  return (
    <div className="lightbox top-0 absolute w-screen h-screen flex justify-center content-center sm:p-3">
      <Slide
        src={Button}
        alt="playbutton prev desplazados"
        handleOnClick={handleChangePrevPhoto}
        imageInformation={newImage}
        rotate="-rotate-180"
      />

      <LightboxImage
        imageInformation={newImage}
        handleOnClick={handleOnClick}
      />

      <Slide
        src={Button}
        alt="playbutton next desplazados"
        handleOnClick={handleChangeNextPhoto}
        imageInformation={newImage}
      />
    </div>
  )
}
