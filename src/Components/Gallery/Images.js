import Image from './Image'
import { galleryPhotos } from '../../constants/FooterMessages/index'

export default function Images({ isActive, handleOnClick }) {
  const filterGallery = (photo, index) => {
    if (index === 0 || index === 1 || index === 9) return false
    return true
  }

  const reducerGallery = galleryPhotos.filter(filterGallery)

  const isHidden = (index) => {
    if (index === 0 || index === 1 || index === galleryPhotos.length - 1)
      return true
    return false
  }

  return (
    <div className="w-full mx-auto h-full sm:px-5 md:px-0 md:w-3/4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-1 md:mt-10">
      {galleryPhotos.map((photo) => {
        const hidden = isHidden(photo.index)
        return (
          <Image
            hidden={hidden}
            key={photo.src}
            src={photo.src}
            title={photo.title}
            description={photo.description}
            author={photo.author}
            index={photo.index}
            isActive={isActive}
            handleOnClick={handleOnClick}
          />
        )
      })}
    </div>
  )
}
