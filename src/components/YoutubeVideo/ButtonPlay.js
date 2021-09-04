import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const styles = {
  containerDiv:
    'w-3/4 h-3/4 flex flex-col justify-around items-start content-center',
  skeletonDiv: 'w-1/5 h-9 bg-gray-100 rounded-md',

  buttonContainer:
    'w-full py-8 h-2/3 bg-gray-100 flex justify-center content-center items-center rounded-md',

  buttonPlay:
    'bg-gradient-to-r from-red-400 to-yellow-500 text-white font-bold py-2 px-4 rounded-full w-28 h-28 shadow-lg hover:from-red-500 hover:to-yellow-600 transition duration-700 ease-in-out',

  iconPlay: 'text-5xl pl-2'
}

export default function ButtonPlay({ handlePlaying }) {
  return (
    <div className={styles.containerDiv}>
      <div className={styles.skeletonDiv}></div>

      <div className={styles.buttonContainer}>
        <button className={styles.buttonPlay} onClick={handlePlaying}>
          <FontAwesomeIcon icon={faPlay} className={styles.iconPlay} />
        </button>
      </div>

      <div className={styles.skeletonDiv}></div>
    </div>
  )
}
