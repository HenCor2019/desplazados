import ComicZero_es from 'causes/assets/images/comic/ES/layer_0.png';
import ComicOne_es from 'causes/assets/images/comic/ES/layer_1.png';
import ComicTwo_es from 'causes/assets/images/comic/ES/layer_2.png';
import ComicThree_es from 'causes/assets/images/comic/ES/layer_3.png';
import ComicFour_es from 'causes/assets/images/comic/ES/layer_4.png';
import ComicFive_es from 'causes/assets/images/comic/ES/layer_5.png';
import ComicSix_es from 'causes/assets/images/comic/ES/layer_6.png';
import ComicSeven_es from 'causes/assets/images/comic/ES/layer_7.png';
import ComicBack from 'causes/assets/images/comic/back.png';

import ComicZero_en from 'causes/assets/images/comic/EN/layer_0.png';
import ComicOne_en from 'causes/assets/images/comic/EN/layer_1.png';
import ComicTwo_en from 'causes/assets/images/comic/EN/layer_2.png';
import ComicThree_en from 'causes/assets/images/comic/EN/layer_3.png';
import ComicFour_en from 'causes/assets/images/comic/EN/layer_4.png';
import ComicFive_en from 'causes/assets/images/comic/EN/layer_5.png';
import ComicSix_en from 'causes/assets/images/comic/EN/layer_6.png';
import ComicSeven_en from 'causes/assets/images/comic/EN/layer_7.png';

const comicImages = [
  {
    en: ComicZero_en,
    es: ComicZero_es,
    default: ComicZero_en,
  },

  {
    en: ComicOne_en,
    es: ComicOne_es,
    default: ComicOne_en,
  },

  {
    en: ComicTwo_en,
    es: ComicTwo_es,
    default: ComicTwo_en,
  },

  {
    en: ComicThree_en,
    es: ComicThree_es,
    default: ComicThree_en,
  },

  {
    en: ComicFour_en,
    es: ComicFour_es,
    default: ComicFour_en,
  },

  {
    en: ComicFive_en,
    es: ComicFive_es,
    default: ComicFive_en,
  },

  {
    en: ComicSix_en,
    es: ComicSix_es,
    default: ComicSix_en,
  },

  {
    en: ComicSeven_en,
    es: ComicSeven_es,
    default: ComicSeven_en,
  },

  {
    default: ComicBack,
  },
];

export const addComicImages = (comic = [], lan = 'es') => comic.map((image, index) => {
  const src = comicImages[index][lan] ?? comicImages[index].default;
  console.log({ image, src, lan });
  return { ...image, src };
});
