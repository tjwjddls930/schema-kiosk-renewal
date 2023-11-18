import { useState } from 'react';
import { useRouter } from 'next/router';
import { modelData } from '@/data/modelData';
import { useTrail, animated } from '@react-spring/web';
// import YouTubePlayer from '@/components/YoutubePlayer';
import Screensaver from '@/components/docent/Screensaver';

export default function Home() {
  const router = useRouter();
  const [video, setVideo] = useState(false);
  const [collection, setCollection] = useState(false);
  const [url, setUrl] = useState("f9Vag-CGCG0")
  const items = [
    // {
    //   order: 1,
    //   src: "/img/thumbnails/thumbnail-1.png",
    //   url: "3jm6c2qLmZk"
    // },
    // {
    //   order: 2,
    //   src: "/img/thumbnails/thumbnail-2.png",
    //   url: "6ViQjZmCP3Y"
    // },
    // {
    //   order: 3,
    //   src: "/img/thumbnails/thumbnail-3.png",
    //   url: "R8ozsVdLiEY"
    // },
    // {
    //   order: 4,
    //   src: "/img/thumbnails/thumbnail-4.png",
    //   url: "Rz8CPx5NiZg"
    // },
    // {
    //   order: 5,
    //   src: "/img/thumbnails/thumbnail-5.png",
    //   url: "Z9K0zY5gB4o"
    // },
    // {
    //   order: 6,
    //   src: "/img/thumbnails/thumbnail-6.png",
    //   url: "ipzB3_2bk3c"
    // },
    // {
    //   order: 7,
    //   src: "/img/thumbnails/thumbnail-7.png",
    //   url: "E9YSRNm1D6k"
    // },
    {
      order: 8,
      src: "/img/thumbnails/thumbnail-8.png",
      url: "f9Vag-CGCG0"
    },
    {
      order: 9,
      src: "/img/thumbnails/thumbnail-9.png",
      url: "SB473Uj57T8"
    }
  ];

  const collections = [
    {
      order: 1,
      src: "/img/collections/collection-1-2.png",
      url: 0
    },
    {
      order: 2,
      src: "/img/collections/collection-2-2.png",
      url: 1
    },
    {
      order: 3,
      src: "/img/collections/collection-3-2.png",
      url: 2
    },
    {
      order: 4,
      src: "/img/collections/collection-4-2.png",
      url: 3
    },
  ];
  
  const trail = useTrail(items.length, {
    config: {mass: 5, tension: 2000, friction: 200},
    opacity: video ? 1 : 0,
    x: video ? 0 : 20,
    height: video ? 50 : 0,
    from: { opacity: 0, x: 20, height: 0},
});

const trail2 = useTrail(collections.length, {
  config: {mass: 5, tension: 2000, friction: 200},
  opacity: collection ? 1 : 0,
  x: collection ? 0 : 20,
  height: collection ? 50 : 0,
  from: { opacity: 0, x: 20, height: 0},
});

const handleVideoEnd = () => {
  // Find the current video index
  const currentIndex = items.findIndex((item) => item.url === url);

  // Check if there is a next video
  if (currentIndex < items.length - 1) {
    // Set the next video URL
    setUrl(items[currentIndex + 1].url);
  } else {
    // If no next video, you can loop back to the first video or handle it based on your requirement
    // For example, looping back to the first video:
    setUrl(items[0].url);
  }
};

  return (
    <div className="h-screen w-screen bg-Ablack">
        {/* <YouTubePlayer videoId={url} onEnded={handleVideoEnd} /> */}
        <Screensaver videoId={url} onEnded={handleVideoEnd} />
        <div className="h-[80px] w-[80px] rounded-full absolute left-4 bottom-12 z-40"
            onClick={()=> setVideo(!video)}
        >
            <div className="flex flex-col space-y-4 text-center w-[100px] items-center">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" height="24" viewBox="0 0 24 24" fill="none" 
                stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" 
                strokeLinejoin="round"
                className={`h-[60px] w-[60px] text-white ${video ? "animate-bounce" : ""}`}>
                <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z"/>
            </svg>
            <span className="text-white font-bold text-base">{"영상 보기"}</span>
            </div>
        </div>
        <div className="h-[80px] w-[80px] rounded-full absolute left-4 bottom-48 z-40"
            onClick={()=> setCollection(!collection)}
        >
            <div className="flex flex-col space-y-4 text-center w-[100px] items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                className={`h-[60px] w-[60px] text-white ${collection ? "animate-bounce" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                </svg>
                <span className="text-white font-bold text-base">{"소장품 보기"}</span>
            </div>
        </div>
        <div className={`absolute left-40 bottom-12 ${video ? "z-40" : ""}`}>
          <div className="w-3/4 h-[150px] flex flex-row space-x-4">
          {trail.map(({x, height, ...rest}, index) => (
              <animated.div 
                  key={items[index].order} 
                  className="will-change-transform overflow-hidden" 
                  style={{
                      ...rest,
                      transform: x.to(x => `translate3d(0, ${x}px, 0)`)
                  }}>
                  <animated.div style={{ height }}>
                      <img 
                      key={items[index].order}
                      className="mx-auto border-2 text-white"
                      src={items[index].src}
                      alt="thumbnail"
                      onClick={()=> {
                          setUrl(items[index].url)
                          setVideo(!video)
                      }}
                      />
                  </animated.div>
              </animated.div>
          ))}
          </div>
        </div>
        <div className={`absolute left-40 bottom-44 ${collection ? "z-40" : ""}`}>
          <div className="w-3/4 h-[200px] flex flex-row space-x-4">
          {trail2.map(({x, height, ...rest}, index) => (
              <animated.div 
                  key={collections[index].order} 
                  className="will-change-transform overflow-hidden" 
                  style={{
                      ...rest,
                      transform: x.to(x => `translate3d(0, ${x}px, 0)`)
                  }}>
                  <animated.div style={{ height }}>
                      <img 
                      key={collections[index].order}
                      className="mx-auto border-2 text-white"
                      src={collections[index].src}
                      alt="thumbnail"
                      onClick={()=> router.push(`/pastexhibit/${modelData[collections[index].url].order}`)}
                      />
                  </animated.div>
              </animated.div>
          ))}
          </div>
        </div>
    </div>
  )
};



