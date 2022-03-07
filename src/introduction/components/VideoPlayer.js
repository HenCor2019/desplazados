import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useConfigContext } from '../../contexts/ConfigContext';

const styles = {
  reactPlayer: 'xl:pointer-events-none z-0 h-screen fixed',

  buttonContainer:
    'w-full absolute text-gray-100 z-40 self-end flex justify-end',

  buttonSkipVideo:
    'bg-gray-500 font-bold rounded-full w-24 h-10 text-sm self-end uppercase mr-5 md:mr-10 mb-5 md:mb-9 shadow-md',
};

export default function VideoPlayer({ url, playing, handleOnSkip }) {
  const [width, setWidth] = useState('110vw');
  const [height, setHeight] = useState('140vw');
  const [muted, setMuted] = useState(false);

  const {
    isMobile,
    isTablet,
    isMonitor,
    isSmallMobile,
    isXlMonitor,
    is2XlMonitor,
  } = useConfigContext();

  useEffect(() => {
    if (is2XlMonitor) {
      setWidth('128vw');
      setHeight('119vh');
    }

    if (isXlMonitor) {
      setWidth('135vw');
      setHeight('117vh');
    }

    if (isMonitor) {
      setWidth('108vw');
      setHeight('117vh');
    }

    if (isMobile || isTablet) {
      setWidth('100vw');
      setHeight('100vh');
      setMuted(false);
    }
  }, [isXlMonitor, is2XlMonitor, isMonitor, isTablet]);

  return (
    <>
      <ReactPlayer
        className={styles.reactPlayer}
        url={url}
        onEnded={handleOnSkip}
        playing={playing}
        width={width}
        height={height}
        muted={muted}
        playsinline
        config={{
          youtube: {
            controls: 0,
            showinfo: 0,
            autohide: 1,
            autoplay: true,
          },
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
  );
}
