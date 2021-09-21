import { BsCaretRightFill } from 'react-icons/bs'

export default function Button({ onClick, height, margin, rotate = '' }) {
  return (
    <div
      className={`hidden relative self-start left-page lg:flex justify-center items-center ${margin}`}
      style={{ height: height }}
    >
      <BsCaretRightFill
        className={`text-gray-800 h-16 w-16 cursor-pointer transform ${rotate}`}
        onClick={onClick}
      />
    </div>
  )
}

