export default function Slide(props) {
  const { rotate = '', alt, handleOnClick, src, imageInformation } = props

  return (
    <div
      className={`cursor-pointer p-1 transform ${rotate} w-20 flex h-full justify-center items-center content-center`}
    >
      <img
        src={src}
        alt={alt}
        onClick={() => handleOnClick(imageInformation)}
      />
    </div>
  )
}
