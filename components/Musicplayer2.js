import { useState, useEffect, useContext } from 'react';
import { clsx } from 'clsx';
import { MusicContext } from '@/contexts/MusicContext';

const MusicPlayer = ({ src }) => {
    const { activePlayer, setActivePlayer } = useContext(MusicContext);
  const [audio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(()=> {
    setAudio(new Audio(src)) 
    }, []);

  useEffect(() => {
    // if (isPlaying) {
    //   audio?.play();
    // } else {
    //   audio?.pause();
    // }

    if (isPlaying && activePlayer !== audio) {
        if (activePlayer) {
            activePlayer.pause();
        }
        audio?.play();
        setActivePlayer(audio);
        } else if (!isPlaying && activePlayer === audio) {
        audio?.pause();
        setActivePlayer(null);
    }
  }, [audio, isPlaying, activePlayer]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const storedIsPlaying = localStorage.getItem('isPlaying') === 'true';
    setIsPlaying(storedIsPlaying);
  }, []);

  useEffect(() => {
    localStorage.setItem('isPlaying', isPlaying.toString());
  }, [isPlaying]);

  return (
    <div className="p-4 absolute z-[999] screen-w:left-16 screen-w:bottom-28 screen-w:h-[250px] screen-w:w-[250px]">
        <button
        onClick={togglePlay}
        className={clsx("text-white font-bold py-2 px-4 h-full w-full text-base screen-w:text-4xl", isPlaying ? "bg-Bblue" : "bg-Ablue")}
        >
        {isPlaying ? 'Pause' : 'Play'}
        </button>
    </div>
  );
};

export default MusicPlayer;