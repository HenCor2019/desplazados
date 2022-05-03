import PodcastImage from "./PodcastImage/PodcastImage";
import PodcastMessage from "./PodcastMessage/PodcastMessage";

import styles from './PodcastMessageWrapper.module.css'
export default function PodcastMessageWrapper({ message, src }) {
  return (
    <div className={styles.wrapper}>
      <PodcastImage src={src} />
      <PodcastMessage message={message} />
    </div>
  )
}
