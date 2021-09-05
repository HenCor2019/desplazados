import { useState } from 'react'
import { MESSAGE } from '../../constants/FooterMessages'
import { ReactComponent as Gallery } from '../../images/Causes/gallery.svg'
import { ReactComponent as Story } from '../../images/Causes/story.svg'
import FooterMessage from '../../components/FooterMessage/FooterMessage'
import CauseImage from '../../components/CauseImage/CauseImage'
import '../../components/CauseImage/index.css'

const styles = {
  mainContainer:
    'p-0 sm:p-7 h-full sm:h-3/4 md:h-5/6 w-full mt-9 md:mt-10 sm:justify-center sm:content-center lg:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4'
}

export default function Causes() {
  const [galleryGrayscale, setGalleryGrayscale] = useState(false)
  const [storiesGrayscale, setStoriesGrayscale] = useState(false)

  const handleMouseEnter = (save) => {
    save(true)
  }

  const handleMouseLeave = () => {
    setStoriesGrayscale(false)
    setGalleryGrayscale(false)
  }

  return (
    <main className={styles.mainContainer}>
      <CauseImage
        Image={Story}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        grayscale={storiesGrayscale}
        setGrayscale={setGalleryGrayscale}
      />

      <CauseImage
        Image={Gallery}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        grayscale={galleryGrayscale}
        setGrayscale={setStoriesGrayscale}
      />

      <FooterMessage message={MESSAGE} />
    </main>
  )
}
