export function GalleryImage({
  content, cols, rows, onClick, isMobile,
}) {
  const {
    src, title, description, author, thumbnail,
  } = content;
  const source = isMobile ? src : thumbnail;

  const { sm = 'sm:col-start-1 sm:col-end-3' } = cols;

  console.log({ source });
  return (
    <div className={`${sm} ${cols.md} ${rows.md} order-5`}>
      <div className="w-full sm:grid sm:grid-cols-2 md:block h-full text-gray-700 overflow-hidden">
        <img
          src={source}
          alt="gallery"
          onClick={() => onClick(content)}
          className="px-4 sm:px-0 m-auto sm:m-0 w-full sm:w-full h-auto sm:h-full object-contain sm:object-cover transform cursor-pointer transition-transform md:scale-110 md:hover:scale-100"
          loading="lazy"
        />

        <div className="w-auto font-sans md:hidden px-4 py-3">
          <h1 className="text-md text-center font-medium pb-2 pt-6">{title}</h1>
          <p className="text-sm pb-2 text-justify">{description}</p>
          <p className="text-sm text-right font-medium pt-6">{author}</p>
        </div>
      </div>
    </div>
  );
}
