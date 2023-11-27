import { createContext, useState, useEffect } from 'react';
import { Howl } from 'howler';

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
    // const [activePlayer, setActivePlayer] = useState(null);

  return (
    <MusicContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </MusicContext.Provider>
  );
};
