import '@/styles/globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { FontsizeProvider } from '@/contexts/FontsizeContext';
import { ScreenOrientProvider } from '@/contexts/ScreenOrientContext';
import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import InactivityRedirect from '@/components/InactivityRedirect';
import { ScreensaverProvider } from '@/contexts/ScreensaverContext';
// const WideLayout = dynamic(() => import('@/components/pagelayout/WideLayout'));
const TallLayout = dynamic(() => import('@/components/pagelayout/TallLayout'));

export default function App({ Component, pageProps }) {
  const [isPortrait, setIsPortrait] = useState(false);
  const router = useRouter();
  const currentPath = router.asPath;
  useEffect(() => {
      const handleOrientationChange = () => {
      setIsPortrait(window.screen.height > window.screen.width);
      };
      
      if (typeof window !== 'undefined') {
        // Only access window object on the client side
        window.addEventListener('resize', handleOrientationChange);
  
        return () => {
          window.removeEventListener('resize', handleOrientationChange);
        };
      }
  }, []);
  return(
    <>
      <LanguageProvider>
        <FontsizeProvider>
          <ScreenOrientProvider>
          {currentPath === "/" 
          ? null
          : <InactivityRedirect timeout={120000} landingPageUrl={"/"} />
          }
          {isPortrait ? 
            <TallLayout>
              <Component {...pageProps} />
            </TallLayout>
            :  
            // <WideLayout>
            // </WideLayout>
            <ScreensaverProvider>
              <Component {...pageProps} /> 
            </ScreensaverProvider> 
          }
          </ScreenOrientProvider>
        </FontsizeProvider>
      </LanguageProvider>
    </>
  )
};
