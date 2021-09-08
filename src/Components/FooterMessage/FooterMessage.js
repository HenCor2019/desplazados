const styles = {
  textContainer:
    'px-3 sm:p-1 bg-green-700 sm:bg-transparent flex content-center justify-center sm:justify-end items-center w-full md:h-56 sm:col-span-2',

  messageDescription:
    'w-full sm:w-1/2 sm:h-48 md:pl-2 md:pt-2 text-gray-300 sm:text-gray-800 sm:text-base text-sm font-medium text-justify overflow-hidden'
}

export default function FooterMessage({ message }) {
  return (
    <div className={styles.textContainer}>
      <p className={styles.messageDescription}>{message}</p>
    </div>
  )
}
