import ButtonPlay from './ButtonPlay'
import VideoPlayer from './VideoPlayer'

const styles = {
  mainContainer: 'flex justify-center items-center content-center h-screen'
}

export default function YoutubeVideo(props) {
  const { url, handlePlaying, playing } = props

  return (
    <div className={styles.mainContainer}>
      {playing ? (
        <VideoPlayer url={url} playing={playing} />
      ) : (
        <ButtonPlay handlePlaying={handlePlaying} />
      )}
    </div>
  )
}
