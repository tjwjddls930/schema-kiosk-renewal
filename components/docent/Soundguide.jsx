// import ReactPlayer from "react-player";
import dynamic from "next/dynamic";

const DynamicReactPlayer = dynamic(() => import('react-player'), {ssr: false});

const Soundguide = ({videoUrl, volume, playing, end, loop, ...props}) => {
    return (
    <DynamicReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        volume={volume}
        controls={false}
        playing={playing}
        loop={true}
        onEnded={end}
        {...props}
    />
    )
};

export default Soundguide;