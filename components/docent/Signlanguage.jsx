import ReactPlayer from "react-player";

const Signlanguage= ({videoUrl, volume, playing, end, ...props}) => {
    return (
    <ReactPlayer 
        url={videoUrl}
        width="100%"
        height="100%"
        volume={volume}
        controls={false}
        playing={playing}
        onEnded={end}
        {...props}
    />
    )
};

export default Signlanguage;