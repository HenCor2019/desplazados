import { useState } from 'react';
import ButtonPlay from 'introduction/components/ButtonPlay';
import VideoPlayer from 'introduction/components/VideoPlayer';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function YoutubeVideo() {
  const [t] = useTranslation('introduction');
  const url = t('url') ?? 'https://youtu.be/_ZogrnBdAUA';
  const [playing, setPlaying] = useState(false);
  const { push } = useHistory();

  const handlePlaying = () => {
    setPlaying(!playing);
  };

  const handleOnSkip = () => {
    push('/home');
  };

  return (
    <div className="flex justify-center items-center content-center h-screen">
      {playing ? (
        <VideoPlayer url={url} playing={playing} handleOnSkip={handleOnSkip} />
      ) : (
        <ButtonPlay handlePlaying={handlePlaying} handleOnSkip={handleOnSkip} />
      )}
    </div>
  );
}
