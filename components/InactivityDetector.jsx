import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const InactivityDetector = ({ timeout = 30000 }) => {
  const [timer, setTimer] = useState(null);
  const router = useRouter();

  const handleActivity = () => {
    resetTimer();
  };

  const resetTimer = () => {
    clearTimeout(timer);
    setTimer(setTimeout(redirectToLandingPage, timeout));
  };

  const redirectToLandingPage = () => {
    router.push('/landingpage');
  };

  useEffect(() => {
    resetTimer();

    // Add event listeners for user activity
    window.addEventListener('click', handleActivity);
    window.addEventListener('touchstart', handleActivity);
    window.addEventListener('keydown', handleActivity);

    // Clean up the event listeners on component unmount
    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
      window.removeEventListener('keydown', handleActivity);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default InactivityDetector;