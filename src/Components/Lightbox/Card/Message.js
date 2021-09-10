const styles = {
  container:
    'bg-white shadow-lg rounded-md p-4 mb-1 text-gray-700 hidden sm:flex flex-col justify-between items-start ml-0 sm:ml-4 transform sm:translate-x-3/4 w-3/5 sm:w-1/2 lg:w-1/2',
  author: 'text-sm w-full text-right font-semibold',
  title: 'text-base font-semibold whitespace-nowrap pb-4',
  description: 'text-xs lg:text-sm pb-4'
}

export default function CardMessage({ content }) {
  console.log({ content })
  const { title, description, author } = content
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.description}>{description}</h2>
      <p className={styles.author}>{author}</p>
    </div>
  )
}
