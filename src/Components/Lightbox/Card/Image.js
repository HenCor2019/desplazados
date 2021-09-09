const styles = {
  container:
    'ml-12 sm:ml-0 w-11/12 h-3/4 flex justify-start content-start items-center overflow-hidden p-3',
  image: 'w-full h-full cursor-pointer object-contain'
}

export default function CardImage({ src, alt }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={src} alt={alt} loading="lazy" />
    </div>
  )
}
