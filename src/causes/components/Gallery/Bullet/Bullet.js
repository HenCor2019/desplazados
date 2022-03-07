export default function Bullet({ src }) {
  return (
    <div className="md:w-11/12 lg:w-4/5 sm:p-5 md:p-0 m-auto md:pr-4 xl:pb-11 mt-9">
      <img
        src={src}
        className="w-full sm:w-3/4 md:w-3/5 lg:w-1/2 mr-auto mb-4 sm:mb-0 sm:mx-0px-5 pl-0"
        alt="lo que dejamos atras"
        loading="lazy"
      />
    </div>
  )
}
