import { useState } from "react"

export const useAudioPodcast = (audios) => {
  const [audio, setAudio] = useState({ ...audios[0] })

  const onEnded = () => {
    if (audio.index === audios.length - 1) {
       setAudio(audios[0]);
       return;
    }

    setAudio(audios[audio.index + 1]);
  };

  const onNext = () => {
  if (audio.index === audios.length - 1) {
   setAudio(audios[0]);
   return;
  }

  setAudio(audios[audio.index + 1]);
  };

  const onPrevious = () => {
  if (audio.index === 0) {
   setAudio(audios[audios.length - 1]);
   return;
  }

  setAudio(audios[audio.index - 1]);
  };

  const handleOnSelect = (newAudio) => {
    setAudio({ ...newAudio });
  }

  return {
    onEnded,
    onNext,
    onPrevious,
    handleOnSelect,
    currentAudio: audio
  }
}
