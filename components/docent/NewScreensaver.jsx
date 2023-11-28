import React, { useEffect, useContext } from "react";
import { ScreensaverContext } from "@/contexts/ScreensaverContext";
import Dynamicplayer from "./Dynamicplayer";

const Screensaver = ({ videoId, timeout = 3000 }) => {
  // default timeout: 3 seconds
//   const [isShowingScreensaver, setIsShowingScreensaver] = useState(true);
    const {isShowingScreensaver, setScreensaverStatus} = useContext(ScreensaverContext);

  useEffect(() => {
    let screensaverTimer;

    const resetScreensaverTimer = () => {
        setScreensaverStatus(false);
    //   setIsShowingScreensaver(false);
      clearTimeout(screensaverTimer);
      screensaverTimer = setTimeout(() => {
        setScreensaverStatus(true);
        // setIsShowingScreensaver(true);
      }, timeout);
    };

    screensaverTimer = setTimeout(() => {
        setScreensaverStatus(true);
    //   setIsShowingScreensaver(true);
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

  return <>{isShowingScreensaver && <Dynamicplayer videoId={videoId} />}</>;
};

export default Screensaver;
