import '@/styles/globals.css';
// import WideLayout from '@/components/pagelayout/WideLayout';
// import TallLayout from '@/components/pagelayout/TallLayout';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { FontsizeProvider } from '@/contexts/FontsizeContext';
import Inactivityredirect from '@/components/digitaltwin/Inactivityredirect';
import { ScreenOrientProvider } from '@/contexts/ScreenOrientContext';
import {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
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
            </TallLayout>
            :  
            <WideLayout>
              {/* <Inactivityredirect timeoutInMinutes={2} /> */}
              <Component {...pageProps} />  
            </WideLayout>
          }
          </ScreenOrientProvider>
        </FontsizeProvider>
      </LanguageProvider>
    </>
  )
};
