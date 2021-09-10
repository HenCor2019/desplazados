import { useState } from 'react'
import { MESSAGE } from '../../constants/FooterMessages'
import { ReactComponent as Gallery } from '../../assets/images/Causes/gallery.svg'
import { ReactComponent as Story } from '../../assets/images/Causes/story.svg'
import FooterMessage from '../../Components/FooterMessage/FooterMessage'
import CauseImage from '../../Components/CauseImage/CauseImage'
import '../../Components/CauseImage/index.css'
import { useHistory } from 'react-router-dom'

const styles = {
  mainContainer:
    'p-0 sm:p-5 h-full sm:h-3/4 w-full sm:w-5/6 md:w-full mx-auto md:h-5/6 mt-9 md:mt-10 sm:justify-center sm:content-center lg:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4'
}

export default function Causes() {
  const [galleryGrayscale, setGalleryGrayscale] = useState(false)
  const [storiesGrayscale, setStoriesGrayscale] = useState(false)
  const { push } = useHistory()

  const handleMouseEnter = (save) => {
    save(true)
  }

  const handleMouseLeave = () => {
    setStoriesGrayscale(false)
    setGalleryGrayscale(false)
  }

  const handleOnComic = {
    //TODO: (comic section)
  }

  const handleOnGallery = () => {
    push('/causes/gallery')
  }

  return (
    <main className={styles.mainContainer}>
      <CauseImage
        Image={Story}
        handleOnClick={handleOnComic}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        grayscale={storiesGrayscale}
        setGrayscale={setGalleryGrayscale}
      />

      <CauseImage
        Image={Gallery}
        handleOnClick={handleOnGallery}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        grayscale={galleryGrayscale}
        setGrayscale={setStoriesGrayscale}
      />

      <div></div>
      <FooterMessage message={MESSAGE} />
    </main>
  )
}
