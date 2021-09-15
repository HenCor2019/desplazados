import { useState } from 'react'
import '../../Components/Gallery/Gallery.css'
import Lightbox from '../../Components/Lightbox/Image/index'
import Image from '../../Components/Gallery/Image'
import Modal from '../../Components/Modal/Modal'
import CausesBullet from '../../assets/images/Causes/Gallery/gallery_bullet.png'
import { galleryPhotos } from '../../constants/FooterMessages'
import { useConfigContext } from '../../contexts/ConfigContext'

import { LazySection } from '../../HOC/LazySection/LazySection'

export default LazySection(function () {
  const { isMobile } = useConfigContext()
  const [isActive, setIsActive] = useState(false)
  const [activePhoto, setActiveImage] = useState(galleryPhotos[0])

  const onClickHandler = (imageInformation) => {
    setIsActive(!isActive)
    if (imageInformation) setActiveImage(imageInformation)
  }

  return (
    <>
      {!isMobile && isActive && (
        <Modal>
          <Lightbox
            current={activePhoto}
            onClick={onClickHandler}
            images={galleryPhotos}
          />
        </Modal>
      )}
      <div className="md:w-11/12 sm:p-5 md:p-0 lg:w-3/4 m-auto md:pr-4 xl:pb-11 mt-9">
        <img
          src={CausesBullet}
          className="w-2/5 px-5 pl-0"
          alt="lo que dejamos atras"
          loading="lazy"
        />
      </div>

      <div className="md:w-11/12 lg:w-3/4 m-auto md:mt-10 xl:mt-0 sm:p-5 md:p-0 md:pb-4">
        <ul className="grid grid-cols-1 sm:grid-cols-2 grid-flow-row md:grid-cols-causesGallery gap-2">
          <div className="font-sans bg-gray-50 flex justify-center items-center text-justify p-6 xl:p-5 text-xs font-medium lg:text-sm text-gray-700 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2 order-1 mx-4 sm:mx-0 md:order-5">
            <p>
              Niñas y niños de familias que han tenido que desplazarse por la
              violencia que vive El Salvador cuentan que por medio de los
              colores, plastilinas, collage y origami lo que han tenido que
              dejar atras luego de salir de casa. Desde sus programas de
              telesvisión, hasta sus amigos mas cercanos
            </p>
          </div>

          <Image
            content={galleryPhotos[0]}
            onClick={onClickHandler}
            cols={{
              sm: 'sm:col-start-1 sm:col-end-3',
              md: 'md:col-start-3 md:col-end-5'
            }}
            rows={{
              sm: 'sm:row-start-1 sm:row-end-2',
              md: 'md:row-start-1 md:row-end-2'
            }}
            isMobile={isMobile}
          />

          <Image
            content={galleryPhotos[1]}
            onClick={onClickHandler}
            cols={{ md: 'md:col-start-5 md:col-end-6' }}
            rows={{ md: 'md:row-start-1 md:row-end-3' }}
            isMobile={isMobile}
          />

          <Image
            content={galleryPhotos[2]}
            onClick={onClickHandler}
            cols={{ md: 'md:col-start-1 md:col-end-2' }}
            rows={{ md: 'md:row-start-2 md:row-end-5' }}
            isMobile={isMobile}
          />

          <Image
            content={galleryPhotos[3]}
            onClick={onClickHandler}
            cols={{ md: [2, 4] }}
            rows={{ md: [2, 4] }}
            cols={{ md: 'md:col-start-2 md:col-end-4' }}
            rows={{ md: 'md:row-start-2 md:row-end-4' }}
            isMobile={isMobile}
          />

          <Image
            content={galleryPhotos[4]}
            onClick={onClickHandler}
            cols={{ md: 'md:col-start-4 md:col-end-5' }}
            rows={{ md: 'md:row-start-2 md:row-end-5' }}
            isMobile={isMobile}
          />

          <div className="bg-gray-50 font-sans text-gray-700 text-xs font-medium p-6 sm:px-2 sm:py-1 flex justify-center items-center content-center md:col-start-5 md:col-end-6 md:row-start-3 md:row-end-5 order-6 sm:order-2 mx-4 sm:mx-0 md:order-5 text-justify">
            <p>
              La imaginación , la creatividad, el aprendizaje y las emociones
              fueron las principales herramientas para elaborar cada producto
            </p>
          </div>

          <Image
            content={galleryPhotos[5]}
            onClick={onClickHandler}
            cols={{ md: 'md:col-start-2 md:col-end-4' }}
            rows={{ md: 'md:row-start-4 md:row-end-5' }}
            isMobile={isMobile}
          />

          <Image
            content={galleryPhotos[6]}
            onClick={onClickHandler}
            cols={{ md: 'md:col-start-1 md:col-end-2' }}
            rows={{ md: 'md:row-start-5 md:row-end-6' }}
            isMobile={isMobile}
          />

          <Image
            content={galleryPhotos[7]}
            onClick={onClickHandler}
            cols={{ md: 'md:col-start-2 md:col-end-4' }}
            rows={{ md: 'md:row-start-5 md:row-end-6' }}
            isMobile={isMobile}
          />

          <Image
            content={galleryPhotos[8]}
            onClick={onClickHandler}
            cols={{ md: 'md:col-start-4 md:col-end-5' }}
            rows={{ md: 'md:row-start-5 md:row-end-6' }}
            isMobile={isMobile}
          />

          <Image
            content={galleryPhotos[9]}
            onClick={onClickHandler}
            cols={{ md: 'md:col-start-5 md:col-end-6' }}
            rows={{ md: 'md:row-start-5 md:row-end-6' }}
            isMobile={isMobile}
          />
        </ul>
      </div>
    </>
  )
})
