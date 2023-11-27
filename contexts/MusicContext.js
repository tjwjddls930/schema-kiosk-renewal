import { createContext, useState, useEffect } from 'react';
import { Howl } from 'howler';

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audio, setAudio] = useState(new Howl({ src: '/audio/bgm-2.mp3', autoplay: false }));

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
