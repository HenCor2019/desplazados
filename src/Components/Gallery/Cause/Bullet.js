export default function Bullet({ src }) {
  return (
    <div className="md:w-11/12 sm:p-5 md:p-0 lg:w-3/4 m-auto md:pr-4 xl:pb-11 mt-9">
      <img
        src={src}
        className="w-full mx-auto mb-4 sm:mb-0 sm:mx-0 sm:w-3/4 md:w-3/5 lg:w-1/2 px-5 pl-0"
        alt="lo que dejamos atras"
        loading="lazy"
      />
    </div>
  )
}
