import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const DynamicReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const Landingsound = ({ videoUrl, volume, muted, end, loop, ...props }) => {
    // State to control video playback
    const [isPlaying, setIsPlaying] = useState(false);

    // Effect to autoplay the video when the component mounts
    useEffect(() => {
        setIsPlaying(true);
    }, []);

    return (
        <DynamicReactPlayer
            url={videoUrl}
            width="100%"
            height="100%"
            volume={volume}
            controls={false}
            muted={muted}
            playing={isPlaying} // Using the state to control playback
            loop={loop}
            onEnded={end}
            config={{
                file: {
                    attributes: {
                        preload: 'auto',
                    },
                },
            }}
            {...props}
        />
    );
};

export default Landingsound;