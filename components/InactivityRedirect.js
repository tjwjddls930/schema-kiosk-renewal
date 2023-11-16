// /components/InactivityRedirect.js
import { useEffect } from "react";
import { useRouter } from "next/router";

const InactivityRedirect = ({ timeout = 5000, landingPageUrl = "/" }) => {
  const router = useRouter();

  useEffect(() => {
    let inactivityTimer;

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        router.push(landingPageUrl);
      }, timeout);
    };

    resetInactivityTimer(); // Set the initial timer

    // Add event listeners
    document.addEventListener("click", resetInactivityTimer);
    document.addEventListener("touchstart", resetInactivityTimer, {
      passive: true,
    });
    document.addEventListener("touchmove", resetInactivityTimer, {
        passive: true,
      });
    document.addEventListener("mousemove", resetInactivityTimer, {
      passive: true,
    });

    // Clean up function
    return () => {
      clearTimeout(inactivityTimer);
      document.removeEventListener("click", resetInactivityTimer);
      document.removeEventListener("touchstart", resetInactivityTimer, {
        passive: true,
      });
      document.removeEventListener("touchmove", resetInactivityTimer, {
        passive: true,
      });
      document.removeEventListener("mousemove", resetInactivityTimer, {
        passive: true,
      });
    };
  }, [router, timeout, landingPageUrl]);

  return null; // This component does not render anything
};

export default InactivityRedirect;
