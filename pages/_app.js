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
import Head from 'next/head';
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
      <Head>
        <title>쉐마미술관 AI키오스크</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="쉐마미술관 AI 키오스크 by Metalab"
        />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <LanguageProvider>
        <FontsizeProvider>
          <ScreenOrientProvider>
          {isPortrait ? 
            <ScreensaverProvider>
              <MusicProvider>
                <TallLayout>
                  <Component {...pageProps} />
                  {currentPath === "/" 
                    ? null
                    : <>
                        <InactivityRedirect timeout={150000} landingPageUrl={"/"} />
                        {!isMobile && <MusicPlayer sources = {musicList} />}
                      </>
                  }
                </TallLayout>
              </MusicProvider>
            </ScreensaverProvider>
            :  
            <ScreensaverProvider>
              <MusicProvider>
                <Component {...pageProps} />
                {currentPath === "/" 
                ? null
                : <>
                    <InactivityRedirect timeout={150000} landingPageUrl={"/"} />
                    <MusicPlayer sources = {musicList} />
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
