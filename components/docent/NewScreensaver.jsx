import React, { useState, useEffect, useContext } from "react";
import YouTubePlayer from "@/components/YouTubePlayer";

const Screensaver = ({ videoId, timeout }) => {
  // default timeout: 3 seconds
  const [isShowingScreensaver, setIsShowingScreensaver] = useState(false);

  useEffect(() => {
    let screensaverTimer;

    const resetScreensaverTimer = () => {
      setIsShowingScreensaver(false);
      clearTimeout(screensaverTimer);
      screensaverTimer = setTimeout(() => {
        setIsShowingScreensaver(true);
      }, timeout);
    };

    screensaverTimer = setTimeout(() => {
      setIsShowingScreensaver(true);
    }, timeout);

    document.addEventListener("click", resetScreensaverTimer);
    document.addEventListener("touchstart", resetScreensaverTimer, {
      passive: true,
    });
    // document.addEventListener("mousemove", resetScreensaverTimer, {
    //   passive: true,
    // });
    // Additional events like mousemove or keydown could be added here

    return () => {
      clearTimeout(screensaverTimer);
      document.removeEventListener("click", resetScreensaverTimer);
      document.removeEventListener("touchstart", resetScreensaverTimer, {
        passive: true,
      });
      // document.removeEventListener("mousemove", resetScreensaverTimer, {
      //   passive: true,
      // });
      // Remove additional events here
    };
  }, [timeout]);

  return <>{isShowingScreensaver && <YouTubePlayer videoId={videoId} />}</>;
};

export default Screensaver;
