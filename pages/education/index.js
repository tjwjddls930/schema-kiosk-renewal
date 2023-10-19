import React from "react";
import CoverflowCarousel from "@/components/CoverflowCarousel";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";

export default function Educationpage() {
    return (
        <div className="h-screen w-screen bg-[url('/img/exhibitpage/artist_select_background.png')] bg-cover bg-no-repeat">
            <div className="w-full p-10 screen-w:p-20 flex flex-row justify-between">
                <div className="flex flex-row z-10">
                    <Image 
                        className="mr-6"
                        src="/img/mainpage/schema-logo.png"
                        height="80"
                        width="160"
                        alt="logo"
                        style={{
                            width: "auto",
                            height: "auto"
                        }}
                    />
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold mt-2">{'교육프로그램'}</span>
                </div>
                <div>
                    <span className="text-Cgrey text-base screen-w:text-4xl font-bold">{'모두를 위한 박물관 - Smart Space SAM'}</span>
                </div>
              </div>
          <CoverflowCarousel />
          <Navbar />
        </div>
      );
};