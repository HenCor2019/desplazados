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
      {isActive && (
        <Modal>
          <Lightbox
            current={activePhoto}
            onClick={handleOnClick}
            images={galleryPhotos}
          />
        </Modal>
      )}
{/* 
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
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full grid">
          <img
            src={galleryPhotos[1].src}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="inner-grid w-full col-span-3 row-span-2 grid grid-cols-3 gap-1 pl-10">
          <div className="w-full col-span-2 grid">
            <img
              src={galleryPhotos[2].src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full grid">
            <img
              src={galleryPhotos[5].src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full grid">
            <img
              src={galleryPhotos[4].src}
              alt=""
              className="w-full h-full object-cover"
            />
            <img
              src={galleryPhotos[6].src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full grid">
            <img
              src={galleryPhotos[8].src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full grid">
            <img
              src={galleryPhotos[6].src}
              alt=""
              className="w-full h-full object-cover"
            />
            <img
              src={galleryPhotos[7].src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full grid">
            <img
              src={galleryPhotos[7].src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full col-span-2">
            <img
              src={galleryPhotos[3].src}
              alt=""
              className="w-full h-full object-cover"
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
              className="w-full h-full object-cover w-5/6"
            />
          </div>
        </div>
      </div>
     */}
    
    <div className="grid grid-cols-1 grid-flow-row sm:grid-cols-causesGallery gap-4">

      <div className="bg-red-500 flex justify-center items-center text-justify p-8 lg:p-16 text-xs md:text-sm sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2 overflow-y-scrol order-5">
        <p>
          Ipsum officia praesentium tempore voluptatem facere perspiciatis?
          Dolorem dolor distinctio mollitia quam consectetur Eius at quidem
          dolor fugit pariatur. Maiores velit sunt ipsum ab repellat. Illo
          reiciendis repellendus pariatur delectus quas Quam unde facilis
          reiciendis.
        </p>
      </div>
      <div className="bg-blue-500 sm:col-start-3 sm:col-end-5 sm:row-start-1 sm:row-end-2 order-5">
        <img
          src={galleryPhotos[0].src}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-yellow-500 sm:col-start-5 sm:col-end-6 sm:row-start-1 sm:row-end-3 order-5">
        <img
          src={galleryPhotos[1].src}
          className="w-full h-full object-cover"
        />
      </div>


      <div className="bg-gray-500 sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-5 order-5">
        <img
          src={galleryPhotos[2].src}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-pink-500 sm:col-start-2 sm:col-end-4 sm:row-start-2 sm:row-end-4 order-5">
        <img
          src={galleryPhotos[3].src}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-red-300 sm:col-start-4 sm:col-end-5 sm:row-start-2 sm:row-end-5 order-5">
        <img
          src={galleryPhotos[4].src}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-green-300 sm:col-start-5 sm:col-end-6 sm:row-start-3 sm:row-end-5 order-5">
        <p>
          Ipsum officia praesentium tempore voluptatem facere perspiciatis?
          Dolorem dolor distinctio mollitia quam consectetur Eius at quidem
          dolor fugit pariatur. Maiores velit sunt ipsum ab repellat. Illo
        </p>
      </div>


      <div className="bg-blue-300 sm:col-start-2 sm:col-end-4 sm:row-start-4 sm:row-end-5 order-5">
      <img
          src={galleryPhotos[5].src}
          className="w-full h-full object-cover"
        />
      </div>


      <div className="bg-yellow-300 sm:col-start-1 sm:col-end-2 sm:row-start-5 sm:row-end-6 order-5">
       <img
          src={galleryPhotos[6].src}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-gray-300 sm:col-start-2 sm:col-end-4 sm:row-start-5 sm:row-end-6 order-5">
        <img
          src={galleryPhotos[7].src}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-pink-300 sm:col-start-4 sm:col-end-5 sm:row-start-5 sm:row-end-6 order-5">
        <img
          src={galleryPhotos[8].src}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-pink-300 sm:col-start-5 sm:col-end-6 sm:row-start-5 sm:row-end-6 order-5">
        <img
          src={galleryPhotos[9].src}
          className="w-full h-full object-cover"
        />
      </div>
    </div>

    </>
  )
}
