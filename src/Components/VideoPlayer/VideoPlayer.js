import ReactPlayer from 'react-player'

const styles = {
  reactPlayer: 'pointer-events-none z-0 h-screen fixed',

  buttonContainer:
    'w-full absolute text-gray-100 z-40 self-end flex justify-end',

  buttonSkipVideo:
    'bg-gray-500 font-bold rounded-full w-24 h-10 text-sm self-end uppercase mr-5 md:mr-10 mb-5 md:mb-9 shadow-md'
}

export default function VideoPlayer({ url, playing, handleOnSkip }) {
  return (
    <>
      <ReactPlayer
        className={styles.reactPlayer}
        url={url}
        onEnded={handleOnSkip}
        playing={playing}
        width="110vw"
        height="143vh"
        config={{
          youtube: {
            controls: 0,
            showinfo: 0,
            autohide: 1
          }
        }}
      />

      <div className={styles.buttonContainer}>
        <button
          onClick={() => handleOnSkip()}
          className={styles.buttonSkipVideo}
        >
          Saltar
        </button>
      </div>
    </>
  )
}
