import CardImage from './Card/Image'
import CardMessage from './Card/Message'
import CardHeader from './Card/Header'

const styles = {
  container:
    'lightbox-image w-full h-full z-40 sm:w-3/4 lg:w-3/5 flex flex-col justify-center content-center items-center p-3'
}

export default function LightboxImage({ content, handleOnClick }) {
  return (
    <div className={styles.container}>
      <CardHeader onClose={handleOnClick} />

      <CardImage
        src={content.src}
        alt={`image ${content.author} ${content.title}`}
      />
      <CardMessage content={content} />
    </div>
  )
}
