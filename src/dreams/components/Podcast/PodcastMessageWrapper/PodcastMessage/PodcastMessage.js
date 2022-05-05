import { useConfigContext } from 'contexts/ConfigContext';
import i18next from 'i18next'
import styles from './PodcastMessage.module.css'

export default function PodcastMessage({ message }) {
  const { isTablet, isMobile } = useConfigContext();
  const isSmall = isMobile || isTablet
  const messageStyles = i18next.language === 'en' || isSmall ? {} : {
    padding: '0'
  }

  return (
    <section className={styles.wrapper} style={messageStyles}>
      <p className={styles.message}>
        { message }
      </p>
    </section>
  )
}
