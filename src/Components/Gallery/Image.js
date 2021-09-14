export default function Image({ content, cols, rows, onClick, isMobile }) {
  const { src, title, description, author, thumbnail } = content
  const source = isMobile ? src : thumbnail

  const { sm = [1, 3] } = cols
  return (
    <div
      className={`sm:col-start-${sm[0]} sm:col-end-${sm[1]} md:col-start-${cols.md[0]} md:col-end-${cols.md[1]} md:row-start-${rows.md[0]} md:row-end-${rows.md[1]} order-5`}
    >
      <div className="w-full sm:grid sm:grid-cols-2 md:block h-full text-gray-700 overflow-hidden">
        <img
          src={source}
          alt={`gallery image desplazados ${title} ${author}`}
          onClick={() => onClick(content)}
          className="px-4 sm:px-0 m-auto sm:m-0 w-full sm:w-full h-auto sm:h-full object-contain sm:object-cover transform cursor-pointer transition-transform md:scale-110 md:hover:scale-100"
        />
        <div className="w-auto font-sans md:hidden px-4 py-3">
          <h1 className="text-md text-center font-medium pb-2 pt-6">{title}</h1>
          <p className="text-sm pb-2 text-justify">{description}</p>
          <p className="text-sm text-right font-medium pt-6">{author}</p>
        </div>
      </div>
    </div>
  )
}
