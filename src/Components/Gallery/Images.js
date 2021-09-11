import Image from './Image'

export default function Images({ isActive, handleOnClick, images }) {
  const isHidden = (index) => {
    if (index === 0 || index === 1 || index === images.length - 1) return true
    return false
  }

  return (
    <div className="w-full mx-auto h-full sm:px-5 md:w-11/12 md:pt-6 md:px-4 md:h-3/4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-1 md:mt-10 lg:mt-0">
      {images.map((photo) => {
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
