import PlayButton from '../../images/Video/playbutton.png'
import LightboxImage from './LightboxImage'
import Slide from './Slide'

export default function Lightbox({
  imageInformation,
  handleOnClick,
  handleChangeNextPhoto,
  handleChangePrevPhoto
}) {
  return (
    <div className="top-0 absolute w-screen h-screen flex justify-center content-center sm:p-3">
      <Slide
        src={PlayButton}
        alt="playbutton prev desplazados"
        handleOnClick={handleChangePrevPhoto}
        imageInformation={imageInformation}
        rotate="-rotate-180"
      />

      <LightboxImage
        imageInformation={imageInformation}
        handleOnClick={handleOnClick}
      />

      <Slide
        src={PlayButton}
        alt="playbutton next desplazados"
        handleOnClick={handleChangeNextPhoto}
        imageInformation={imageInformation}
      />
    </div>
  )
}
