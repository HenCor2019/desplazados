import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

import Footer from 'causes/components/Footer/Footer'
import CauseImage from 'causes/components/Image/Image'
import 'causes/assets/styles/index.css'
import { getImages } from './helper/images'

function Causes() {
  const [t] = useTranslation('causesPagesSectionHome')
  const language = i18next.language;
  const { GalleryImage, StoryImage } = getImages(language)

  const [galleryGrayscale, setGalleryGrayscale] = useState(false)
  const [storiesGrayscale, setStoriesGrayscale] = useState(false)
  const footerMessage = t('migrations') ?? 'Unkown message'
  const { push } = useHistory()

  const handleMouseEnter = (save) => {
    save(true)
  }

  const handleMouseLeave = () => {
    setStoriesGrayscale(false)
    setGalleryGrayscale(false)
  }

  const onRouteChangeHandler = (newRoute) => {
    push(`/causas/${newRoute}`)
  }

  return (
    <main className="p-0 h-full sm:h-3/5 w-full sm:w-5/6 md:w-full mx-auto md:h-2/3 lg:h-4/5 mt-9 md:mt-10 sm:justify-center sm:content-center lg:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 xl:p-14">

      <div className="row-span-2 my-7">
        <CauseImage
          Image={StoryImage}
          onClick={onRouteChangeHandler}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          grayscale={storiesGrayscale}
          setGrayscale={setGalleryGrayscale}
          language={language}
          route="comic"
        />
      </div>

      <div>
        <CauseImage
          rowspan="row-span-2"
          Image={GalleryImage}
          onClick={onRouteChangeHandler}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
          grayscale={galleryGrayscale}
          setGrayscale={setStoriesGrayscale}
          language={language}
          route="galeria"
        />
      </div>

      <Footer message={footerMessage} />
    </main>
  )
}

export default Causes
