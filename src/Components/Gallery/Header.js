import { galleryPhotos } from '../../constants/FooterMessages/index'

import Image from './Image'
export default function Header({ isActive, handleOnClick }) {
  const [firstPhoto, secondPhoto] = galleryPhotos

  return (
    <div className="w-full lg:w-11/12 hidden sm:px-5 sm:grid sm:grid-cols-3 md:grid-cols-4 p-3 mb-2 gap-2">
      <div className="w-full col-span-2 h-32 p-1 md:y-3 sm:flex justify-center items-center content-center bg-gray-100 overflow-y-scroll">
        <p className="text-gray-700 font-normal px-6 sm:text-sm md:text-xs sm:py-7 md:py-1">
          Consectetur libero ea animi at blanditiis. Iusto asperiores minus
          voluptas amet tempore. Autem odit ea dicta quam dolorum error qui,
          molestias, minima? Tempore odit aliquid ab beatae ut laboriosam Sit
          accusamus repudiandae voluptate cum at. Voluptatibus vero dolores
          minus aliquid.
        </p>
      </div>

      <Image
        isActive={isActive}
        handleOnClick={handleOnClick}
        src={firstPhoto.src}
        title={firstPhoto.title}
        description={firstPhoto.description}
        author={firstPhoto.author}
        index={firstPhoto.index}
      />

      <div className="hidden md:block">
        <Image
          isActive={isActive}
          handleOnClick={handleOnClick}
          src={secondPhoto.src}
          title={secondPhoto.title}
          description={secondPhoto.description}
          author={secondPhoto.author}
          index={secondPhoto.index}
        />
      </div>
    </div>
  )
}
