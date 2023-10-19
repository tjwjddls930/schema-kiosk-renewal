import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import { coverflow_carousel_data } from "@/data/sample_data";
import { allExhibits } from "@/data/pastExhibit";

const CoverflowCarousel = ({index}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Update the isClient state to true as this code will be executed only on client side
    setIsClient(true);
  }, []);
  let length = allExhibits.length;

  function nextExhibit(e) {
       setButton(e.target.id)
       setCurrent(Number(pid) + 1 === length ? 0 : Number(pid) + 1);
   };

   function prevExhibit(e) {
       setButton(e.target.id)
       setCurrent(pid - 1 < 0 ? length - 1 : pid - 1);
   };

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
            {coverflow_carousel_data.map((item, idx) => {
              const { id, img, authorImage, authorName, title } = item;
              return (
                <SwiperSlide key={idx}>
                  <article>
                    <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                      <figure className="relative">
                        <Link href={`/education/program/${id}`}>
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
                          />
                        </Link>
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
                            <Link href={`/education/program/${id}`} className="block">
                              <span className="font-display text-xs screen-h:text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
                                {title}
                              </span>
                            </Link>
                            <Link
                              href={`/education/author/${id}`}
                              className="text-2xs text-accent"
                            >
                              {authorName}
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

          <div className="swiper-button-prev-4 group absolute top-1/2 left-4 z-10 -mt-6 flex h-12 w-12 screen-w:h-36 screen-w:w-36 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl shadow-white-volume">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              // width="24"
              // height="24"
              className="h-24 w-24 screen-w:h-36 screen-w:w-36 fill-jacarta-700 group-hover:fill-accent"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
            </svg>
          </div>
          <div className="swiper-button-next-4 group absolute top-1/2 right-4 z-10 -mt-6 flex h-12 w-12 screen-w:h-36 screen-w:w-36 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl shadow-white-volume">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              // width="24"
              // height="24"
              className="h-24 w-24 screen-w:h-36 screen-w:w-36 fill-jacarta-700 group-hover:fill-accent"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
            </svg>
          </div>

          {/* <!-- end coverflow slider --> */}
        </div>
      )}
    </>
  );
};

export default CoverflowCarousel;