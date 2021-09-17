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
      <main className="flex flex-col md:flex-row justify-around items-start h-full md:w-4/5">
        <div className="grid grid-cols-1 grid-flow-row md:grid-cols-dreamsGallery md:grid-rows-dreamGallery gap-2 min-h-0 min-w-0 p-2 order-2 sm:order-0">
          {dreamGallery.map((dreamImage) => (
            <>
              <Image
                key={dreamImage.index}
                content={dreamImage}
                onClick={handleOnClick}
                isMobile={isMobile}
              />
            </>
          ))}

          {/* <div className='bg-green-300 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2'>
            1
          </div>
          <div className='bg-green-300 md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-2'>
            2
          </div>
          <div className='bg-green-300 md:col-start-5 md:col-end-6 md:row-start-1 md:row-end-2'>
            3
          </div>
          <div className='bg-green-300 md:col-start-1 md:col-end-4 md:row-start-2 md:row-end-4'>
            4
          </div>
          <div className='bg-green-300 md:col-start-4 md:col-end-6 md:row-start-2 md:row-end-3'>
            5
          </div>
          <div className='bg-green-300 md:col-start-1 md:col-end-2 md:row-start-4 md:row-end-5'>
            6
          </div>
          <div className='bg-green-300 md:col-start-2 md:col-end-4 md:row-start-4 md:row-end-5'>
            7
          </div>
          <div className='bg-green-300 md:col-start-4 md:col-end-6 md:row-start-3 md:row-end-5'>
            8
          </div>
          <div className='bg-green-300 md:col-start-1 md:col-end-4 md:row-start-5 md:row-end-6'>
            9
          </div>
          <div className='bg-green-300 md:col-start-4 md:col-end-6 md:row-start-5 md:row-end-6'>
            10
          </div> */}
        </div>
        <div className="flex flex-col justify-start items-center flex-shrink-3 min-h-0 min-w-0 order-1 sm:order-0">
          <div className="w-full h-full flex justify-start items-center flex-shrink-3">
            <img
              src={title}
              alt="Los sueños entre la realidad y la fantasía"
              className="object-contain w-1/2 md:w-8/12 p-4"
            />
          </div>
          <div className="w-full h-full flex justify-start items-start">
            <p className="text-base md:text-sm text-justify font-acumin p-4">
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
