import { BsCaretRightFill } from 'react-icons/bs';

export function GotoPage({ onNext, onPrev }) {
  return (
    <div className="lg:hidden flex w-full justify-center items-center mt-6">
      <BsCaretRightFill
        className="text-gray-800 h-16 transform rotate-180 w-16 cursor-pointer"
        onClick={onPrev}
      />

      <BsCaretRightFill
        className="text-gray-800 h-16 w-16 cursor-pointer"
        onClick={onNext}
      />
    </div>
  );
}
