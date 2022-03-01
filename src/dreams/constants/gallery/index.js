import ThumbnailOne from '../../assets/images/gallery/thumbnails/1.png'
import ThumbnailTwo from '../../assets/images/gallery/thumbnails/2.png'
import ThumbnailThree from '../../assets/images/gallery/thumbnails/3.png'
import ThumbnailFour from '../../assets/images/gallery/thumbnails/4.png'
import ThumbnailFive from '../../assets/images/gallery/thumbnails/5.png'
import ThumbnailSix from '../../assets/images/gallery/thumbnails/6.png'
import ThumbnailSeven from '../../assets/images/gallery/thumbnails/7.png'
import ThumbnailEight from '../../assets/images/gallery/thumbnails/8.png'
import ThumbnailNine from '../../assets/images/gallery/thumbnails/9.png'
import ThumbnailTen from '../../assets/images/gallery/thumbnails/10.png'

import ImageOne from '../../assets/images/gallery/grid/1.png'
import ImageTwo from '../../assets/images/gallery/grid/2.png'
import ImageThree from '../../assets/images/gallery/grid/3.png'
import ImageFour from '../../assets/images/gallery/grid/4.png'
import ImageFive from '../../assets/images/gallery/grid/5.png'
import ImageSix from '../../assets/images/gallery/grid/6.png'
import ImageSeven from '../../assets/images/gallery/grid/7.png'
import ImageEight from '../../assets/images/gallery/grid/8.png'
import ImageNine from '../../assets/images/gallery/grid/9.png'
import ImageTen from '../../assets/images/gallery/grid/10.png'

const dreamGallery = [
  {
    src: ImageOne,
    thumbnail: ThumbnailOne,
  },
  {
    src: ImageTwo,
    thumbnail: ThumbnailEight,
  },

  {
    src: ImageThree,
    thumbnail: ThumbnailThree,
  },
  {
    src: ImageFour,
    thumbnail: ThumbnailFour,
  },

  {
    src: ImageFive,
    thumbnail: ThumbnailFive,
  },
  {
    src: ImageSix,
    thumbnail: ThumbnailSix,
  },
  {
    src: ImageSeven,
    thumbnail: ThumbnailSeven,
  },
  {
    src: ImageEight,
    thumbnail: ThumbnailTwo,
  },
  {
    src: ImageNine,
    thumbnail: ThumbnailNine,
  },
  {
    src: ImageTen,
    thumbnail: ThumbnailTen,
  },
]

export const setImagesThumbs = (photos = []) => photos.map((photo, index) => {
  const image = dreamGallery[index]
  return {...photo, ...image}
})