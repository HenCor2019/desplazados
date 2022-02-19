import ComicZero from 'causes/assets/images/comic/cover.png'
import ComicOne from 'causes/assets/images/comic/layer_1.png'
import ComicTwo from 'causes/assets/images/comic/layer_2.png'
import ComicThree from 'causes/assets/images/comic/layer_3.png'
import ComicFour from 'causes/assets/images/comic/layer_4.png'
import ComicFive from 'causes/assets/images/comic/layer_5.png'
import ComicSix from 'causes/assets/images/comic/layer_6.png'
import ComicSeven from 'causes/assets/images/comic/layer_7.png'
import ComicEight from 'causes/assets/images/comic/back.png'

const comicImages = [
  {
    src: ComicZero
  },

  {
    src: ComicOne,
  },

  {
    src: ComicTwo,
  },

  {
    src: ComicThree,
  },

  {
    src: ComicFour,
  },

  {
    src: ComicFive,
  },

  {
    src: ComicSix,
  },

  {
    src: ComicSeven,
  },

  {
    src: ComicEight
  }
]

export const addComicImages = (comic = []) => comic.map((image, index) => {
  const src = comicImages[index]
  return {...image, ...src}
})
