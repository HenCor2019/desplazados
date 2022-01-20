export default function FooterMessage({ message }) {
  return (
    <div
      className={
        'p-4 font-acumin mt-6 sm:mt-0 font-sans bg-cause sm:p-1 sm:bg-transparent flex content-center justify-center sm:justify-end items-center w-full'
      }
    >
      <p className="w-full md:px-6 md:pt-5 text-white sm:text-black text-sm sm:text-base lg:text-base xl:text-base 2xl:text-lg font-medium text-justify overflow-hidden sm:py-1">
        {message}
      </p>
    </div>
  )
}
