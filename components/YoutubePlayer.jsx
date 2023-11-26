import React, { useState } from "react";
import { useRouter } from "next/router";

const YouTubePlayer = ({ videoId, onEnded, ...props }) => {
  const [isHidden, setIsHidden] = useState(false);
  const router = useRouter();
  const isDevelopment = process.env.NODE_ENV === "development";
  const baseUrl = isDevelopment
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_BASE_URL;
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&mute=1&controls=0&origin=${baseUrl}`;

  const handleClick = () => {
    setIsHidden(true);
    router.reload();
  };

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
        {...props}
      />
      <div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        onClick={handleClick}
        onTouchStart={handleClick}
      >
        <p className="text-center text-white text-2xl font-light">
          화면을 터치해서 키오스크를 이용해 보세요!
        </p>
      </div>
    </div>
  );
};

export default YouTubePlayer;
