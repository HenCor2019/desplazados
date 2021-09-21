import { useEffect, useState } from 'react'
import { comicImages } from '../../constants/Galleries'
import { useConfigContext } from '../../contexts/ConfigContext'
import { LazySection } from '../../HOC/LazySection/LazySection'
import Dropdown from '../../Components/Dropdown/Dropdown'
import Button from '../../Components/Comic/Button'
import CompleteComic from '../../Components/Comic/Comic'
import InnerButtons from '../../Components/Comic/InnerButtons'

const Comic = () => {
  const {
    isMobile,
    isTablet,
    isMonitor,
    isSmallMobile,
    isXlMonitor,
    is2XlMonitor
  } = useConfigContext()

  const [flipPage, setFlipPage] = useState(null)
  const [width, setWidth] = useState(650)
  const [height, setHeight] = useState(510)
  const [currentPage, setCurrentPage] = useState(null)

  useEffect(
    () =>
      toggleSize({ isMobile, isMonitor, isTablet, isXlMonitor, is2XlMonitor }),
    [isMobile, isTablet, isMonitor, isSmallMobile, isXlMonitor, is2XlMonitor]
  )

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
      <Dropdown
        placeholder="Ir a página"
        options={comicImages.filter((image) => image.name !== undefined)}
        onChange={(values) => setCurrentPage(values)}
        label="name"
        value="index"
        secondPlaceholder="Seleccionar"
      />

      <section className="comic-container w-full sm:h-full md:h-5/6 2xl:h-full flex flex-col lg:flex-row justify-center items-center">
        <Button
          height={height}
          margin="mr-5"
          onClick={onPreviousPage}
          rotate="-rotate-180"
        />

        <CompleteComic
          width={width}
          height={height}
          refFlip={refFlipPage}
          images={comicImages}
        />

        <InnerButtons onNext={onNextPage} onPrev={onPreviousPage} />

        <Button height={height} margin="ml-5" onClick={onNextPage} />
      </section>
    </>
  )
}

export default LazySection(Comic)
