export default function Slide(props) {
  const { rotate = '', alt, handleOnClick, src, content } = props

  return (
    <div
      className={`hidden sm:flex cursor-pointer p-1 transform ${rotate} w-20 flex h-full justify-center items-center content-center`}
    >
      <img
        src={src}
        alt={alt}
        onClick={() => handleOnClick(content)}
        loading="lazy"
      />
    </div>
  )
}
