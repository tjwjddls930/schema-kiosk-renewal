import { useState, useEffect } from "react"

export default function Screensize() {
    const [screen, setScreen] = useState({
        width: undefined,
        height: undefined
      });

    useEffect(()=> {
    function handleResize() {
        setScreen({
        width: window.screen.width,
        height: window.screen.height
        })
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return() => window.removeEventListener("resize", handleResize);
    }, [])
    return screen;
};