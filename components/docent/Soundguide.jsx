import ReactPlayer from "react-player";

export default function Soundguide({videoUrl, volume, playing, end, ...props}) {
    return (<div className="flex mx-auto h-[530px] w-[530px] pt-40">
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
    </div>)
};