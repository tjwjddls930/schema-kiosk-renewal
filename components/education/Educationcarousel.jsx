import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { educationData } from "@/data/educationData";

const Educationcarousel = ({index, index1}) => {
  const [isClient, setIsClient] = useState(false);
  const [list, setList] = useState(null);
  // const [time, setTime] = useState(null);

  useEffect(() => {
    // Update the isClient state to true as this code will be executed only on client side
    setIsClient(true);
    const order = educationData[index].order; 
    // const year = educationData[index].year;
    if(educationData[index]) {
      setList(order);
      // setTime(year);
    }
  }, [educationData[index]]);

  return (
    <>
      {/* <!-- Coverflow Slider --> */}
      {isClient && (
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
              // 1920: {
              //   // width: 940,
              //   // height: 940,
              //   slidesPerView:7,
              //   spaceBetween: 20,
              // }
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={5}
            loop={true}
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
          >
            {/* {coverflow_carousel_data.map((item, idx) => { */}
            {educationData[index].education.map((item, idx) => {
              const { id, img, location, title } = item;
              return (
                <SwiperSlide key={idx}>
                  <article>
                    <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                      <figure className="relative">
                        <Link href={`/education/program/${list}?index=${index1}`}>
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
        </div>
      )}
    </>
  );
};

export default Educationcarousel;