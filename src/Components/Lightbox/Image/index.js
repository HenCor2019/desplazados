import BtnChangeImage from '../../../assets/images/Lightbox/button.png'
import LightboxImage from './Image'
import Button from './Button'
import { useState } from 'react'

import '../index.css'

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
    <div className="lightbox w-full h-full flex justify-center content-center z-40 sm:p-3">
      <Button
        src={BtnChangeImage}
        alt="playbutton prev desplazados"
        handleOnClick={handleChangePrevPhoto}
        content={newImage}
        rotate="-rotate-180"
        opacity={newImage.index === 0 ? 'opacity-0' : 'opacity-100'}
      />

      <div className="w-full lg:w-4/5 flex items-center lg:justify-center lg:flex-row">
        <LightboxImage content={newImage} handleOnClick={onClick} />
      </div>

      <Button
        src={BtnChangeImage}
        alt="playbutton next desplazados"
        handleOnClick={handleChangeNextPhoto}
        content={newImage}
        opacity={
          newImage.index === images.length - 1 ? 'opacity-0' : 'opacity-100'
        }
      />
    </div>
  )
}
