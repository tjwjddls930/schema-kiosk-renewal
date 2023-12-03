import '@/styles/globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { FontsizeProvider } from '@/contexts/FontsizeContext';
import { ScreenOrientProvider } from '@/contexts/ScreenOrientContext';
import {useEffect, useState} from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import InactivityRedirect from '@/components/InactivityRedirect';
import { ScreensaverProvider } from '@/contexts/ScreensaverContext';
import { MusicProvider } from '@/contexts/MusicContext';
import MusicPlayer from '@/components/Musicplayer';
import { isMobile } from 'react-device-detect';
import { AnimatePresence, motion } from 'framer-motion';
// const WideLayout = dynamic(() => import('@/components/pagelayout/WideLayout'));
const TallLayout = dynamic(() => import('@/components/pagelayout/TallLayout'));

export default function App({ Component, pageProps }) {
  const [isPortrait, setIsPortrait] = useState(false);
  const musicList = [
    // '/audio/bgm-1.mp3',
    '/audio/bgm-2.mp3',
  ];
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
          {isPortrait ? 
            <TallLayout>
              <Component {...pageProps} />
            </TallLayout>
            :  
            <ScreensaverProvider>
              <MusicProvider>
                <AnimatePresence>
                    <motion.div
                    initial={{ y: 25, opacity: 0}}
                    animate={{ y: 0, opacity: 1}}
                    transition={{
                      delay: 0.4,
                      duration: 0.75,
                    }}
                    variants={{
                      initialState: {
                        opacity: 0,
                        clipPath:'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                        transition: {duration: 0.2}
                      },
                      animateState: {
                        opacity: 1,
                        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                        transition: {duration: 0.2}
                      },
                      exitState: {
                        clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
                        transition: {duration: 0.2}
                      },
                    }}
                  >
                    <Component {...pageProps} />
                  </motion.div>
                </AnimatePresence>
                {currentPath === "/" 
                ? null
                : <>
                    <InactivityRedirect timeout={150000} landingPageUrl={"/"} />
                    {isMobile ? <MusicPlayer sources = {musicList} /> : null}
                  </>
                }
              </MusicProvider>
            </ScreensaverProvider> 
          }
          </ScreenOrientProvider>
        </FontsizeProvider>
      </LanguageProvider>
    </>
  )
};
