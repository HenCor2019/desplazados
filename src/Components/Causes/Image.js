import Hoverable from '../../wrappers/Hoverable/Hoverable'

export default function CauseImage(props) {
  const {
    Image,
    handleMouseEnter,
    handleMouseLeave,
    setGrayscale,
    grayscale,
    onClick,
    route,
    colspan = 'col-span-1',
    rowspan = 'row-span-1'
  } = props

  return (
    <Hoverable
      className={`${rowspan} ${colspan} w-full h-3/4 sm:h-full mx-auto`}
      onHoverIn={() => handleMouseEnter(setGrayscale)}
      onHoverOut={handleMouseLeave}
      onClick={() => onClick(route)}
    >
      <Image
        className={`w-full px-5 sm:px-2 sm:w-full md:w-2/3 h-full mx-auto cursor-pointer animate-flip ${
          grayscale ? ' grayscale' : ''
        }`}
      />
    </Hoverable>
  )
}
