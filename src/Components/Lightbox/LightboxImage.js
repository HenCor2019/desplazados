import CardImage from './Card/Image'
import CardMessage from './Card/Message'
import CardHeader from './Card/Header'
import ButtonClose from '../../assets/images/Lightbox/cerrar_button.png'

export default function LightboxImage({ content, handleOnClick }) {
  return (
    <div className="lightbox-image w-full h-full lg:w-11/12 xl:w-4/5 flex flex-col justify-center content-center items-center p-5 md:p-6">
      <div className="w-full h-full flex justify-between p-5 md:pb-12">
        <div className="gallery-photo w-11/12 h-full py-10 pl-8 pr-4">
          <img
            src={content.src}
            className="w-full h-2/3 md:h-3/4 lg:h-5/6 object-contain transform -rotate-6 md:py-6 md:pl-6 mt-14"
            alt={content.title + content.author}
            loading="lazy"
          />
        </div>

        <div className="gallery-content flex flex-col w-1/12 h-full relative text-gray-700">
          <img
            src={ButtonClose}
            alt="button close"
            onClick={handleOnClick}
            className="close-container w-full h-11 object-contain mt-12 mr-4 ml-10 p-2 mb-3 md:mr-0 md:mt-8 lg:mt-4 cursor-pointer xl:ml-0 xl:pr-6"
            loading="lazy"
          />
          <div className="lightbox-content-container flex flex-col md:pl-3 md:pr-6 md:py-4 w-64 md:w-80 lg:w-72 h-auto bg-gray-50 absolute md:bottom-0 md:mb-6 rounded-md shadow-md transform -translate-x-36 translate-y-20 md:-translate-x-44  md:translate-y-20 lg:-translate-x-20 lg:translate-y-4 bottom-0 p-3 xl:-translate-x-32">
            <h1 className="pb-2 font-semibold text-base lg:text-lg">
              {content.title}
            </h1>
            <p className="pb-2 font-normal text-sm">{content.description}</p>
            <p className="self-end font-medium text-sm">{content.author}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
