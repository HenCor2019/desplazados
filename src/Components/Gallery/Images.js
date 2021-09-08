import Image from './Image'
import { galleryPhotos } from '../../constants/FooterMessages/index'

export default function Images({ isActive, handleOnClick }) {
  const filterGallery = (photo, index) => {
    if (index === 0 || index === 1 || index === 9) return false
    return true
  }

  const reducerGallery = galleryPhotos.filter(filterGallery)

  return (
    <div className=" w-3/4 grid grid-cols-4 gap-1">
      {reducerGallery.map((photo) => (
        <Image
          key={photo.src}
          src={photo.src}
          title={photo.title}
          description={photo.description}
          author={photo.author}
          index={photo.index}
          isActive={isActive}
          handleOnClick={handleOnClick}
        />
      ))}
    </div>
  )
}
