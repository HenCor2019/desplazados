const styles = {
  textContainer:
    'px-6 sm:p-1 bg-green-700 sm:bg-transparent flex content-center justify-center sm:justify-end items-center w-full ',

  messageDescription:
    'w-full md:px-6 md:pt-5 text-gray-300 sm:text-gray-800 text-base text-sm font-medium text-justify overflow-hidden py-1'
}

export default function FooterMessage({ message }) {
  return (
    <div className={styles.textContainer}>
      <p className={styles.messageDescription}>{message}</p>
    </div>
  )
}
