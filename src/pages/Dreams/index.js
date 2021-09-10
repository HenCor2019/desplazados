import Podcast from '../../assets/images/Dreams/podcast-dreams.png';
import Gallery from '../../assets/images/Dreams/gallery-dreams.png';
import React, {useState} from 'react';

const styles = {};

export default function Dreams() {
  const [isPodcastHover, setIsPodcastHover] = useState(false);
  const [isGalleryHover, setIsGalleryHover] = useState(false);

  let stylePodcast, styleGallery;
  const grayscale = {filter: 'grayscale(1)'};

  return (
    <main>
      <h1>Hello</h1>
    </main>
  );
}
