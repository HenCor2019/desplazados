import BtnChangeImage from '../../assets/images/Lightbox/button.png'
import LightboxImage from './LightboxImage'
import Button from './Slide'
import './Card/Card.css'
import { useState } from 'react'

export default function Lightbox(props) {
  const { current, onClick, images } = props

  const [newImage, setNewImage] = useState(current)

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
      <Button
        src={BtnChangeImage}
        alt="playbutton prev desplazados"
        handleOnClick={handleChangePrevPhoto}
        content={newImage}
        rotate="-rotate-180"
      />

      <div className="w-full flex items-center lg:justify-center lg:flex-row">
        <LightboxImage content={newImage} handleOnClick={onClick} />
      </div>

      <Button
        src={BtnChangeImage}
        alt="playbutton next desplazados"
        handleOnClick={handleChangeNextPhoto}
        content={newImage}
      />
    </div>
  )
}
