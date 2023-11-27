import { createContext, useState, useEffect } from 'react';
import { Howl } from 'howler';

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(new Howl({ 
      src: '/audio/reflections-on-water.mp3', 
      autoplay: false, 
      onend: () => {
      // Handle the end of the audio, for example, by restarting it
      audio.play();
      },
      volume: 0.5, 
    }));

    // const [activePlayer, setActivePlayer] = useState(null);
    useEffect(() => {
      // Update the audio source when the track changes
      audio.unload();
      audio.load();
    }, [audio]);

  return (
    <MusicContext.Provider value={{ audio, isPlaying, setIsPlaying }}>
      {children}
    </MusicContext.Provider>
  );
};
