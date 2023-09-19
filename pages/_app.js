import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Loading from '@/components/loading/Loading';
import { Suspense } from 'react';

function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(()=> {
    const handleRouteChange = (url) => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    }
  }, [router.events])
  
  return(
    <>{loading ? 
      <Loading/> : 
      <Suspense fallback={null}>
        <Component {...pageProps} />  
      </Suspense>}</>
  )
};

export default appWithTranslation(App);