import { useState } from 'react'
import ButtonPlay from '../../Components/VideoPlayer/ButtonPlay'
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer'

import { useHistory } from 'react-router-dom';

const styles = {
  mainContainer: 'flex justify-center items-center content-center h-screen'
}

const URL =
  'https://www.youtube.com/watch?v=DP8UJlECM6o&t=278s&ab_channel=HistoryLatinoam%C3%A9rica'

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
