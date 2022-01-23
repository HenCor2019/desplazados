import FlipPage from 'react-flip-page'

export default function CompleteComic(props) {
  const { width, height, refFlip, images } = props

  return (
    <div className="w-auto mx-auto lg:mx-0 h-auto self-start mb-3 sm:mb-0 flex flex-col justify-center items-center content-center">
      <FlipPage
        orientation="horizontal"
        animationDuration={1000}
        width={width}
        height={height}
        ref={refFlip}
        className="p-2"
      >
        {images.map((comic) => (
          <div
            key={comic.index}
            className="w-full h-full bg-transparent bg-background "
          >
            <img
              key={comic.index}
              src={comic.src}
              className="w-full h-full p-3 sm:py-1 sm:px-0"
              loading="lazy"
              alt={`imagen ${comic.index}`}
            />
          </div>
        ))}
      </FlipPage>
    </div>
  )
}
