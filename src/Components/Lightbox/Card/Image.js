const styles = {
  container:
    'animate-appearance w-11/12 h-3/4 flex justify-start content-start items-center overflow-hidden sm:p-3 lg:p-1',
  image: 'w-full h-full cursor-pointer object-contain'
}

export default function CardImage({ src, alt }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={src} alt={alt} loading="lazy" />
    </div>
  )
}
