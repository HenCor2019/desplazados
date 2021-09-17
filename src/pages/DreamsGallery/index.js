import React, { useState } from 'react'
import { dreamGallery } from '../../constants/Galleries/Dreams'

import { useConfigContext } from '../../contexts/ConfigContext'
import { LazySection } from '../../HOC/LazySection/LazySection'

import Image from '../../Components/Gallery/Dreams/Image'

import title from '../../assets/images/Dreams/Gallery/title.png'

import Modal from '../../Components/Modal/Modal'
import Lightbox from '../../Components/Lightbox/Image'

function DreamsGallery() {
  const [isActive, setIsActive] = useState(false)
  const [activeImage, setActiveImage] = useState(dreamGallery[0])

  const { isMobile, isTablet } = useConfigContext()

  const handleOnClick = (imageInformation) => {
    setIsActive(!isActive)
    if (imageInformation) setActiveImage(imageInformation)
  }

  return (
    <div className="md:flex sm:min-w-0 md:justify-center md:items-center h-full">
      {!isMobile && isActive && (
        <Modal>
          <Lightbox
            current={activeImage}
            onClick={handleOnClick}
            images={dreamGallery}
          />
        </Modal>
      )}
      <main className="flex flex-col xl:flex-row justify-around items-center h-full md:w-4/5 lg:5/5 xl:w-11/12">
        <div className="grid grid-cols-1 grid-flow-row md:grid-cols-dreamsGallery md:grid-rows-dreamGallery flex-gallery gap-2 min-h-0 min-w-0 p-2 order-2 xl:order-1">
          {dreamGallery.map((dreamImage) => (
            <>
              <Image
                key={dreamImage.src+dreamImage.index}
                content={dreamImage}
                onClick={handleOnClick}
                isMobile={isMobile}
              />
            </>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row xl:flex-col justify-start items-center flex-rigid xl:flex-shrink-3 w-full order-1 xl:order-2">
          <div className="w-full h-full flex lg:justify-start justify-center items-center flex-shrink-2">
            <img
              src={title}
              alt="Los sueños entre la realidad y la fantasía"
              className="object-contain w-2/3 sm:w-full 2xl:w-60 p-4"
            />
          </div>
          <div className="w-full h-full flex justify-start items-center">
            <p className="text-base text-justify font-acumin p-4">
              “Los colores, las acuarelas, la plastilina, el origami y el
              collage cuentan cuáles son los sueños más genuinos de niñas y
              niños que sufren desplazamiento forzado por violencia.”
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DreamsGallery
