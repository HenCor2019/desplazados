import { galleryPhotos } from '../../constants/FooterMessages/index'

import Image from './Image'
export default function Header({ isActive, handleOnClick }) {
  const [firstPhoto, secondPhoto, tf] = galleryPhotos

  return (
    <div className="w-11/12 grid grid-cols-4 p-3 mb-2">
      <div className="w-full col-span-2 p-1 flex justify-center items-center content-center bg-gray-100">
        <div className="text-gray-700 text font-normal">
          <p className="px-6">
            Consectetur libero ea animi at blanditiis. Iusto asperiores minus
            voluptas amet tempore. Autem odit ea dicta quam dolorum error qui,
            molestias, minima? Tempore odit aliquid ab beatae ut laboriosam Sit
            accusamus repudiandae voluptate cum at. Voluptatibus vero dolores
            minus aliquid.
          </p>
        </div>
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
  )
}
