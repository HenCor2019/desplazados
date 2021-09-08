import PlayImage from '../../images/Video/playbutton.png'

const styles = {
  containerDiv:
    'w-3/4 h-3/4 flex flex-col justify-around items-start content-center',
  skeletonDiv: 'w-1/5 h-9 bg-gray-100 rounded-md',

  buttonContainer:
    'w-full py-8 h-2/3 bg-gray-100 flex justify-center content-center items-center rounded-md',

  buttonPlay:
    'py-2 px-4 rounded-full w-44 h-44 transition duration-700 ease-in-out',

  iconPlay: 'text-5xl pl-2 rounded-full',

  buttonSkip:
    'w-full text-white self-end flex justify-end items-end content-end',

  buttonSkipVideo:
    'bg-gradient-to-r from-red-600 via-red-500 to-red-400 font-semibold self-end justify-end rounded-full w-24 h-10 text-sm self-end uppercase mb-5 md:mb-9 hover:from-red-700 hover:via-red-600 hover:to-red-500 shadow-md'
}

export default function ButtonPlay({ handlePlaying }) {
  return (
    <div className={styles.containerDiv}>
      <div className={styles.skeletonDiv}></div>

      <div className={styles.buttonContainer}>
        <button className={styles.buttonPlay} onClick={handlePlaying}>
          <img
            src={PlayImage}
            alt="desplazados play button"
            className={styles.iconPlay}
          />
        </button>
      </div>

      <div className={styles.skeletonDiv}></div>

      <div className={styles.buttonSkip}>
        <button className={styles.buttonSkipVideo}>Saltar</button>
      </div>
    </div>
  )
}
