import { useState, useEffect } from "react";

export default function Screenresolution() {
    const [landscape, setLandscape] = useState(
        window.matchMedia('(orientation: landscape)').matches
    );

    useEffect(()=> {
        const handleResolution = (e) => {
            setLandscape(e.matches);
        };

        window.matchMedia('(orientation: landscape)').addEventListener(handleResolution);

        return()=> {
            window.matchMedia('(orientation: landscape)').removeEventListener(handleResolution)
        };
    }, [])

    return (
        landscape
    )
};