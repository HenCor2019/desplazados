import { galleryPhotos } from '../../constants/FooterMessages/index'

import Image from './Image'
export default function Header({ isActive, handleOnClick }) {
  const [firstPhoto, secondPhoto, tf] = galleryPhotos

  return (
    <div className="w-11/12 grid grid-cols-4 p-3 mb-2">
      <div className="w-full col-span-2 p-1 flex justify-center items-center content-center">
        <div className="text-gray-700 text font-normal">
          <p>
            Dolor fugiat doloremque repellendus praesentium culpa! Ipsa nulla
            eaque repudiandae ullam sed. Necessitatibus temporibus dolorum
            blanditiis numquam voluptatum itaque. Ducimus delectus dolor eos
            fugit expedita
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
