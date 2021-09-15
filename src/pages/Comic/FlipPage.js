import FlipPage from 'react-flip-page'
import { comicImages } from '../../constants/FooterMessages'

import { LazySection } from '../../HOC/LazySection/LazySection'


const Comic = () => {
  return (
    <div className="w-full mt-8 sm:h-full md:h-5/6 flex justify-center items-center content-center">
      <FlipPage
        orientation="horizontal"
        animationDuration={600}
        width={470}
        height={510}
      >
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
      </FlipPage>
    </div>
  )
}

export default LazySection(Comic)