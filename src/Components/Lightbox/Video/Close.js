export default function Close({ src, onClick }) {
  return (
    <div className="w-1/12 h-full flex justify-end items-start content-center">
      <img
        src={src}
        className="cursor-pointer bg-contain pl-4 lg:pl-6 pb-6 pt-1 pr-1 lg:mr-3 md:w-3/4 xl:w-3/5"
        alt="button close desplazados"
        onClick={onClick}
        loading="lazy"
      />
    </div>
  )
}
