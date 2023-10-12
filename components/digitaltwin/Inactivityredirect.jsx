import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Inactivityredirect({timeoutInMinutes}) {
    const router = useRouter();
    const [inactive, setInactive] = useState(false);
  
    useEffect(() => {
      let inactivityTimer;
  
      const resetTimer = () => {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
          setInactive(true);
          router.push('/'); // Redirect to the root page
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