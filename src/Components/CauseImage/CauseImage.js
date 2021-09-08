const styles = {
  imgContainer:
    'w-full h-3/4 sm:h-full sm:h-52 md:h-56 lg:h-72 xl:h-80 mx-auto',

  imgCause:
    'w-full px-5 sm:px-2 sm:w-full md:w-full xl:w-5/6 h-full mx-auto cursor-pointer'
}

export default function CauseImage(props) {
  const { Image, handleMouseEnter, handleMouseLeave, setGrayscale, grayscale } =
    props

  return (
    <div className={styles.imgContainer}>
      <Image
        className={styles.imgCause + (grayscale ? ' grayscale' : '')}
        onMouseEnter={() => handleMouseEnter(setGrayscale)}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  )
}
