import { useState } from 'react'
import Aside from '../../Components/Gallery/Aside'
import Header from '../../Components/Gallery/Header'
import Images from '../../Components/Gallery/Images'
import Lightbox from '../../Components/Lightbox/index'
import Modal from '../../Components/Modal/Modal'
import { galleryPhotos } from '../../constants/FooterMessages'

import '../../Components/Gallery/Gallery.css'

export default function () {
  const [isActive, setIsActive] = useState(false)
  const [activePhoto, setActiveImage] = useState(galleryPhotos[0])

  const handleOnClick = (imageInformation) => {
    setIsActive(!isActive)
    if (imageInformation) setActiveImage(imageInformation)
  }

  return (
    <>
      {true && (
        <Modal>
          <Lightbox
            current={activePhoto}
            onClick={handleOnClick}
            images={galleryPhotos}
          />
        </Modal>
      )}

      <div className="images-container w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 p-16 grid-flow-row-dense items-center">
        <div className="grid w-full md:col-span-3 lg:col-span-2 pl-10 self-start">
          <p>
            Ipsum officia praesentium tempore voluptatem facere perspiciatis?
            Dolorem dolor distinctio mollitia quam consectetur Eius at quidem
            dolor fugit pariatur. Maiores velit sunt ipsum ab repellat. Illo
            reiciendis repellendus pariatur delectus quas Quam unde facilis
            reiciendis.
          </p>
        </div>
        <div className="w-full self-start">
          <img
            src={galleryPhotos[0].src}
            alt=""
            className="h-auto object-contain"
          />
        </div>

        <div className="w-full grid">
          <img
            src={galleryPhotos[1].src}
            alt=""
            className="h-auto object-contain"
          />
        </div>

        <div className="inner-grid w-full col-span-3 row-span-2 grid grid-cols-3 gap-1 pl-10">
          <div className="w-full col-span-2 grid">
            <img
              src={galleryPhotos[2].src}
              alt=""
              className="h-auto object-contain"
            />
          </div>
          <div className="w-full grid">
            <img
              src={galleryPhotos[5].src}
              alt=""
              className="h-auto object-contain"
            />
          </div>
          <div className="w-full grid">
            <img
              src={galleryPhotos[4].src}
              alt=""
              className="h-auto object-contain"
            />
            <img
              src={galleryPhotos[6].src}
              alt=""
              className="h-auto object-contain"
            />
          </div>
          <div className="w-full grid">
            <img
              src={galleryPhotos[8].src}
              alt=""
              className="h-auto object-contain"
            />
          </div>
          <div className="w-full grid">
            <img
              src={galleryPhotos[6].src}
              alt=""
              className="h-auto object-contain"
            />
            <img
              src={galleryPhotos[7].src}
              alt=""
              className="h-auto object-contain"
            />
          </div>
          <div className="w-full grid">
            <img
              src={galleryPhotos[7].src}
              alt=""
              className="h-auto object-contain"
            />
          </div>

          <div className="w-full col-span-2">
            <img
              src={galleryPhotos[3].src}
              alt=""
              className="h-auto object-contain"
            />
          </div>
        </div>
        <div className="w-full self-start">
          <div className="w-full">
            <p className="mb-4">
              Ipsum omnis ipsum quis eligendi autem delectus, adipisci Quaerat
              esse voluptates iusto asperiores aliquam sequi Rerum temporibus
              odio ipsam blanditiis
            </p>
          </div>
          <div className="w-full col-start-4">
            <img
              src={galleryPhotos[9].src}
              alt=""
              className="h-auto object-contain w-5/6"
            />
          </div>
        </div>
      </div>
    </>
  )
}
