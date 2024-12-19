import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useRouter } from "next/router";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import { FontsizeContext } from "@/contexts/FontsizeContext";
import { clsx } from "clsx";
import { allExhibits_KOR } from "@/data/allExhibits_KOR";
import { allExhibits_ENG } from "@/data/allExhibits_ENG";
import { allExhibits_CH } from "@/data/allExhibits_CH";
import { allExhibits_TH } from "@/data/allExhibits_TH";
import { allExhibits_VI } from "@/data/allExhibits_VI";
import { paintList_KOR } from "@/data/paintList_KOR";
import { paintList_ENG } from "@/data/paintList_ENG";
import { paintList_CH } from "@/data/paintList_CH";
import { paintList_TH } from "@/data/paintList_TH";
import { paintList_VI } from "@/data/paintList_VI";
import QRCode from "react-qr-code";

const popupText1 = {
  KOR: "작가 보기",
  ENG: "See Artist",
  CH: "查看作者",
  TH: "ดูผู้เขียน",
  VI: "Xem tác giả",
};

const popupText2 = {
  KOR: "작품 보기",
  ENG: "View Artwork",
  CH: "查看作品",
  TH: "ดูงาน",
  VI: "Xem công việc",
};

const popupText3 = {
  KOR: "닫기",
  ENG: "Close",
  CH: "关闭",
  TH: "ปิด",
  VI: "đóng",
};

const popupText4 = {
  KOR: "(QR 코드를 스캔하여 작품을 감상해 보세요!)",
  ENG: "(Scan the QR code to view the artwork!)",
  CH: "(扫描二维码即可查看作品！)",
  TH: "(สแกนรหัส QR เพื่อชมผลงาน!)",
  VI: "(Quét mã QR để xem tác phẩm nghệ thuật!)",
};

const informText = {
  KOR:(orient, font) => (
    <div className={clsx(orient 
      ? `flex flex-col w-1/4 text-Ablue font-bold ${font ? "space-y-4 screen-w:space-y-8 text-sm screen-w:text-4xl" : "space-y-2 screen-w:space-y-4 text-xs screen-w:text-3xl"}` 
      : `flex flex-col w-1/3 text-Ablue font-bold ${font ? "space-y-4 screen-w:space-y-8 text-sm screen-w:text-4xl" : "space-y-2 screen-w:space-y-4 text-xs screen-w:text-3xl"}`)}>
        <span className="w-full">{'기간'}</span>
        <span className="w-full">{'아티스트'}</span>
        <span className="w-full">{'장소'}</span>
        <span className="w-full">{'주최/주관'}</span>
        <span className="w-full">{'후원'}</span>
    </div>
  ),
  ENG:(orient, font) => (
    <div className={clsx(orient 
      ? `flex flex-col w-1/4 text-Ablue font-bold ${font ? "space-y-4 screen-w:space-y-8 text-sm screen-w:text-4xl" : "space-y-2 screen-w:space-y-4 text-xs screen-w:text-3xl"}` 
      : `flex flex-col w-1/3 text-Ablue font-bold ${font ? "space-y-4 screen-w:space-y-8 text-sm screen-w:text-4xl" : "space-y-2 screen-w:space-y-4 text-xs screen-w:text-3xl"}`)}>
        <span className="w-full">{'Period'}</span>
        <span className="w-full">{'Artist'}</span>
        <span className="w-full">{'Location'}</span>
        <span className="w-full">{'Organized/Host'}</span>
        <span className="w-full">{'Support'}</span>
    </div>
  ),
  CH:(orient, font) => (
    <div className={clsx(orient 
      ? `flex flex-col w-1/4 text-Ablue font-bold ${font ? "space-y-4 screen-w:space-y-8 text-sm screen-w:text-4xl" : "space-y-2 screen-w:space-y-4 text-xs screen-w:text-3xl"}` 
      : `flex flex-col w-1/3 text-Ablue font-bold ${font ? "space-y-4 screen-w:space-y-8 text-sm screen-w:text-4xl" : "space-y-2 screen-w:space-y-4 text-xs screen-w:text-3xl"}`)}>
        <span className="w-full">{'时期'}</span>
        <span className="w-full">{'艺术家'}</span>
        <span className="w-full">{'地点'}</span>
        <span className="w-full">{'主办/主办'}</span>
        <span className="w-full">{'支持'}</span>
    </div>
  ),
  TH:(orient, font) => (
    <div className={clsx(orient 
      ? `flex flex-col w-1/4 text-Ablue font-bold ${font ? "space-y-4 screen-w:space-y-8 text-sm screen-w:text-4xl" : "space-y-2 screen-w:space-y-4 text-xs screen-w:text-3xl"}` 
      : `flex flex-col w-1/3 text-Ablue font-bold ${font ? "space-y-4 screen-w:space-y-8 text-sm screen-w:text-4xl" : "space-y-2 screen-w:space-y-4 text-xs screen-w:text-3xl"}`)}>
        <span className="w-full">{'ระยะเวลา'}</span>
        <span className="w-full">{'ศิลปิน'}</span>
        <span className="w-full">{'ที่ตั้ง'}</span>
        <span className="w-full">{'จัด/เป็นเจ้าภาพโดย'}</span>
        <span className="w-full">{'สนับสนุน'}</span>
    </div>
  ),
  VI:(orient, font) => (
    <div className={clsx(orient 
      ? `flex flex-col w-1/4 text-Ablue font-bold ${font ? "space-y-4 screen-w:space-y-8 text-sm screen-w:text-4xl" : "space-y-2 screen-w:space-y-4 text-xs screen-w:text-3xl"}` 
      : `flex flex-col w-1/3 text-Ablue font-bold ${font ? "space-y-4 screen-w:space-y-8 text-sm screen-w:text-4xl" : "space-y-2 screen-w:space-y-4 text-xs screen-w:text-3xl"}`)}>
        <span className="w-full">{'Giai đoạn'}</span>
        <span className="w-full">{'nghệ sĩ'}</span>
        <span className="w-full">{'vị trí'}</span>
        <span className="w-full">{'Được tổ chức/chủ trì bởi'}</span>
        <span className="w-full">{'ủng hộ'}</span>
    </div>
  ),
};

const inputData = {
  KOR: allExhibits_KOR,
  ENG: allExhibits_ENG,
  CH: allExhibits_CH,
  TH: allExhibits_TH,
  VI: allExhibits_VI
};

const inputPaint = {
  KOR: paintList_KOR,
  ENG: paintList_ENG,
  CH: paintList_CH,
  TH: paintList_TH,
  VI: paintList_VI
}

const CoverflowCarousel = ({index}) => {
  const [isClient, setIsClient] = useState(false);
  const {language} = useContext(LanguageContext);
  const {isPortrait} = useContext(ScreenOrientContext);
  const {fontsize} = useContext(FontsizeContext);
  const [popup, setPopup] = useState(false);
  const [list, setList] = useState(null);
  const [highlightedImageIndex, setHighlightedImageIndex] = useState(0); // Initialize with the first slide
  const router = useRouter();
  const path = "https://schema-kiosk.com"

  useEffect(() => {
    // Update the isClient state to true as this code will be executed only on client side
    setIsClient(true);
    // const order = allExhibits[index].index; 
    const order = inputData[language][index].index;
    router.replace(`?index=${highlightedImageIndex + 1}&year=${order}`)
    // if(allExhibits[index]) {
    if(inputData[language][index]){
      setList(order);
      // setTime(year);
    }
  }, [inputData, language, highlightedImageIndex]);

  const handleSlideChange = (swiper) => {
    setHighlightedImageIndex(swiper.activeIndex);
  };

  // console.log(inputPaint[language][list]?.[highlightedImageIndex]?.length)
  return (
    <>
      {/* <!-- Coverflow Slider --> */}
      {isClient && (
            <div className="w-11/12 h-5/6 screen-w:h-[90%] mx-auto p-3 screen-w:px-10 screen-w:py-16">
            {popup && (
              <div className={clsx(isPortrait ? "absolute top-0 left-0 h-[92%] screen-w:h-[97.5%] w-screen bg-Ablack bg-opacity-60 z-20" : "absolute top-0 left-0 h-[91.5%] screen-w:h-[92.7%] w-screen bg-Ablack bg-opacity-60 z-20")}>
                <div className={clsx(isPortrait ? "w-5/6 h-5/6 flex flex-row space-x-4 screen-w:space-x-16 mx-auto items-end justify-center" : "w-5/6 h-5/6 flex flex-row space-x-4 screen-w:space-x-16 mx-auto items-center justify-center")}>
                 {inputData[language][list]?.exhibits[highlightedImageIndex]?.artist_info.length > 0 && (
                   <button 
                   className={clsx(isPortrait ? "h-1/4 w-2/5 text-base screen-w:text-6xl text-Awhite font-bold rounded-lg bg-gradient-to-r from-Bblue to-Ablue" : "h-1/3 w-1/3 text-base screen-w:text-6xl text-Awhite font-bold rounded-lg bg-gradient-to-r from-Bblue to-Ablue")}
                   onClick={()=> router.push(`/artist/${list}?order=${highlightedImageIndex}`)}
                 >
                     {popupText1[language]}
                 </button>
                 )}
                  {inputPaint[language][list]?.[highlightedImageIndex]?.length > 0 && (
                    <button
                    className={clsx(isPortrait ? "h-1/4 w-2/5 text-base screen-w:text-6xl text-Awhite font-bold rounded-lg bg-gradient-to-r from-Bblue to-Ablue" : "h-1/3 w-1/3 text-base screen-w:text-6xl text-Awhite font-bold rounded-lg bg-gradient-to-r from-Bblue to-Ablue")}
                    onClick={()=> router.push(`/viewpage/${inputPaint[language][list][highlightedImageIndex][0].order}?order=${highlightedImageIndex}&year=${list}`)}
                    >
                      {popupText2[language]}
                      {/* <QRCode 
                        className="flex mx-auto my-24"
                        size={128}
                        value={path + `/viewpage/${paintList[list][highlightedImageIndex][0].order}?order=${highlightedImageIndex}&year=${list}`}
                      />
                      <span className="text-4xl">
                        {popupText4[language]}
                      </span> */}
                  </button>
                  )}
                </div>
                <button
                    onClick={()=>setPopup(!popup)}
                    className="absolute h-10 w-[200px] screen-w:h-28 screen-w:w-[500px] text-center text-base screen-w:text-4xl text-Awhite font-bold items-center bottom-28 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-Bblue to-Ablue">
                    {popupText3[language]}
                </button> 
              </div>
            )}
            {/* 전시 설명 컨테이너 */}
            <div className={clsx(isPortrait ? "flex flex-col space-y-12 screen-w:space-y-40 screen-w:justify-center" : "flex flex-row space-x-12 justify-between screen-w:space-x-40 screen-w:justify-center")}>
                <div className={clsx(isPortrait ? "justify-start flex flex-row space-x-12 w-11/12" : "justify-start flex flex-row space-x-4 w-1/3")}>
                    <span className={clsx("text-7xl font-bold text-Ablack", fontsize ? "text-8xl screen-w:text-[260px]" : "text-7xl screen-w:text-[250px]")}>{inputData[language][index].exhibits[highlightedImageIndex].order}</span>
                    <div className="flex flex-col space-y-2 screen-w:space-y-8 mt-6">
                        <div className="bg-Ablue h-[2px] w-[60px] screen-w:w-[100px] rounded-full"></div>
                        <span className={clsx("font-bold text-Cgrey", fontsize ? "text-lg screen-w:text-6xl" : "text-base screen-w:text-5xl")}>{inputData[language][index].exhibits[highlightedImageIndex].type}</span>
                        <span className={clsx("screen-w:text-6xl font-bold text-Ablack", fontsize ? "text-2xl screen-w:text-7xl leading-normal" : "text-lg screen-w:text-6xl leading-normal")}>{inputData[language][index].exhibits[highlightedImageIndex].title}</span>
                    </div>
                </div>
                <div className={clsx(isPortrait ? "flex flex-row justify-start space-x-8 w-11/12" : "flex flex-row justify-start space-x-4 screen-w:space-x-6 w-1/3")}>
                    {informText[language](isPortrait, fontsize)}
                    <div className={clsx("flex flex-col w-2/3 text-Agrey font-bold", fontsize ? "space-y-4 screen-w:space-y-8 text-sm screen-w:text-4xl" : "space-y-2 screen-w:space-y-4 text-xs screen-w:text-3xl")}>
                        {/* <span className={clsx("w-full", fontsize ? "h-[40px] text-sm screen-w:text-4xl" : "text-xs screen-w:text-3xl")}>{inputData[language][index].exhibits[highlightedImageIndex].time}</span>
                        <span className={clsx("w-full", fontsize ? "h-[40px] pt-1 text-sm screen-w:text-4xl whitespace-nowrap overflow-y-visible overflow-auto" : "h-[36px] text-xs screen-w:text-3xl whitespace-nowrap overflow-auto")}>{inputData[language][index].exhibits[highlightedImageIndex].artist}</span>
                        <span className={clsx("w-full", fontsize ? "h-[40px] text-sm screen-w:text-4xl" : "text-xs screen-w:text-3xl")}>{inputData[language][index].exhibits[highlightedImageIndex].location}</span>
                        <span className={clsx("w-full", fontsize ? "h-[40px] text-sm screen-w:text-4xl" : "text-xs screen-w:text-3xl")}>{inputData[language][index].exhibits[highlightedImageIndex].host}</span>
                        <span className={clsx("w-full", fontsize ? "h-[40px] text-sm screen-w:text-4xl" : "text-xs screen-w:text-3xl")}>{inputData[language][index].exhibits[highlightedImageIndex].support}</span> */}

                        <span className={clsx("w-full whitespace-nowrap overflow-auto")}>{inputData[language][index].exhibits[highlightedImageIndex].time}</span>
                        <span className={clsx("w-full whitespace-nowrap overflow-auto")}>{inputData[language][index].exhibits[highlightedImageIndex].artist}</span>
                        <span className={clsx("w-full whitespace-nowrap overflow-auto")}>{inputData[language][index].exhibits[highlightedImageIndex].location}</span>
                        <span className={clsx("w-full whitespace-nowrap overflow-auto")}>{inputData[language][index].exhibits[highlightedImageIndex].host}</span>
                        <span className={clsx("w-full whitespace-nowrap overflow-auto")}>{inputData[language][index].exhibits[highlightedImageIndex].support}</span>
                    </div>
                </div>
                <div className={clsx(isPortrait ? "flex space-y-4 w-11/12 flex-col justify-end overflow-auto scroll-smooth" : "flex space-y-2 screen-w:space-y-4 w-1/3 flex-col justify-end overflow-auto scroll-smooth")}>
                    <p className={clsx(isPortrait 
                      ? "h-[120px] screen-w:h-[700px] text-Ablack text-xs screen-w:text-4xl font-bold screen-w:leading-relaxed" 
                      : `h-[180px] screen-w:h-[450px] text-Ablack ${fontsize ? "text-sm screen-w:text-[40px]" : "text-xs screen-w:text-4xl"} font-bold screen-w:leading-relaxed`)}>
                        {inputData[language][index].exhibits[highlightedImageIndex].explanation}
                        <br />
                        {inputData[language][index].exhibits[highlightedImageIndex].author}
                    </p>
                </div>
            </div>
            <div className={clsx(isPortrait ? "relative px-6 screen-w:px-8 screen-w:py-48 sm:px-0 touch-none" : "relative px-6 screen-w:px-8 screen-w:py-12 sm:px-0 touch-none")}>
          {/* <!-- Swiper Slider --> */}
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              100: {
                // width: 640,
                slidesPerView: 2,
                spaceBetween: 20, // which adds 30px of space between each slide.
              },
              575: {
                // width: 640,
                slidesPerView: 3,
                spaceBetween: 20, // which adds 30px of space between each slide.
              },
              // when window width is >= 768px
              992: {
                // width: 768,
                slidesPerView: 5,
                spaceBetween: 30, // which adds 30px of space between each slide.
              },
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={5}
            loop={false}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-4",
              prevEl: ".swiper-button-prev-4",
            }}
            className="swiper coverflow-slider !py-5"
            onSlideChange={(swiper) => handleSlideChange(swiper)}
          >
            {inputData[language][index].exhibits
              // .slice()
              // .sort((a,b) => b.order- a.order)
              .map((item, idx)=> {
              const {order, title, img, author, location1} = item;
              return (
                <SwiperSlide key={idx}>
                  <article>
                    <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                      <figure className="relative">
                        <img 
                          className="w-[350px] h-[150px] screen-w:w-[1100px] screen-w:h-[700px]"
                          src={img}
                          alt={title}
                          onClick={()=>setPopup(!popup)}
                        />
                      </figure>
                      <div className="p-4 screen-w:p-6">
                        <div className="flex w-[350px] screen-w:w-[1100px]">
                          <div>
                            <div
                              onClick={()=>setPopup(!popup)}
                               className="block"
                            >
                              <span className="font-display text-xs screen-w:text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                                {title}
                              </span>
                            </div>
                            <div
                              onClick={()=>setPopup(!popup)}
                              className="text-2xs text-accent"
                            >
                              {location1}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* <!-- end coverflow slider --> */}
          <div className="swiper-button-prev-4 group absolute top-1/2 left-4 z-10 -mt-6 flex h-12 w-12 screen-w:h-36 screen-w:w-36 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-indigo-700 text-xl shadow-white-volume">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-24 w-24 screen-w:h-36 screen-w:w-36 fill-jacarta-700 group-hover:fill-accent"
              >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
              </svg>
          </div>
          <div className="swiper-button-next-4 group absolute top-1/2 right-4 z-10 -mt-6 flex h-12 w-12 screen-w:h-36 screen-w:w-36 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-indigo-700 text-xl shadow-white-volume">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="h-24 w-24 screen-w:h-36 screen-w:w-36 fill-jacarta-700 group-hover:fill-accent"
              >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
              </svg>
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default CoverflowCarousel;