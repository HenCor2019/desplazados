import ThumbnailOne from 'causes/assets/images/gallery/thumbnails/1causas.png'
import ThumbnailTwo from 'causes/assets/images/gallery/thumbnails/2causas.png'
import ThumbnailThree from 'causes/assets/images/gallery/thumbnails/3causas.png'
import ThumbnailFour from 'causes/assets/images/gallery/thumbnails/4causas.png'
import ThumbnailFive from 'causes/assets/images/gallery/thumbnails/5causas.png'
import ThumbnailSix from 'causes/assets/images/gallery/thumbnails/6causas.png'
import ThumbnailSeven from 'causes/assets/images/gallery/thumbnails/7causas.png'
import ThumbnailEight from 'causes/assets/images/gallery/thumbnails/8causas.png'
import ThumbnailNine from 'causes/assets/images/gallery/thumbnails/9causas.png'
import ThumbnailTen from 'causes/assets/images/gallery/thumbnails/10causas.png'
 
import ImageOne from 'causes/assets/images/gallery/images/1texto.png'
import ImageTwo from 'causes/assets/images/gallery/images/2texto.png'
import ImageThree from 'causes/assets/images/gallery/images/3texto.png'
import ImageFour from 'causes/assets/images/gallery/images/4texto.png'
import ImageFive from 'causes/assets/images/gallery/images/5texto.png'
import ImageSix from 'causes/assets/images/gallery/images/6texto.png'
import ImageSeven from 'causes/assets/images/gallery/images/7texto.png'
import ImageEight from 'causes/assets/images/gallery/images/8texto.png'
import ImageNine from 'causes/assets/images/gallery/images/9texto.png'
import ImageTen from 'causes/assets/images/gallery/images/10texto.png'

const images = [
  {
    src: ImageOne,
    thumbnail: ThumbnailOne
  },
  {
    src: ImageTwo,
    thumbnail: ThumbnailTwo
  },
  {
    src: ImageThree,
    thumbnail: ThumbnailThree
  },
  {
    src: ImageFour,
    thumbnail: ThumbnailFour
  },
  {
    src: ImageSix,
    thumbnail: ThumbnailSix
  },
  {
    src: ImageFive,
    thumbnail: ThumbnailFive
  },
  {
    src: ImageSeven,
    thumbnail: ThumbnailSeven
  },
  {
    src: ImageEight,
    thumbnail: ThumbnailEight
  },
  {
    src: ImageNine,
    thumbnail: ThumbnailNine
  },
  {
    src: ImageTen,
    thumbnail: ThumbnailTen
  },
]

export const addImagesAndThumbnails = (photos = []) => photos.map((photo, index) => {
  const image = images[index];
  return {...photo, ...image}
})
