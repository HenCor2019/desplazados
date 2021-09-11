import Button from '../../assets/images/Lightbox/button.png'
import LightboxImage from './LightboxImage'
import Slide from './Slide'
import './Card/Card.css'
import { useState } from 'react'

export default function Lightbox(props) {
  const { content, handleOnClick, images } = props

  const [newImage, setNewImage] = useState(content)

  const handleChangePrevPhoto = ({ index }) => {
    if (index === 0) return

    const newImageInformation = images[index - 1]
    setNewImage(newImageInformation)
  }

  const handleChangeNextPhoto = ({ index }) => {
    if (index === images.length - 1) return

    const newImageInformation = images[index + 1]
    setNewImage(newImageInformation)
  }

  return (
    <div className="lightbox w-full h-full flex justify-between lg:justify-around content-center z-40 sm:p-3">
      <Slide
        src={Button}
        alt="playbutton prev desplazados"
        handleOnClick={handleChangePrevPhoto}
        content={newImage}
        rotate="-rotate-180"
      />

      <LightboxImage content={newImage} handleOnClick={handleOnClick} />

      <Slide
        src={Button}
        alt="playbutton next desplazados"
        handleOnClick={handleChangeNextPhoto}
        content={newImage}
      />
    </div>
  )
}
