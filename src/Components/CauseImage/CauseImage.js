const styles = {
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
    handleOnClick,
    colspan = 1,
    rowspan = 1
  } = props

  return (
    <div
      className={`row-span-${rowspan} col-span-${colspan} w-full h-3/4 sm:h-full mx-auto`}
    >
      <Image
        className={styles.image + (grayscale ? ' grayscale' : '')}
        onMouseEnter={() => handleMouseEnter(setGrayscale)}
        onMouseLeave={handleMouseLeave}
        onClick={handleOnClick}
      />
    </div>
  )
}
