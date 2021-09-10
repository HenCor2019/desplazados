import Image from './Image'

export default function Aside({ isActive, handleOnClick, image }) {
  return (
    <div className="hidden sm:px-5 h-1/2 w-full lg:w-2/5 sm:flex lg:flex-col justify-center lg:justify-start items-center lg:items-start p-4 lg:py-0 rounded-md">
      <p className="sm:w-2/3 md:w-full h-full sm:mr-2 w-full sm:p-2 md:p-1 pt-4 pb-3 text-sm lg:font-medium text-gray-700 font-medium bg-gray-100 lg:px-3">
        La imaginación, la creatividad, el aprendizaje y las emociones fueron
        las principales herramientas para elaborar cada producto
      </p>

      <div className="w-1/2 lg:w-full lg:py-8 ">
        <Image
          isActive={isActive}
          handleOnClick={handleOnClick}
          src={image.src}
          title={image.title}
          description={image.description}
          author={image.author}
          index={image.index}
        />
      </div>
    </div>
  )
}
