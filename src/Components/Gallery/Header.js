import Image from './Image'
import { galleryPhotos } from '../../constants/FooterMessages/index'

export default function Header({ isActive, handleOnClick }) {
  const [firstPhoto, secondPhoto] = galleryPhotos

  return (
    <div className="mt-5 w-full xl:w-11/12 hidden sm:px-5 md:px-4 sm:grid sm:grid-cols-3 md:grid-cols-4 p-3 mb-2 gap-2">
      <div className="w-full col-span-2 md:h-32 lg:h-auto p-1 sm:flex justify-center items-center content-center bg-gray-100 md:overflow-y-scroll lg:overflow-auto rounded-md">
        <p className="text-gray-700 font-normal md:h-5/6 lg:h-full px-6 sm:text-base md:text-xs lg:text-sm xl:text-base lg:font-normal sm:py-7 md:py-3 lg:py-1">
          Niñas y niños de familias que han tenido que desplarse por la
          violencia que vive El Salvador cuentan por medio de colores,
          plastilina , collage y origami lo que han tenido que dejar atras lugo
          de salir de casa. Desde sus programas de televisión, hasta sus amigos
          más cercanos
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
