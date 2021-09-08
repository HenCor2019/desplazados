export default function Image(props) {
  const {
    src,
    title,
    description,
    author,
    colspan = 1,
    rowspan = 1,
    handleOnClick,
    index
  } = props

  return (
    <div
      className={`h-full w-full col-span-${colspan} row-span-${rowspan} transition-transform cursor-pointer transform scale-100 hover:scale-105`}
    >
      <img
        className="transform rotate-6 w-full h-full object-contain"
        src={src}
        alt="desplazados galleria gallery"
        loading="lazy"
        onClick={() =>
          handleOnClick({ title, description, author, src, index })
        }
      />
    </div>
  )
}
