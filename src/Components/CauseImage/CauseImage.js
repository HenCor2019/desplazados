const styles = {
  container: 'w-full h-3/4 sm:h-full sm:h-52 md:h-56 lg:h-72 xl:h-80 mx-auto',

  image:
    'w-full px-5 sm:px-2 sm:w-full md:w-full xl:w-5/6 h-full mx-auto cursor-pointer animate-flip'
}

export default function CauseImage(props) {
  const {
    Image,
    handleMouseEnter,
    handleMouseLeave,
    setGrayscale,
    grayscale,
    handleOnClick
  } = props

  return (
    <div className={styles.container}>
      <Image
        className={styles.image + (grayscale ? ' grayscale' : '')}
        onMouseEnter={() => handleMouseEnter(setGrayscale)}
        onMouseLeave={handleMouseLeave}
        onClick={handleOnClick}
      />
    </div>
  )
}
