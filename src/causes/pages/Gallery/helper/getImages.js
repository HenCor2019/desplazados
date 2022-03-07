import Topic_en from 'causes/assets/images/gallery/topics/topic-en.png';
import Topic_es from 'causes/assets/images/gallery/topics/topic-es.png';

const images = {
  en: {
    TopicImage: Topic_en,
  },
  es: {
    TopicImage: Topic_es,
  },
  default: {
    TopicImage: Topic_es,
  },
};

export const getImages = (lan = 'es') => images[lan] ?? images.default;
