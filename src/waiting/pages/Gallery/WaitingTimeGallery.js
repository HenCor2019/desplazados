import React, { useState } from 'react'
import Image from 'waiting/components/ImageGallery/Image'
import Text from 'waiting/components/TextGallery/Text'
import Title_es from 'waiting/assets/images/gallery/Title_es.png'
import Title_en from 'waiting/assets/images/gallery/Title_en.png'
import Image1 from 'waiting/assets/images/gallery/1.png'
import Image2 from 'waiting/assets/images/gallery/2.png'
import Image3 from 'waiting/assets/images/gallery/3.png'
import Image4 from 'waiting/assets/images/gallery/4.png'
import Image5 from 'waiting/assets/images/gallery/5.png'
import Image6 from 'waiting/assets/images/gallery/6.png'
import Image7 from 'waiting/assets/images/gallery/7.png'
import Image8 from 'waiting/assets/images/gallery/8.png'
import Image9 from 'waiting/assets/images/gallery/9.png'
import Image10 from 'waiting/assets/images/gallery/10.png'
import ImageGallery1 from 'waiting/assets/images/gallery/Image1.png'
import ImageGallery2 from 'waiting/assets/images/gallery/Image2.png'
import ImageGallery3 from 'waiting/assets/images/gallery/Image3.png'
import ImageGallery4 from 'waiting/assets/images/gallery/Image4.png'
import ImageGallery5 from 'waiting/assets/images/gallery/Image5.png'
import ImageGallery6 from 'waiting/assets/images/gallery/Image6.png'
import ImageGallery7 from 'waiting/assets/images/gallery/Image7.png'
import ImageGallery8 from 'waiting/assets/images/gallery/Image8.png'
import ImageGallery9 from 'waiting/assets/images/gallery/Image9.png'
import ImageGallery10 from 'waiting/assets/images/gallery/Image10.png'
import './WaitingTimeGallery.css'

import Modal from 'shared/components/Modal/Modal'
import Lightbox from 'Components/Lightbox/Image/index'

import i18next from 'i18next';
import { useTranslation } from 'react-i18next';

import { useConfigContext } from 'contexts/ConfigContext'
import { LazySection } from 'shared/components/LazySection/LazySection'

function WaitingTimeGallery() {
  const [t] = useTranslation('waitingPagesGalleryGallery');

  const galleryImage = setGalleryImage(t);

  const [isActive, setIsActive] = useState(false)
  const [activeImage, setActiveImage] = useState(galleryImage[0])

  const { isMobile, isTablet } = useConfigContext()

  const handleOnClick = (imageInformation) => {
    setIsActive(!isActive)
    if (imageInformation) setActiveImage(imageInformation)
  }

  return (
    <div className="sm:flex sm:justify-center sm:items-center h-full w-full">
      {!isMobile && isActive && (
        <Modal>
          <Lightbox
            current={activeImage}
            onClick={handleOnClick}
            images={galleryImage}
          />
        </Modal>
      )}
      <main className="flex flex-col justify-center items-center xl:justify-start xl:items-start w-full">
        <div className="flex justify-center items-center py-6 px-6 sm:px-0 xl:p-0 xl:justify-start xl:items-start md:w-11/12 lg:w-8/12">
          <img
            className={'w-full sm:w-3/4 md:w-3/5 lg:w-1/2 '}
            //TODO replace title src
            src={i18next.language == 'en' ? Title_en : Title_es}
            alt="La cotidianidad: la casa de espera y el albergue"
          />
        </div>
        <div className="flex justify-center items-start">
          <div className="grid grid-cols-1 w-full md:w-8/12 grid-flow-row sm:grid-cols-2 lg:grid-cols-4 background-waitingTimeGallery bg-no-repeat bg-center bg-cover lg:gap-6 lg:p-6 lg:pr-10 m-2 xl-2:m-8">
            {galleryImage.map((galleryImage) => (
              <>
                <Image
                  key={galleryImage.index}
                  img={galleryImage}
                  alt={galleryImage.title}
                  position={galleryImage.imgPosition}
                  onClick={handleOnClick}
                  isMobile={isMobile}
                />
                {isTablet ||
                  (isMobile && (
                    <Text
                      title={galleryImage.title}
                      description={galleryImage.description}
                      author={galleryImage.author}
                    />
                  ))}
              </>
            ))}
            <div className="bg-time sm:bg-transparent lg:bg-white p-4 sm:px-10 md:px-5 lg:p-2 order-last sm:order-4 sm:col-start-1 sm:col-end-3 lg:col-start-3 lg:col-end-5 lg:row-start-3 lg:row-end-4 lg:border xl:border-2 xl-2:border-3 xl:border-gray-gallery border-solid">
              <p className="text-justify text-white sm:text-black font-acumin text-custom-gallery-size">
                {t('message')}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const setGalleryImage = (t) => {
  return [
    {
      title: t('colorSteps.title'),
      description: t('colorSteps.description'),
      imgPosition: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2',
      author: t('colorSteps.author'),
      thumbnail: Image1,
      src: ImageGallery1,
      index: 0
    },
    {
      title: t('tastySoup.title'),
      description: t('tastySoup.description'),
      author: t('tastySoup.author'),
      imgPosition: 'lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2',
      thumbnail: Image2,
      src: ImageGallery2,
      index: 1
    },
    {
      title: t('eggsForBreakfast.title'),
      description: t('eggsForBreakfast.description'),
      author: t('eggsForBreakfast.author'),
      imgPosition: 'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2',
      thumbnail: Image3,
      src: ImageGallery3,
      index: 2
    },
    {
      title: t('newLives.title'),
      description: t('newLives.description'),
      author: t('newLives.author'),
      imgPosition: 'lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2',
      thumbnail: Image4,
      src: ImageGallery4,
      index: 3
    },
    {
      title: t('homeGeometry.title'),
      description: t('homeGeometry.description'),
      author: t('homeGeometry.author'),
      imgPosition: 'lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3',
      thumbnail: Image5,
      src: ImageGallery5,
      index: 4
    },
    {
      title: t('visibleLimits.title'),
      description: t('visibleLimits.description'),
      author: t('visibleLimits.author'),
      imgPosition: 'lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3',
      thumbnail: Image6,
      src: ImageGallery6,
      index: 5
    },
    {
      title: t('BaluTheDog.title'),
      description: t('BaluTheDog.description'),
      author: t('BaluTheDog.author'),
      imgPosition: 'lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3',
      thumbnail: Image7,
      src: ImageGallery7,
      index: 6
    },
    {
      title: t('KatiCat.title'),
      description: t('KatiCat.description'),
      author: t('KatiCat.author'),
      imgPosition: 'lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3',
      thumbnail: Image8,
      src: ImageGallery8,
      index: 7
    },
    {
      title: t('oralDiscipline.title'),
      description: t('oralDiscipline.description'),
      author: t('oralDiscipline.author'),
      imgPosition: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
      thumbnail: Image9,
      src: ImageGallery10,
      index: 8
    },
    {
      title: t('frozenFruits.title'),
      description: t('frozenFruits.description'),
      author: t('frozenFruits.author'),
      imgPosition: 'lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4',
      thumbnail: Image10,
      src: ImageGallery9,
      index: 9
    }
  ]
}

export default LazySection(WaitingTimeGallery)
