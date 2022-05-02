import PodcastImage from "./PodcastImage/PodcastImage";
import PodcastMessage from "./PodcastMessage/PodcastMessage";

import styles from './PodcastMessageWrapper.module.css'
export default function PodcastMessageWrapper() {
  return (
    <div className={styles.wrapper}>
      <PodcastImage />
      <PodcastMessage />
    </div>
  )
}
