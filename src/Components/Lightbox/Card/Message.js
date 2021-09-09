const styles = {
  container:
    'bg-white shadow-lg rounded-md p-4 mb-1 text-gray-700 hidden sm:flex flex-col justify-between items-start ml-0 sm:ml-4 transform sm:translate-x-3/4 w-1/2',
  author: 'text-sm w-full text-right font-semibold',
  title: 'text-1xl font-semibold whitespace-nowrap pb-4',
  description: 'text-md pb-4'
}

export default function CardMessage({ imageInformation }) {
  const { title, description, author } = imageInformation
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.description}>{description}</h2>
      <p className={styles.author}>{author}</p>
    </div>
  )
}
