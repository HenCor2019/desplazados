export default function FooterMessage({ message }) {
  return (
    <div
      className={
        'px-6 py-7 font-sans bg-cause sm:p-1 sm:bg-transparent flex content-center justify-center sm:justify-end items-center w-full '
      }
    >
      <p className="w-full md:px-6 md:pt-5 text-gray-300 sm:text-gray-800 lg:text-base sm:text-sm font-medium text-justify overflow-hidden py-1">
        {message}
      </p>
    </div>
  )
}
