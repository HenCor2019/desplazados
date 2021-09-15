import SimpleVideoPlayer from '../../VideoPlayer/SimpleVideoPlayer'
import ButtonClose from '../../../assets/images/Lightbox/cerrar_button.png'
import ClipImage from '../../../assets/images/Lightbox/Video/background_video_title.png'

import '../index.css'

export default function VideoLightbox({ video, onClick }) {
  const {
    embedId = '_mMyPJSx8RU',
    title = 'Unknown case',
    description = 'Unknown description'
  } = video

  return (
    <div className="lightbox text-gray-700 h-full flex justify-center items-center bg-cover bg-no-repeat">
      <div className=" lightbox-video-container w-4/5 h-3/4 flex p-3">
        <div className="w-11/12 h-full flex justify-between">
          <div className="w-3/4 h-full py-7 px-5">
            <SimpleVideoPlayer embedId={embedId} title={title} />
          </div>

          <div className="w-1/4 h-full flex flex-col justify-around lg:justify-between relative">
            <img
              src={ClipImage}
              className="w-full h-auto transform -translate-y-1/3"
              alt="clip image desplazados"
              loading="lazy"
            />
            <h1 className="font-sans absolute top-0 text-center md:px-4 lg:px-7 pt-2 lg:pt-5 ml-4 lg:ml-7 mt-7 md:mt-0">
              {title}
            </h1>
            <p className="w-full text-justify text-sm lg:text-base leading-tight transform -translate-y-1/2 md:-translate-y-1/4 xl:-translate-y-1/2 pt-10 pr-2">
              {description}
            </p>
          </div>
        </div>

        <div className="w-1/12 h-full flex justify-end items-start content-center">
          <img
            src={ButtonClose}
            className="cursor-pointer bg-contain pl-4 lg:pl-6 pb-6 pt-1 pr-1 lg:mr-3 md:w-3/4 xl:w-3/5"
            alt="button close desplazados"
            onClick={onClick}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
