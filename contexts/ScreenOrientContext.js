import { createContext, useState, useEffect } from "react";

export const ScreenOrientContext = createContext();

export const ScreenOrientProvider = ({children}) => {

    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        const handleOrientationChange = () => {
        setIsPortrait(window.screen.height > window.screen.width);
        };
        
        if (typeof window !== 'undefined') {
          // Only access window object on the client side
        //   window.addEventListener('resize', handleOrientationChange);
    
        //   return () => {
        //     window.removeEventListener('resize', handleOrientationChange);
        //   };
            handleOrientationChange();
        }
    }, []);

    return (
        <ScreenOrientContext.Provider value={{isPortrait, setIsPortrait}}>
            {children}
        </ScreenOrientContext.Provider>
    )
};

