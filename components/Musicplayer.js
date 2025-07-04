import { useEffect, useContext } from 'react';
import { ScreensaverContext } from '@/contexts/ScreensaverContext';
import clsx from 'clsx';
import { MusicContext } from '@/contexts/MusicContext';

const MusicPlayer = () => {
  const { isShowingScreensaver } = useContext(ScreensaverContext);
  const {audio, isPlaying, setIsPlaying} = useContext(MusicContext);

  useEffect(() => {
    if (isShowingScreensaver) {
      audio.pause();
      setIsPlaying(false);
    }
  }, [isShowingScreensaver, audio]);

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="p-4 hidden lg:block screen-w:block absolute right-14 bottom-20 screen-w:bottom-40">
      <button
        onClick={togglePlay}
        className={clsx("text-white font-bold py-2 px-4 h-full w-full text-base screen-w:text-4xl")}
      >
        {isPlaying 
        ? <svg className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Bblue" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 1v4a1 1 0 0 1-1 1H1m8 7.5V5s3 1 3 4m3 9a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v16Zm-6-4c0 1.105-1.12 2-2.5 2S4 15.105 4 14s1.12-2 2.5-2 2.5.895 2.5 2Z"/>
          </svg>
        : <svg className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 1v4a1 1 0 0 1-1 1H1m8 7.5V5s3 1 3 4m3 9a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2v16Zm-6-4c0 1.105-1.12 2-2.5 2S4 15.105 4 14s1.12-2 2.5-2 2.5.895 2.5 2Z"/>
          </svg>
      }
      </button>
    </div>
  );
};

export default MusicPlayer;