import SimpleVideoPlayer from '../../VideoPlayer/SimpleVideoPlayer'
import ButtonClose from '../../../assets/images/Lightbox/cerrar_button.png'
import ClipImage from '../../../assets/images/Lightbox/Video/background_video_title.png'

import '../index.css'
import Information from './Information'
import Close from './Close'

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

          <Information
            src={ClipImage}
            title={title}
            description={description}
          />
        </div>

        <Close src={ButtonClose} onClick={onClick} />
      </div>
    </div>
  )
}
