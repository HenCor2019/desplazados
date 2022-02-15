import React, { useState } from 'react'
import Image from 'waiting/components/ImageGallery/Image'
import Text from 'waiting/components/TextGallery/Text'
import Title from 'waiting/assets/images/gallery/Title.png'
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

import { useConfigContext } from 'contexts/ConfigContext'
import { LazySection } from 'shared/components/LazySection/LazySection'

function WaitingTimeGallery() {
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
            src={Title}
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
                Al salir de casa, obligados por la violencia, las familias no
                pueden llevar consigo muchas pertenencias. A veces se reubican
                por sus propios medios, a veces es necesario un albergue. ¿Cómo
                es vivir, desde los ojos de una niña o un niño, esta realidad?
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const galleryImage = [
  {
    title: 'Pasos de colores',
    description:
      '“Estos son mis zapatos que uso todos los días para jugar en mi casa”.',
    imgPosition: 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2',
    author: 'Dani, 9 años de edad',
    thumbnail: Image1,
    src: ImageGallery1,
    index: 0
  },
  {
    title: 'Sopa rica.',
    description:
      '“Esta es la olla donde mi mami nos hace sopa de pollo… le queda bien rica”.',
    author: 'José, 14 años de edad',
    imgPosition: 'lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2',
    thumbnail: Image2,
    src: ImageGallery2,
    index: 1
  },
  {
    title: 'Desayuno con huevo.',
    description:
      '“Mi mamá me hace pan con huevo para desayunar, le pone salsa, huevo, queso y pan”.',
    author: 'Flor, 10 años de edad',
    imgPosition: 'lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2',
    thumbnail: Image3,
    src: ImageGallery3,
    index: 2
  },
  {
    title: 'Vidas nuevas.',
    description:
      '“Con mi mamá nos pusimos a sembrar semillas de una papaya que había salido dulce y nació”.',
    author: 'Alberto, 15 años de edad',
    imgPosition: 'lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2',
    thumbnail: Image4,
    src: ImageGallery4,
    index: 3
  },
  {
    title: 'Geometría del hogar.',
    description:
      '“Esta es la puerta de la casa donde vivimos, casi siempre la mantenemos cerrada”.',
    author: 'Carlos, 13 años de edad',
    imgPosition: 'lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3',
    thumbnail: Image5,
    src: ImageGallery5,
    index: 4
  },
  {
    title: 'Limites marcados.',
    description:
      '“En el cuarto donde estamos solo cabe un camarote y el ropero, todos dormimos en el camarote, mi mamá, mi papá, mi hermana y yo, casi no hay espacio”.',
    author: 'Alex, 14 años de edad',
    imgPosition: 'lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3',
    thumbnail: Image6,
    src: ImageGallery6,
    index: 5
  },
  {
    title: 'Perro Balu.',
    description:
      '“Este me lo regaló mi abuelita, tiene muchos colores porque está feliz”.',
    author: 'Valeria, 12 años de edad',
    imgPosition: 'lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3',
    thumbnail: Image7,
    src: ImageGallery7,
    index: 6
  },
  {
    title: 'Kati Cat',
    description:
      '“Este es mi peluche preferido, me gustan los gatos, él duerme conmigo”.',
    author: 'Karla, 9 años de edad',
    imgPosition: 'lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3',
    thumbnail: Image8,
    src: ImageGallery8,
    index: 7
  },
  {
    title: 'Disciplina Bucal.',
    description:
      '“Mi papá siempre nos dice que nos lavemos los dientes en la noche”.',
    author: 'Jonathan, 11 años de edad',
    imgPosition: 'lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4',
    thumbnail: Image9,
    src: ImageGallery10,
    index: 8
  },
  {
    title: 'Frutas congeladas.',
    description:
      '“A veces en las tardes sacamos la fruta que tenemos congelada en la refri y nos la comemos así, nos gusta la fruta congelada”.',
    author: 'Camila, 13 años de edad',
    imgPosition: 'lg:col-start-2 lg:col-end-3 lg:row-start-3 lg:row-end-4',
    thumbnail: Image10,
    src: ImageGallery9,
    index: 9
  }
]

export default LazySection(WaitingTimeGallery)
