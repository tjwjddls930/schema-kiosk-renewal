import { useEffect, useState } from "react";

const InactivityDetector = ({ timeoutInSeconds = 30, onInactivity }) => {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setInactive(true);
        // Perform the action on inactivity
        if (onInactivity) {
          onInactivity();
        }
      }, timeoutInSeconds * 1000);
    };

    const handleActivity = () => {
      setInactive(false);
      resetTimer();
    };

    // Attach event listeners
    window.addEventListener("touchstart", handleActivity);
    window.addEventListener("touchmove", handleActivity);
    window.addEventListener("touchend", handleActivity);
    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);

    // Initial setup
    resetTimer();

    // Clean up event listeners
    return () => {
      window.addEventListener("touchstart", handleActivity);
      window.addEventListener("touchmove", handleActivity);
      window.addEventListener("touchend", handleActivity);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      clearTimeout(inactivityTimer);
    };
  }, [timeoutInSeconds, onInactivity]);

  return null;
};

export default InactivityDetector;