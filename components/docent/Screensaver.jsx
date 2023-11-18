import dynamic from "next/dynamic";

const DynamicReactPlayer = dynamic(() => import('react-player'), {ssr: false});

const Screensaver = ({videoId, onEnded, ...props}) => {
    const isDevelopment = process.env.NODE_ENV === "development";
    const baseUrl = isDevelopment
      ? "http://localhost:3000"
      : process.env.NEXT_PUBLIC_BASE_URL;
    const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=0&origin=${baseUrl}`;
    return(
        <DynamicReactPlayer
        url={youtubeEmbedUrl}
        width="100%"
        height="100%"
        style={{
            zIndex: "1"
        }}
        volume={0.5}
        controls={false}
        muted={true}
        loop={false}
        onEnded={onEnded}
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

export default Screensaver;

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