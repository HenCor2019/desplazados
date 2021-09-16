export default function Message(props) {
  const { text, cols, rows, order, message } = props

  return (
    <div
      className={`bg-gray-50 font-sans text-gray-700  ${text} ${cols.md} ${rows.md}  ${order.base} ${order.md} ${order.sm} font-medium sm:px-5 sm:py-5 flex justify-center items-center content-center mx-4 sm:mx-0 text-justify`}
    >
      <p>{message}</p>
    </div>
  )
}
