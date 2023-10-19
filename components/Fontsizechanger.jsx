import React, {useState} from 'react';


const Fontsizechanger = () => {
    const [fontSize, setFontSize] = useState();

    const increaseFontSize = () => {
        // Define the sequence of font sizes you want to cycle through
        const fontSizes = ['sm', 'base', 'lg', 'xl', '2xl'];
        const currentIndex = fontSizes.indexOf(fontSize);
        const nextIndex = (currentIndex + 1) % fontSizes.length;
        setFontSize(fontSizes[nextIndex]);
      };
};

export default Fontsizechanger;