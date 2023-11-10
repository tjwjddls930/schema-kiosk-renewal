import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const InactivityRedirect2 = ({ timeoutInMinutes }) => {
  const [inactive, setInactive] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let inactivityTimer;

    const resetTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        setInactive(true);
        if (router.asPath !== '/landingpage') {
          router.push('/landingpage'); // Redirect to the root page if not already there
        }
      }, timeoutInMinutes * 60 * 1000);
    };

    const handleActivity = () => {
      setInactive(false);
      resetTimer();
    };

    window.addEventListener('ontouchstart', handleActivity);
    window.addEventListener('keydown', handleActivity);

    resetTimer();

    return () => {
      window.removeEventListener('ontouchstart', handleActivity);
      window.removeEventListener('keydown', handleActivity);
    };
  }, [timeoutInMinutes, router]);

  return null;
};

export default InactivityRedirect2;
