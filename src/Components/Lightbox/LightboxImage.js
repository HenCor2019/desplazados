export default function LightboxImage({ imageInformation, handleOnClick }) {
  return (
    <div className="bg-red-400 w-full sm:w-4/6 h-full flex justify-center content-center overflow-visible p-2">
      <div className="ml-12 sm:ml-0 w-full h-full flex justify-center content-center items-center pr-2">
        <img
          className="w-full h-3/4 sm:w-full sm:h-5/6 object-contain cursor-pointer"
          src={imageInformation.src}
          alt="image active"
        />
      </div>

      <div className="w-1/6 h-full flex flex-col justify-between items-end content-end pl-0 sm:pl-5 relative">
        <div
          className="bg-yellow-400 w-12 h-12 self-end cursor-pointer"
          onClick={() => handleOnClick(imageInformation)}
        ></div>
        <div className="bg-gray-200 shadow-lg text-gray-700 hidden sm:block ml-0 sm:ml-4 w-36 h-36 absolute sm:w-36 transform sm:translate-x-3/4 md:w-52 md:h-44 md:translate-x-1/2 lg:w-60 lg:h-48 lg:translate-x-1/4 xl:translate-x-1/3 right-0 bottom-0 p-2 flex flex-col justify-between items-center content-center">
          <h1 className="text-1xl font-semibold py-2 whitespace-nowrap">
            {imageInformation.title}
          </h1>
          <h2 className="text-md">{imageInformation.description}</h2>
          <p className="text-sm pt-3 text-right">{imageInformation.author}</p>
        </div>
      </div>
    </div>
  )
}
