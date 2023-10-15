import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Inactivityredirect({timeoutInMinutes}) {
    const router = useRouter();
    const [inactive, setInactive] = useState(false);
    const [redirectBlocked, setRedirectBlocked] = useState(false);
    // console.log(inactive);
  
    useEffect(() => {
      let inactivityTimer;
  
      const resetTimer = () => {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
          if (!redirectBlocked) {
            setInactive(true);
            router.push('/'); // Redirect to the root page
          }
        }, timeoutInMinutes * 60 * 1000);
      };
  
      const handleActivity = () => {
        setInactive(false);
        resetTimer();
      };

       // Listen for route changes to block redirection
      const handleRouteChangeStart = (url) => {
        if (url !== '/') {
          setRedirectBlocked(true);
        }
      };

      const handleRouteChangeComplete = () => {
        setRedirectBlocked(false);
      };
  
      window.addEventListener('ontouchstart', handleActivity);
      window.addEventListener('keydown', handleActivity);

      // Add route change listeners
      router.events.on('routeChangeStart', handleRouteChangeStart);
      router.events.on('routeChangeComplete', handleRouteChangeComplete);
  
      resetTimer();

      return () => {
        window.removeEventListener('ontouchstart', handleActivity);
        window.removeEventListener('keydown', handleActivity);

        // Remove route change listeners
        router.events.off('routeChangeStart', handleRouteChangeStart);
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
      };

    }, [timeoutInMinutes, router, redirectBlocked]);

    // if(router.pathname === "/") {
    //   return null;
    // };
    
    return null;
}