import HTMLFlipBook from 'react-pageflip'
import { comicImages } from '../../constants/FooterMessages'

export default function Comic(props) {
  return (
    <div className="w-full mt-1 sm:w-3/4 h-full mx-auto p-3 md:mt-14 md:p-8">
      <HTMLFlipBook width={300} height={500}>
        {comicImages.map((comic) => (
          <div key={comic.index} className="w-full h-full bg-gray-200">
            <img
              key={comic.index}
              src={comic.src}
              className="w-full h-full p-3 sm:p-0"
              loading="lazy"
              alt=""
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  )
}
