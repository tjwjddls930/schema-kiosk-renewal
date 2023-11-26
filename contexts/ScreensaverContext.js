import React, { createContext, useContext, useState } from "react";

export const ScreensaverContext = createContext();

export const ScreensaverProvider = ({ children }) => {
  const [isShowingScreensaver, setIsShowingScreensaver] = useState(false);

  const setScreensaverStatus = (status) => {
    setIsShowingScreensaver(status);
  };

  return (
    <ScreensaverContext.Provider
      value={{ isShowingScreensaver, setScreensaverStatus }}
    >
      {children}
    </ScreensaverContext.Provider>
  );
};

// export const useScreensaver = () => {
//   return useContext(ScreensaverContext);
// };