import SimpleVideoPlayer from '../../VideoPlayer/SimpleVideoPlayer'
import ButtonClose from '../../../assets/images/Lightbox/cerrar_button.png'

import '../index.css'

export default function VideoLightbox({ video, onClick }) {
  const {
    embedId = '_mMyPJSx8RU',
    title = 'Unknown case',
    description = 'Unknown description'
  } = video

  return (
    <div className="lightbox font-sans text-gray-700 h-full flex justify-center items-center bg-cover bg-no-repeat">
      <div className="lightbox-video bg-gray-200 w-4/5 h-3/5 flex">
        <div className="w-11/12 h-full flex justify-between">
          <div className="w-3/4 h-full py-7 px-5">
            <SimpleVideoPlayer embedId={embedId} title={title} />
          </div>

          <div className=" w-1/4 h-full flex flex-col justify-between relative pb-2">
            <h1 className="text-center md:px-10 md:leading-normal text-sm md:text-lg bg-red-300 h-2/6 font-normal text-gray-800 w-full md:text-left transform -translate-y-1/3 flex justify-center items-center">
              {title}
            </h1>
            <p className="w-full h-4/6 text-justify text-xs md:text-sm xl:text-base leading-tight">
              {description}
            </p>
          </div>
        </div>

        <div className="w-1/12 h-full flex justify-end items-start content-center">
          <img
            src={ButtonClose}
            className="cursor-pointer bg-contain pl-6 pb-6 pt-1 pr-1 md:w-3/4 xl:w-3/5"
            alt="button close desplazados"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  )
}
