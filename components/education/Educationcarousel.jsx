import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { educationData } from "@/data/educationData";
import { useRouter } from "next/router";

const Educationcarousel = ({index}) => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const [list, setList] = useState(null);
  const [highlightedImageIndex, setHighlightedImageIndex] = useState(0); // Initialize with the first slide
  const handleSlideChange = (swiper) => {
    setHighlightedImageIndex(swiper.activeIndex);
  };
  useEffect(() => {
    // Update the isClient state to true as this code will be executed only on client side
    setIsClient(true);
    const order = educationData[index].order; 
    router.replace(`?year=${educationData[index].education[highlightedImageIndex].year}&?index=${highlightedImageIndex}`)
    if(educationData[index]) {
      setList(order);
      // setTime(year);
    }
  }, [educationData[index], highlightedImageIndex]);

  return (
    <>
      {/* <!-- Coverflow Slider --> */}
      {isClient && (
             <div className="w-11/12 h-5/6 screen-w:h-[90%] mx-auto p-3 screen-w:px-10 screen-w:py-16">
             {/* 전시 설명 컨테이너 */}
             <div className="flex flex-row space-x-12 justify-between screen-w:space-x-40 screen-w:justify-center">
                 <div className="justify-start flex flex-row space-x-4 w-1/3">
                     <span className="text-9xl screen-w:text-[150px] font-bold text-Ablack">{educationData[index].education[highlightedImageIndex].id}</span>
                     <div className="flex flex-col space-y-2 screen-w:space-y-8 mt-6">
                         <div className="bg-Ablue h-[2px] w-[60px] screen-w:w-[100px] rounded-full"></div>
                         <span className="text-xl screen-w:text-5xl font-bold text-Cgrey">{educationData[index].education[highlightedImageIndex].type}</span>
                         <span className="text-2xl screen-w:text-6xl font-bold text-Ablack">{educationData[index].education[highlightedImageIndex].title}</span>
                     </div>
                 </div>
                 <div className="flex flex-row justify-start space-x-4 screen-w:space-x-6 w-1/3">
                     <div className="flex flex-col space-y-2 screen-w:space-y-4 w-1/3">
                         <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'기간'}</span>
                         <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'참여대상'}</span>
                         <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'장소'}</span>
                         <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'주최'}</span>
                         <span className="w-full text-Ablue text-xs screen-w:text-3xl font-bold">{'후원'}</span>
                     </div>
                     <div className="flex flex-col space-y-2 screen-w:space-y-4 w-2/3">
                         <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold whitespace-nowrap overflow-auto">{educationData[index].education[highlightedImageIndex].time}</span>
                         <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold whitespace-nowrap overflow-auto">{educationData[index].education[highlightedImageIndex].participate}</span>
                         <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold whitespace-nowrap overflow-auto">{educationData[index].education[highlightedImageIndex].location}</span>
                         <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold whitespace-nowrap overflow-auto">{educationData[index].education[highlightedImageIndex].host}</span>
                         <span className="w-full text-Agrey text-xs screen-w:text-3xl font-bold whitespace-nowrap overflow-auto">{educationData[index].education[highlightedImageIndex].support}</span>
                     </div>
                 </div>
                 <div className="flex space-y-2 w-1/3 justify-end overflow-auto scroll-smooth">
                     <p className="h-[180px] screen-w:h-[450px] text-black text-xs screen-w:text-4xl font-bold leading-normal">
                         {educationData[index].education[highlightedImageIndex].explanation}
                     </p>
                 </div>
             </div>
             <div className="relative px-6 screen-w:px-8 screen-w:py-12 sm:px-0">
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
              {/* {coverflow_carousel_data.map((item, idx) => { */}
              {educationData[index].education.map((item, idx) => {
                const { id, img, location, title } = item;
                return (
                  <SwiperSlide key={idx}>
                    <article>
                      <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                        <figure className="relative">
                          <Link href={`/education/program/${list}?index=${highlightedImageIndex}`}>
                            <img 
                              className="w-[450px] h-[250px] screen-w:w-[1200px] screen-w:h-[600px]"
                              src={img}
                              alt={title}
                            />
                          </Link>
                        </figure>
                        <div className="p-4 screen-w:p-6">
                          <div className="flex w-[450px] screen-w:w-[1100px]">
                            <div>
                              <span className="font-display text-xs screen-h:text-2xl leading-none text-jacarta-700 hover:text-accent dark:text-white">
                                {title}
                              </span>
                              <span className="font-display text-xs screen-h:text-2xl leading-none text-jacarta-700 hover:text-accent dark:text-white">
                                {location}
                              </span>
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

export default Educationcarousel;