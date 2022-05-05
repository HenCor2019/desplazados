import { useConfigContext } from "contexts/ConfigContext";
import i18next from "i18next";

import PodcastImage from "./PodcastImage/PodcastImage";
import PodcastMessage from "./PodcastMessage/PodcastMessage";

import styles from './PodcastMessageWrapper.module.css'
export default function PodcastMessageWrapper({ message, src }) {
  const { isTablet, isMobile } = useConfigContext();
  const isSmall = isTablet || isMobile
  const wrapperStyles = i18next.language === 'en' || isSmall
    ? {} 
    : {
    width: '100%'
  }

  return (
    <div className={styles.wrapper} style={wrapperStyles}>
      <PodcastImage src={src} />
      <PodcastMessage message={message} />
    </div>
  )
}
