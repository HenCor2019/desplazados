import ReactPlayer from 'react-player'

const styles = {
  reactPlayer: 'pointer-events-none z-0 h-screen fixed',

  buttonContainer: 'w-full absolute text-white z-40 self-end flex justify-end',

  buttonSkipVideo:
    'bg-gradient-to-r from-red-600 via-red-500 to-red-400 font-semibold rounded-full w-24 h-10 text-sm self-end uppercase mr-5 md:mr-10 mb-5 md:mb-9 hover:from-red-700 hover:via-red-600 hover:to-red-500'
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
        config={{
          youtube: {
            controls: 0,
            showinfo: 0,
            autohide: 1
          }
        }}
      />

      <div className={styles.buttonContainer}>
        <button className={styles.buttonSkipVideo}>Saltar</button>
      </div>
    </>
  )
}
