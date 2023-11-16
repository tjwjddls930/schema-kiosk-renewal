import React, { useState } from "react";

const YouTubePlayer = ({ videoId, ...props }) => {
  const [isHidden, setIsHidden] = useState(false);
  const isDevelopment = process.env.NODE_ENV === "development";
  const baseUrl = isDevelopment
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_BASE_URL;
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=0&origin=${baseUrl}`;

  const handleClick = () => {
    setIsHidden(true);
  };

  return (
    <div
      className={`fixed inset-0 ${isHidden ? "hidden" : ""}`}
      style={{ zIndex: 1000 }}
    >
      <iframe
        src={youtubeEmbedUrl}
        className="absolute top-0 left-0 w-full h-full"
        allow="autoplay; encrypted-media"
        allowFullScreen={true}
        {...props}
      />
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        onClick={handleClick}
        onTouchStart={handleClick}
      >
        <p className="text-center text-white text-2xl screen-w:text-4xl font-light">
          화면을 터치해서 키오스크를 이용해 보세요!
        </p>
      </div>
    </div>
  );
};

export default YouTubePlayer;
