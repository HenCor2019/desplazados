export default function Information({ src, title, description }) {
  return (
    <div className="w-1/4 h-full flex flex-col justify-between lg:justify-between relative">
      <img
        src={src}
        className="w-full h-auto transform -translate-y-1/3"
        alt="clip image desplazados"
        loading="lazy"
      />

      <h1 className="lg:w-auto font-sans absolute top-0 text-center md:px-4 lg:px-7 pt-2 lg:pt-5 ml-4 lg:ml-7 mt-7 xl:w-auto 2xl:w-full md:mt-0 xl:text-xl 2xl:px-12 2xl:text-2xl">
        {title}
      </h1>

      <p className="w-full text-justify text-base lg:text-lg xl:text-base 2xl:text-xl leading-tight transform -translate-y-1/2 md:-translate-y-1/4 xl:-translate-y-1/2 pt-16 pr-2">
        {description}
      </p>
    </div>
  );
}
