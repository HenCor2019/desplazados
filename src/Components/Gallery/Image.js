export default function Image(props) {
  const { src, title, description, author, handleOnClick, index, hidden } =
    props

  const styles = {
    container: `bg-green-400 sm:bg-transparent rounded sm:rounded-md lightbox-container mx-auto h-60 w-60 sm:h-full sm:w-full ${
      hidden ? 'sm:hidden' : ''
    } overflow-hidden p-2 m-1 sm:m-0`,
    image:
      'rounded-md transform rotate-6 mx-auto w-full h-full object-contain transition-transform cursor-pointer'
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.image}
        src={src}
        alt="desplazados galleria gallery"
        loading="lazy"
        onClick={() =>
          handleOnClick({ title, description, author, src, index })
        }
      />
    </div>
  )
}
