import { ReactComponent as Gallery_es } from 'causes/assets/images/svgs/gallery.svg'
import { ReactComponent as Story_es } from 'causes/assets/images/svgs/story.svg'

import Gallery_en from 'causes/assets/images/home/gallery.png'
import Story_en from 'causes/assets/images/home/comic.png'

const images = {
  en: {
    GalleryImage: Gallery_en,
    StoryImage: Story_en
  },

  es: {
    GalleryImage: Gallery_es,
    StoryImage: Story_es
  },

  default: {
    GalleryImage: Gallery_es,
    StoryImage: Story_es
  }

}

export const getImages = (lan = 'es') => images[lan] ?? images.default
