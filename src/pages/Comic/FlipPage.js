import { useEffect, useState } from 'react'
import FlipPage from 'react-flip-page'
import GotoPage from '../../Components/Comic/GotoPage'
import Modal from '../../Components/Modal/Modal'
import { comicImages } from '../../constants/Galleries'
import { useConfigContext } from '../../contexts/ConfigContext'
import { LazySection } from '../../HOC/LazySection/LazySection'
import { ReactComponent as Arrow } from '../../assets/images/Lightbox/Image/arrow.svg'
import { BsCaretRightFill } from 'react-icons/bs'
import Select from 'react-dropdown-select'

const Comic = () => {
  const {
    isMobile,
    isTablet,
    isMonitor,
    isSmallMobile,
    isXlMonitor,
    is2XlMonitor
  } = useConfigContext()

  useEffect(
    () =>
      toggleSize({ isMobile, isMonitor, isTablet, isXlMonitor, is2XlMonitor }),
    [isMobile, isTablet, isMonitor, isSmallMobile, isXlMonitor, is2XlMonitor]
  )

  const [flipPage, setFlipPage] = useState(null)
  const [width, setWidth] = useState(650)
  const [height, setHeight] = useState(510)
  const [currentPage, setCurrentPage] = useState(null)

  const setNewSize = ({ newWidth, newHeight }) => {
    setWidth(newWidth)
    setHeight(newHeight)
  }

  const toggleSize = ({ isMobile, isMonitor, isTablet }) => {
    if (is2XlMonitor) setNewSize({ newWidth: 940, newHeight: 650 })

    if (isXlMonitor) setNewSize({ newWidth: 850, newHeight: 555 })

    if (isMonitor) setNewSize({ newWidth: 730, newHeight: 580 })

    if (isTablet) setNewSize({ newWidth: 700, newHeight: 530 })

    if (isMobile) setNewSize({ newWidth: 600, newHeight: 380 })

    if (isSmallMobile) setNewSize({ newWidth: 330, newHeight: 310 })
  }

  const refFlipPage = (component) => {
    setFlipPage(component)
  }

  const onPreviousPage = () => flipPage.gotoPreviousPage()
  const onNextPage = () => flipPage.gotoNextPage()

  useEffect(() => {
    if (!currentPage) return
    const [page] = currentPage
    flipPage.gotoPage(page.index)
  }, [currentPage])

  return (
    <>
      <div className="w-full text-gray-700 p-2 sm:p-0 sm:w-4/5 md:w-1/2 lg:w-1/4 2xl:w-1/5 ml-1 sm:ml-10">
        <Select
          placeholder="Ir a página"
          options={comicImages.filter((image) => image.name !== undefined)}
          onChange={(values) => setCurrentPage(values)}
          className="w-1/2"
          labelField="name"
          valueField="index"
          closeOnSelect={true}
          searchable={false}
          addPlaceholder="Seleccionar"
        />
      </div>

      <section className="comic-container w-full sm:h-full md:h-5/6 2xl:h-full flex flex-col lg:flex-row justify-center items-center">
        <div
          className="hidden relative self-start left-page lg:flex justify-center items-center mr-5"
          style={{ height: height }}
        >
          <BsCaretRightFill
            className="text-gray-800 h-16 w-16 cursor-pointer transform -rotate-180"
            onClick={onPreviousPage}
          />
        </div>

        <div className="w-auto mx-auto lg:mx-0 h-auto self-start mb-3 sm:mb-0 flex flex-col justify-center items-center content-center">
          <FlipPage
            orientation="horizontal"
            animationDuration={1000}
            width={width}
            height={height}
            ref={refFlipPage}
            className="p-2"
          >
            {comicImages.map((comic) => (
              <div
                key={comic.index}
                className="w-full h-full bg-transparent bg-background "
              >
                <img
                  key={comic.index}
                  src={comic.src}
                  className="w-full h-full p-3 sm:py-1 sm:px-0"
                  loading="lazy"
                  alt=""
                />
              </div>
            ))}
          </FlipPage>
        </div>

        <div className="lg:hidden flex w-full justify-center items-center mt-6">
          <BsCaretRightFill
            className="text-gray-800 h-16 transform rotate-180 w-16 cursor-pointer"
            onClick={onPreviousPage}
          />

          <BsCaretRightFill
            className="text-gray-800 h-16 w-16 cursor-pointer"
            onClick={onNextPage}
          />
        </div>

        <div
          className="right-page hidden lg:flex justify-center items-center ml-5 self-start"
          style={{ height: height }}
        >
          <BsCaretRightFill
            className="text-gray-800 h-16 w-16 cursor-pointer"
            onClick={onNextPage}
          />
        </div>
      </section>
    </>
  )
}

export default Comic
