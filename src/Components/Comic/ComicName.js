export default function ComicName({ name, index, onClick }) {
  return (
    <li
      className="whitespace-nowrap my-1 cursor-pointer font-acumin font-medium text-base md:text-xl 2xl:text-3xl"
      onClick={onClick}
    >
      {index}. {name}
    </li>
  )
}
