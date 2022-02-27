import PlayImage from 'shared/assets/images/video/playbutton.png';
import i18next from 'i18next';

const styles = {
  containerDiv:
    'w-full h-3/4 flex flex-col justify-around items-start content-center',
  skeletonDiv: 'w-1/5 h-9 bg-gray-100 rounded-md',

  buttonContainer:
    'w-full py-8 h-2/3 bg-transparent flex flex-col justify-center content-center items-center rounded-md',

  buttonPlay:
    'py-2 px-4 rounded-full w-44 h-44 transition duration-700 ease-in-out',

  iconPlay: 'text-5xl rounded-full',

  buttonSkip:
    'w-full text-gray-800 self-end flex justify-end items-end content-end absolute bottom-0 pb-10 pr-7 sm:pr-10',

  buttonSkipVideo:
    'border-2 border-gray-600 font-bold rounded-full w-24 h-10 text-sm self-end uppercase shadow-sm'
}

export default function ButtonPlay({ handlePlaying, handleOnSkip }) {
  const lan = i18next.language
  return (
    <div className={styles.containerDiv}>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonPlay} onClick={handlePlaying}>
          <img
            src={PlayImage}
            alt="desplazados play button"
            className={styles.iconPlay}
          />
        </button>
        <div className={styles.buttonSkip}>
          <button className={styles.buttonSkipVideo} onClick={handleOnSkip}>
            { lan === 'en' ? 'Skip' : 'Saltar'}
          </button>
        </div>
      </div>
    </div>
  )
}
