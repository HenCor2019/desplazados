import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Footer from 'causes/components/Footer/Footer'
import CauseImage from 'causes/components/Image/Image'
import { ReactComponent as Gallery_es } from 'causes/assets/images/svgs/gallery.svg'
import { ReactComponent as Story_es } from 'causes/assets/images/svgs/story.svg'

import Gallery_en from 'causes/assets/images/home/gallery.png'
import Story_en from 'causes/assets/images/home/comic.png'

import i18next from 'i18next'
import { useTranslation } from 'react-i18next'

import 'causes/assets/styles/index.css'

function Causes() {
  const [t] = useTranslation('causesPagesSectionHome')

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
      <CauseImage
        rowspan="row-span-3"
        Image={i18next.language === 'en' ? Story_en : Story_es}
        onClick={onRouteChangeHandler}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        grayscale={storiesGrayscale}
        setGrayscale={setGalleryGrayscale}
        route="comic"
      />

      <CauseImage
        rowspan="row-span-2"
        Image={i18next.language === 'en' ? Gallery_en : Gallery_es}
        onClick={onRouteChangeHandler}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        grayscale={galleryGrayscale}
        setGrayscale={setStoriesGrayscale}
        route="galeria"
      />

      <Footer message={footerMessage} />
    </main>
  )
}

export default Causes
