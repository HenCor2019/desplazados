import Hoverable from "../../wrappers/Hoverable/Hoverable"

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
    <Hoverable
      className={`row-span-${rowspan} col-span-${colspan} w-full h-3/4 sm:h-full mx-auto`}
      onHoverIn={() => handleMouseEnter(setGrayscale)}
      onHoverOut={handleMouseLeave}
      onClick={handleOnClick}>
      <Image
        className={`w-full px-5 sm:px-2 sm:w-full md:w-2/3 h-full mx-auto cursor-pointer ${
          grayscale ? ' grayscale' : ''
        }`}
      />
    </Hoverable>
  )
}
