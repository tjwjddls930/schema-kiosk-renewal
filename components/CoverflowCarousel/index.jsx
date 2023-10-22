import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import { coverflow_carousel_data } from "@/data/sample_data";
import { allExhibits } from "@/data/pastExhibit";

const CoverflowCarousel = ({index, index1}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Update the isClient state to true as this code will be executed only on client side
    setIsClient(true);
  }, []);

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
            {allExhibits[index].exhibits.map((item, idx)=> {
              // const { id, img, authorImage, authorName, title } = item;
              const {order, title, img, author, location1} = item;
              return (
                <SwiperSlide key={idx}>
                  <article>
                    <div className="block overflow-hidden rounded-2.5xl bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-jacarta-700">
                      <figure className="relative">
                        <Link href={`/education/program/${order}`}>
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
                            <Link href={`/education/program/${order}`} className="block">
                              <span className="font-display text-xs screen-h:text-lg leading-none text-jacarta-700 hover:text-accent dark:text-white">
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
        </div>
      )}
    </>
  );
};

export default CoverflowCarousel;