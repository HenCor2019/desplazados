import { useEffect, useState } from 'react'
import FlipPage from 'react-flip-page'
import { comicImages } from '../../constants/FooterMessages'
import { useConfigContext } from '../../contexts/ConfigContext'
import { LazySection } from '../../HOC/LazySection/LazySection'

const Comic = () => {
  const { isMobile, isTablet, isMonitor } = useConfigContext()
  const [width, setWidth] = useState(470)
  const [height, setHeight] = useState(510)

  const setNewSize = ({ newWidth, newHeight }) => {
    setWidth(newWidth)
    setHeight(newHeight)
  }

  const toggleSize = ({ isMobile, isMonitor, isTablet }) => {
    if (isMonitor) setNewSize({ newWidth: 500, newHeight: 610 })

    if (isTablet) setNewSize({ newWidth: 470, newHeight: 560 })

    if (isMobile) setNewSize({ newWidth: 370, newHeight: 410 })
  }

  const onStartPageChangeHandler = () => {
    if (isMonitor) setNewSize({ newWidth: 590, newHeight: 550 })

    if (isTablet || isMobile) setNewSize({ newWidth: 570, newHeight: 500 })
  }

  useEffect(
    () => toggleSize({ isMobile, isMonitor, isTablet }),
    [isMobile, isTablet, isMonitor]
  )

  return (
    <div className="w-full mb-3 sm:mb-0 sm:mt-8 sm:h-full md:h-5/6 flex justify-center items-center content-center">
      <FlipPage
        orientation="horizontal"
        animationDuration={600}
        onStartPageChange={onStartPageChangeHandler}
        width={width}
        height={height}
      >
        {comicImages.map((comic) => (
          <div key={comic.index} className="w-full h-full bg-gray-200">
            <img
              key={comic.index}
              src={comic.src}
              className="w-full h-full p-3 sm:p-0"
              loading="lazy"
              alt=""
            />
          </div>
        ))}
      </FlipPage>
    </div>
  )
}

export default LazySection(Comic)

