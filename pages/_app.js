import '@/styles/globals.css';
import WideLayout from '@/components/pagelayout/WideLayout';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { FontsizeProvider } from '@/contexts/FontsizeContext';
export default function App({ Component, pageProps }) {
  
  return(
    <>
      <LanguageProvider>
        <FontsizeProvider>
          <WideLayout>
            <Component {...pageProps} />  
          </WideLayout>
        </FontsizeProvider>
      </LanguageProvider>
    </>
  )
};
