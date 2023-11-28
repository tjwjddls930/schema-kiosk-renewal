import React, { useState, useEffect, useContext } from "react";
import YouTubePlayer from "../YoutubePlayer";
import { useRouter } from "next/router";
import { ScreensaverContext } from "@/contexts/ScreensaverContext";

const Screensaver2 = ({ videoId, timeout }) => {

  // const {isShowingScreensaver, setScreensaverStatus} = useContext(ScreensaverContext);
  // default timeout: 3 seconds
  // const [isShowingScreensaver, setIsShowingScreensaver] = useState(true);
  // const [isShowingScreensaver, setIsShowingScreensaver] = useState(show);

  const router = useRouter();

  useEffect(() => {
    let screensaverTimer;

    const resetScreensaverTimer = () => {
      // setIsShowingScreensaver(false);
      setScreensaverStatus(false);
      clearTimeout(screensaverTimer);
      screensaverTimer = setTimeout(() => {
        // setIsShowingScreensaver(true);
        setScreensaverStatus(true);
      }, timeout);
    };

    screensaverTimer = setTimeout(() => {
      // setIsShowingScreensaver(true);
      setScreensaverStatus(true);
    }, timeout);

    resetScreensaverTimer();

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

export default Screensaver2;
