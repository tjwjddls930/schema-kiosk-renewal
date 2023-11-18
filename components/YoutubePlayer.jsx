import React, { useState } from "react";

const YouTubePlayer = ({ videoId, onEnded, ...props }) => {
  const [isHidden, setIsHidden] = useState(false);
  const isDevelopment = process.env.NODE_ENV === "development";
  const baseUrl = isDevelopment
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_BASE_URL;
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=0&origin=${baseUrl}`;

  // const handleClick = () => {
  //   setIsHidden(true);
  // };

  return (
    <div
      className={`absolute inset-0`}
      style={{ zIndex: 10 }}
    >
      <iframe
        src={youtubeEmbedUrl}
        className="absolute top-0 left-0 w-full h-full"
        allow="autoplay; encrypted-media"
        allowFullScreen={true}
        onEnded={onEnded}
        {...props}
      />
    </div>
  );
};

export default YouTubePlayer;
