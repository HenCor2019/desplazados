import Image from './Image'
import ImageThree from '../../images/Gallery/3-.png'
import { galleryPhotos } from '../../constants/FooterMessages/index'

export default function Aside({ isActive, handleOnClick }) {
  const lastPhoto = galleryPhotos[galleryPhotos.length - 1]

  return (
    <div className="w-2/5 flex flex-col justify-start items-start p-4">
      <p className="w-2/3 h-1/2 pr-3 pt-4 pb-3 text-sm text-gray-700 text font-normal">
        Amet reiciendis odio odit modi eaque excepturi Quo ratione nulla
        reiciendis nesciunt quos. Ab eos adipisci consequatur vitae est quisquam
      </p>

      <div className="w-1/2 h-1/2">
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
