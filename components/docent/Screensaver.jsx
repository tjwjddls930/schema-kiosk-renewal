// import ReactPlayer from "react-player";
// import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

const DynamicReactPlayer = dynamic(() => import('react-player'), {ssr: false});

export default function Screensaver({videoUrl, url, ...props}) {
    return(
        <DynamicReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        volume={0.5}
        controls={false}
        muted={true}
        loop={true}
        playing={true}
        config={{
            youtube: {
                playerVars: { origin: 'http://localhost:3000' },
            },
        }}
        {...props}
    />
    )
};

// export default function Screensaver({videoUrl, ...props}) {
//     return (
//     <ReactPlayer 
//         url={videoUrl}
//         width="100%"
//         height="100%"
//         volume={0.5}
//         controls={false}
//         playing={true}
//         loop={true}
//         {...props}
//     />
//     )
// };