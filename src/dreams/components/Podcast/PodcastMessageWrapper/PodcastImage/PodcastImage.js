import i18next from 'i18next';
import { useConfigContext } from 'contexts/ConfigContext';
import styles from './PodcastImage.module.css'

export default function PodcastImage({ src }) {
  const { isTablet, isMobile } = useConfigContext();
  const isSmall = isTablet || isMobile

  const imageStyles = i18next.language === 'en' || isSmall 
    ? {} 
    : { width: 'auto' }

  return (
    <section className={styles.imgWrapper} style={imageStyles}>
      <img src={src}/>
    </section>
  )
}
