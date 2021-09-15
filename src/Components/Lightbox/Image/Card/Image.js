const styles = {
  image: 'w-full h-full transform -rotate-6 cursor-pointer object-contain p-2'
}

export default function CardImage({ src, alt }) {
  return (
    <div className="h-3/4 p-1 flex justify-start content-start items-center md:pb-3 lg:w-5/6">
      <img className={styles.image} src={src} alt={alt} loading="lazy" />
    </div>
  )
}
