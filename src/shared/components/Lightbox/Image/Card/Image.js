export default function CardImage({ src, alt }) {
  return (
    <div className="h-3/4 lg:h-90/100 p-1 flex justify-start content-start items-center md:pb-3 lg:w-5/6 lg:pr-10">
      <img
        className="w-full h-full transform -rotate-3 cursor-pointer object-contain p-2"
        src={src}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
}
