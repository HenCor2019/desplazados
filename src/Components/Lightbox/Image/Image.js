import CardImage from './Card/Image'
import CardMessage from './Card/Message'
import CardHeader from './Card/Header'

export default function Image({ content, handleOnClick }) {
  return (
    <div className="lightbox-image w-full lg:w-11/12 xl:w-3/4 h-5/6 md:h-full self-center flex flex-col justify-center content-center items-center p-3">
      <CardHeader onClose={handleOnClick} />

      <div className="w-11/12 h-5/6 flex flex-col lg:flex-row relative md:p-2 xl:py-0 lg:pl-14 xl:pl-20 xl:ml-11">
        <CardImage
          src={content.src}
          alt={`image ${content.author} ${content.title}`}
          index={content.index}
        />

        <CardMessage content={content} />
      </div>
    </div>
  )
}
