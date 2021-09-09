import { galleryPhotos } from '../../constants/FooterMessages/index'
import Image from './Image'

export default function Aside({ isActive, handleOnClick }) {
  const lastPhoto = galleryPhotos[galleryPhotos.length - 1]

  return (
    <div className="hidden sm:px-5 h-full sm:w-full md:w-1/4 sm:flex md:flex-col justify-center md:justify-start items-center md:items-start p-4 rounded-md">
      <p className="sm:w-2/3 md:w-full md:h-1/2 h-full sm:mr-2 w-full sm:p-2 md:p-1  pt-4 pb-3 text-sm text-gray-700 font-normal bg-gray-100">
        Amet reiciendis odio odit modi eaque excepturi Quo ratione nulla
        reiciendis nesciunt quos. Ab eos adipisci consequatur vitae est quisquam
      </p>

      <div className="w-1/2 md:h-1/2">
        <Image
          isActive={isActive}
          handleOnClick={handleOnClick}
          src={lastPhoto.src}
          title={lastPhoto.title}
          description={lastPhoto.description}
          author={lastPhoto.author}
          index={lastPhoto.index}
        />
      </div>
    </div>
  )
}
