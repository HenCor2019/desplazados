import { useState } from 'react'
import ButtonPlay from '../../Components/VideoPlayer/ButtonPlay'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'

import { useHistory } from 'react-router-dom';

const styles = {
  mainContainer: 'flex justify-center items-center content-center h-screen'
}

const URL =
  'https://youtu.be/H1OTcUY7vK4'

export default function YoutubeVideo() {
  const [playing, setPlaying] = useState(false)
  const { push } = useHistory();

  const handlePlaying = () => {
    setPlaying(!playing)
  }

  const handleOnSkip = () => {
    push("/home");
  }

  return (
    <div className={styles.mainContainer}>
      {playing ? (
        <VideoPlayer url={URL} playing={playing} handleOnSkip={handleOnSkip}/>
      ) : (
        <ButtonPlay handlePlaying={handlePlaying} handleOnSkip={handleOnSkip} />
      )}
    </div>
  )
}
