import '@/styles/globals.css';
// import WideLayout from '@/components/pagelayout/WideLayout';
// import TallLayout from '@/components/pagelayout/TallLayout';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { FontsizeProvider } from '@/contexts/FontsizeContext';
import { ScreenOrientProvider } from '@/contexts/ScreenOrientContext';
import {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
// import InactivityDetector from '@/components/InactivityDetector';
import InactivityRedirect2 from '@/components/digitaltwin/Inactivityredirect2';
const WideLayout = dynamic(() => import('@/components/pagelayout/WideLayout'));
const TallLayout = dynamic(() => import('@/components/pagelayout/TallLayout'));

export default function App({ Component, pageProps }) {
  const [isPortrait, setIsPortrait] = useState(false);

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
          {isPortrait ? 
            <TallLayout>
              <Component {...pageProps} />
              {/* <InactivityDetector /> */}
              {/* <InactivityRedirect2 timeoutInMinutes={0.5} /> */}
            </TallLayout>
            :  
            <WideLayout>
              <Component {...pageProps} />  
              {/* <InactivityDetector /> */}
              {/* <InactivityRedirect2 timeoutInMinutes={0.5} /> */}
            </WideLayout>
          }
          </ScreenOrientProvider>
        </FontsizeProvider>
      </LanguageProvider>
    </>
  )
};
