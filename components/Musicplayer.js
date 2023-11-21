import { useState, useEffect } from 'react';
import { Howl } from 'howler';

const MusicPlayer = ({ audioSrc, isVideoPlaying }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Howl({ src: [audioSrc], autoplay: false })); // Set autoplay to false initially

  useEffect(() => {
    // Autoplay the music when the component mounts
    if (!isVideoPlaying && !isPlaying) {
      audio.play();
      setIsPlaying(true);
    }

    // Pause the music when a video is playing
    if (isVideoPlaying && isPlaying) {
      audio.pause();
      setIsPlaying(false);
    }

    return () => {
      // Cleanup: pause and unload the audio when the component unmounts
      audio.pause();
      audio.unload();
    };
  }, [isVideoPlaying, isPlaying, audio]);

  // const togglePlay = () => {
  //   if (isPlaying) {
  //     audio.pause();
  //   } else {
  //     audio.play();
  //   }
  //   setIsPlaying(!isPlaying);
  // };

  return (
    null
    // <div>
    //   <button onClick={togglePlay}>
    //     {isPlaying ? 'Pause' : 'Play'}
    //   </button>
    // </div>
  );
};

export default MusicPlayer;