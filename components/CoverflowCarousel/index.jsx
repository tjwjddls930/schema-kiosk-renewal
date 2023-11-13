import React, { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { allExhibits } from "@/data/pastExhibit";
import { paintData } from "@/data/paintData";
import { useRouter } from "next/router";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import { clsx } from "clsx";
import { paintData1, paintData2, paintData3, paintData4, paintData5, paintData6, paintData7 } from "@/data/paintData";

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

const informText = {
  KOR:(orient) => (
    <div className={clsx(orient ? "flex flex-col space-y-2 screen-w:space-y-4 w-1/4" : "flex flex-col space-y-2 screen-w:space-y-4 w-1/3")}>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'기간'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'아티스트'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'장소'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'주최/주관'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'후원'}</span>
    </div>
  ),
  ENG:(orient) => (
    <div className={clsx(orient ? "flex flex-col space-y-2 screen-w:space-y-4 w-1/4" : "flex flex-col space-y-2 screen-w:space-y-4 w-1/3")}>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'Period'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'Artist'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'Location'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'Organized/Host'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'Support'}</span>
    </div>
  ),
  CH:(orient) => (
    <div className={clsx(orient ? "flex flex-col space-y-2 screen-w:space-y-4 w-1/4" : "flex flex-col space-y-2 screen-w:space-y-4 w-1/3")}>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'时期'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'艺术家'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'地点'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'主办/主办'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'支持'}</span>
    </div>
  ),
  TH:(orient) => (
    <div className={clsx(orient ? "flex flex-col space-y-2 screen-w:space-y-4 w-1/4" : "flex flex-col space-y-2 screen-w:space-y-4 w-1/3")}>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'ระยะเวลา'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'ศิลปิน'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'ที่ตั้ง'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'จัด/เป็นเจ้าภาพโดย'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'สนับสนุน'}</span>
    </div>
  ),
  VI:(orient) => (
    <div className={clsx(orient ? "flex flex-col space-y-2 screen-w:space-y-4 w-1/4" : "flex flex-col space-y-2 screen-w:space-y-4 w-1/3")}>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'Giai đoạn'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'nghệ sĩ'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'vị trí'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'Được tổ chức/chủ trì bởi'}</span>
        <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'ủng hộ'}</span>
    </div>
  ),
};

const paintList = [
  paintData1, paintData2, paintData3, paintData4, paintData5, paintData6, paintData7
];

const CoverflowCarousel = ({index}) => {
  const [isClient, setIsClient] = useState(false);
  const {language} = useContext(LanguageContext);
  const {isPortrait} = useContext(ScreenOrientContext);
  const [popup, setPopup] = useState(false);
  const [list, setList] = useState(null);
  const [highlightedImageIndex, setHighlightedImageIndex] = useState(0); // Initialize with the first slide
  const router = useRouter();

  useEffect(() => {
    // Update the isClient state to true as this code will be executed only on client side
    setIsClient(true);
    const order = allExhibits[index].index; 
    // router.replace(`?year=${allExhibits[index].exhibits[highlightedImageIndex].year}&?index=${highlightedImageIndex}`)
    if(allExhibits[index]) {
      setList(order);
      // setTime(year);
    }
  }, [allExhibits, highlightedImageIndex]);

  const handleSlideChange = (swiper) => {
    setHighlightedImageIndex(swiper.activeIndex);
  };


  return (
    <>
      {/* <!-- Coverflow Slider --> */}
      {isClient && (
            <div className="w-11/12 h-5/6 screen-w:h-[90%] mx-auto p-3 screen-w:px-10 screen-w:py-16">
            {popup && (
              <div className={clsx(isPortrait ? "absolute top-0 left-0 h-[91%] screen-w:h-[97.5%] w-screen bg-Ablack bg-opacity-60 z-20" : "absolute top-0 left-0 h-[91%] screen-w:h-[92.7%] w-screen bg-Ablack bg-opacity-60 z-20")}>
                <div className={clsx(isPortrait ? "w-5/6 h-5/6 flex flex-row space-x-4 screen-w:space-x-16 mx-auto items-end justify-center" : "w-5/6 h-5/6 flex flex-row space-x-4 screen-w:space-x-16 mx-auto items-center justify-center")}>
                  <button 
                    className={clsx(isPortrait ? "h-1/4 w-2/5 text-base screen-w:text-6xl text-Awhite font-bold rounded-lg bg-gradient-to-r from-Bblue to-Ablue" : "h-1/3 w-1/3 text-base screen-w:text-6xl text-Awhite font-bold rounded-lg bg-gradient-to-r from-Bblue to-Ablue")}
                    onClick={()=> router.push(`/artist/${list}?order=${highlightedImageIndex}`)}
                  >
                      {popupText1[language]}
                  </button>
                  <button
                    className={clsx(isPortrait ? "h-1/4 w-2/5 text-base screen-w:text-6xl text-Awhite font-bold rounded-lg bg-gradient-to-r from-Bblue to-Ablue" : "h-1/3 w-1/3 text-base screen-w:text-6xl text-Awhite font-bold rounded-lg bg-gradient-to-r from-Bblue to-Ablue")}
                    onClick={()=> router.push(`/viewpage/${paintList[highlightedImageIndex][0].order}?order=${highlightedImageIndex}`)}
                    >
                      {popupText2[language]}
                  </button>
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
                    <span className="text-9xl screen-w:text-[250px] font-bold text-Ablack">{allExhibits[index].exhibits[highlightedImageIndex].order}</span>
                    <div className="flex flex-col space-y-2 screen-w:space-y-8 mt-6">
                        <div className="bg-Ablue h-[2px] w-[60px] screen-w:w-[100px] rounded-full"></div>
                        <span className="text-xl screen-w:text-5xl font-bold text-Cgrey">{allExhibits[index].exhibits[highlightedImageIndex].type}</span>
                        <span className="text-2xl screen-w:text-6xl font-bold text-Ablack">{allExhibits[index].exhibits[highlightedImageIndex].title}</span>
                    </div>
                </div>
                <div className={clsx(isPortrait ? "flex flex-row justify-start space-x-8 w-11/12" : "flex flex-row justify-start space-x-4 screen-w:space-x-6 w-1/3")}>
                    {informText[language](isPortrait)}
                    <div className="flex flex-col space-y-2 screen-w:space-y-4 w-2/3">
                        <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold">{allExhibits[index].exhibits[highlightedImageIndex].time1}</span>
                        <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold whitespace-nowrap overflow-auto">{allExhibits[index].exhibits[highlightedImageIndex].artist1}</span>
                        <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold">{allExhibits[index].exhibits[highlightedImageIndex].location1}</span>
                        <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold">{allExhibits[index].exhibits[highlightedImageIndex].host1}</span>
                        <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold">{allExhibits[index].exhibits[highlightedImageIndex].support1}</span>
                    </div>
                </div>
                <div className={clsx(isPortrait ? "flex space-y-4 w-11/12 flex-col justify-end overflow-auto scroll-smooth" : "flex space-y-4 w-1/3 flex-col justify-end overflow-auto scroll-smooth")}>
                    <p className={clsx(isPortrait ? "h-[180px] screen-w:h-[700px] text-Ablack text-xs screen-w:text-4xl font-bold screen-w:leading-relaxed" : "h-[180px] screen-w:h-[450px] text-Ablack text-xs screen-w:text-4xl font-bold screen-w:leading-relaxed screen-w:truncate")}>
                        {allExhibits[index].exhibits[highlightedImageIndex].explanation}
                        <br />
                        {allExhibits[index].exhibits[highlightedImageIndex].author}
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
            {allExhibits[index].exhibits.map((item, idx)=> {
              const {order, title, img, author, location1} = item;
              return (
                <SwiperSlide key={idx}>
                  <article>
                    <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                      <figure className="relative">
                        {/* <Image
                          width={450}
                          height={430}
                          src={img}
                          alt={title}
                          priority={true}
                          className="swiper-lazy object-cover"
                        /> */}
                        <img 
                          className="w-[450px] h-[250px] screen-w:w-[1100px] screen-w:h-[700px]"
                          src={img}
                          alt={title}
                          onClick={()=>setPopup(!popup)}
                        />
                      </figure>
                      <div className="p-4 screen-w:p-6">
                        <div className="flex w-[450px] screen-w:w-[1100px]">
                          {/* <Link href={`/author/${id}`} className="shrink-0">
                            <Image
                              width={40}
                              height={40}
                              src={authorImage}
                              alt="avatar"
                              className="mr-4 h-10 w-10 rounded-full"
                            />
                          </Link> */}
                          <div>
                            <Link
                               href={`/education/program/${order}`}
                               className="block"
                            >
                              <span className="font-display text-xs screen-w:text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                                {title}
                              </span>
                            </Link>
                            <Link
                              href={`/education/author/${order}`}
                              className="text-2xs text-accent"
                            >
                              {location1}
                            </Link>
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