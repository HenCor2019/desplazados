import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ReactComponent as Gallery } from '../../assets/images/Causes/gallery.svg'
import { ReactComponent as Story } from '../../assets/images/Causes/story.svg'
import CauseImage from '../../Components/Causes/Image'
import Footer from '../../Components/Causes/Footer'
import { MESSAGE } from '../../constants/Causes/index'
import { LazySection } from '../../HOC/LazySection/LazySection'

import '../../Components/Causes/index.css'

function Causes() {
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

  const onRouteChangeHandler = (newRoute) => {
    push(`/causas/${newRoute}`)
  }

  return (
    <main className="p-0 h-full sm:h-3/5 w-full sm:w-5/6 md:w-full mx-auto md:h-2/3 lg:h-4/5 mt-9 md:mt-10 sm:justify-center sm:content-center lg:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 xl:p-14">
      <CauseImage
        rowspan="row-span-3"
        Image={Story}
        onClick={onRouteChangeHandler}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        grayscale={storiesGrayscale}
        setGrayscale={setGalleryGrayscale}
        route="comic"
      />

      <CauseImage
        rowspan="row-span-2"
        Image={Gallery}
        onClick={onRouteChangeHandler}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        grayscale={galleryGrayscale}
        setGrayscale={setStoriesGrayscale}
        route="galeria"
      />

      <Footer message={MESSAGE} />
    </main>
  )
}

export default LazySection(Causes)
