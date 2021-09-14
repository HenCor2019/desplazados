import HTMLFlipBook from 'react-pageflip'
import { comicImages } from '../../constants/FooterMessages'

import { LazySection } from '../../HOC/LazySection/LazySection'

function Comic(props) {
  return (
    <div className="w-full mt-1 sm:w-3/4 h-full md:h-1/2 mx-auto p-3 md:p-12">
      <HTMLFlipBook width={400} height={600} flippingTime={500}>
        {comicImages.map((comic) => (
          <div key={comic.index} className="w-full h-full bg-gray-200">
            <img
              key={comic.index}
              src={comic.src}
              className="w-full h-full p-3 sm:p-0"
              alt=""
              loading="lazy"
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  )
}

export default LazySection(Comic)