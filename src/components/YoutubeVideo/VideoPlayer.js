import ReactPlayer from 'react-player'

const styles = {
  reactPlayer: 'pointer-events-none z-0 h-screen fixed',

  buttonContainer: 'w-full absolute text-white z-40 self-end flex justify-end',

  buttonSkipVideo:
    'bg-gradient-to-r from-red-400 to-yellow-500 font-semibold rounded-full w-24 h-10 text-sm self-end uppercase mr-5 md:mr-10 mb-5 md:mb-9 hover:from-red-500 hover:to-yellow-600'
}

export default function VideoPlayer({ url, playing }) {
  return (
    <>
      <ReactPlayer
        className={styles.reactPlayer}
        url={url}
        playing={playing}
        width="100%"
        height="100vh"
      />

      <div className={styles.buttonContainer}>
        <button className={styles.buttonSkipVideo}>Saltar</button>
      </div>
    </>
  )
}
