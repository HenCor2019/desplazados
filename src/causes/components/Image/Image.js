import Hoverable from "shared/components/Hoverable/Hoverable";

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
    rowspan = 'row-span-1',
    language = 'en'
  } = props

  return (
    <Hoverable
      className={`${rowspan} ${colspan} w-full h-3/4 sm:h-full mx-auto`}
      onHoverIn={() => handleMouseEnter(setGrayscale)}
      onHoverOut={handleMouseLeave}
      onClick={() => onClick(route)}
    >
      {
        language === 'en' 
          ? <img src={Image} alt ='causes images home' className='w-full h-3/4 px-5 sm:px-2 sm:w-full md:w-2/3 mx-auto cursor-pointer'/> 
          : <Image className='w-full px-5 sm:px-2 sm:w-full md:w-2/3 h-full mx-auto cursor-pointer'/>
      }
    </Hoverable>
  )
}
