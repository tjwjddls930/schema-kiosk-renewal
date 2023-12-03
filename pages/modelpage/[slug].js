import { useState, useEffect, Suspense, useContext } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/navbar/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MathUtils } from "three";
import * as THREE from 'three';
import clsx from "clsx";
import { LanguageContext } from "@/contexts/LanguageContext";
import { ScreenOrientContext } from "@/contexts/ScreenOrientContext";
import Spot from "@/components/Spotlight";
import IDBAnimationModel from "@/components/IndexedDB";
import { modelData_KOR, modelData_ENG, modelData_CH, modelData_TH, modelData_VI } from "@/data/modelData";
import { isMobile } from "react-device-detect";

const iconText1 = {
    KOR: "초기화",
    ENG: "Reset",
    CH: "重置",
    TH: "รีเซ็ต",
    VI: "cài lại",
};

const iconText2 = {
    KOR: "작품해설",
    ENG: "Commentary on the Work",
    CH: "对作品的评论",
    TH: "ความเห็นเกี่ยวกับการทำงาน",
    VI: "Bình luận về tác phẩm",
};

const iconText3 = {
    KOR: "챗봇안내",
    ENG: "Chatbot Guide",
    CH: "聊天机器人信息",
    TH: "ข้อมูลแชทบอท",
    VI: "Thông tin Chatbot",
};

const popupText = {
    KOR: "화면 터치 후 확대해 보세요!",
    ENG: "Touch the screen to zoom in!",
    CH: "触摸屏幕即可放大！",
    TH: "แตะที่หน้าจอเพื่อซูมเข้า!",
    VI: "Chạm vào màn hình để phóng to!",
};

const inputData = {
    KOR: modelData_KOR,
    ENG: modelData_ENG,
    CH: modelData_CH,
    TH: modelData_TH,
    VI: modelData_VI,
};

export default function Modelpage({}) {
    const {language} = useContext(LanguageContext);
    const {isPortrait} = useContext(ScreenOrientContext);
    const router = useRouter();
    const {slug} = router.query;
    const [popup, setPopup] = useState(true);
    const [data, setData] = useState(null);
    const [color, setColor] = useState("#F5F049");

    useEffect(()=> {
        // Fetch and set data based on the slug from the router
        const mid = slug?.replace("", "");
        if(slug !== undefined && inputData?.[language]?.[mid]) {
            setData(inputData[language][mid]);
        }
    }, [slug, language])

    const changeExhibit = (offset) => {
        const currentIndex = Number(slug?.replace("", ""));
        let newIndex = currentIndex + offset;
        if (newIndex < 0) {
          newIndex = inputData[language].length - 1;
        } else if (newIndex >= inputData[language].length) {
          newIndex = 0;
        }

        router.replace(`/modelpage/${newIndex}`);
    };
    function handleRefresh() {
        router.reload();
    };
    // console.log(modelData);
    return(
        <div className="h-screen w-screen bg-Awhite bg-cover bg-no-repeat">
            {/* 3D 콘텐츠 구역 */}
            {data && (
                <>
                    {/* <Modelcontent 
                        url={data.url}
                        scale={data.scale}
                        position={data.position}
                    /> */}
                    <div className="h-[91%] w-full absolute bottom-16 screen-w:h-[95%] screen-w:bottom-28 left-1/2 transform -translate-x-1/2 bg-Awhite">
                        <div className="h-[50px] w-[50px] z-10 screen-w:h-[150px] screen-w:w-[150px] absolute bottom-20 screen-w:bottom-60 right-20 border-2 border-Ablack rounded-full bg-orange"
                            onClick={()=> setColor("#F5F049")}
                        />
                        <div className="h-[50px] w-[50px] z-10 screen-w:h-[150px] screen-w:w-[150px] absolute bottom-20 screen-w:bottom-60 right-64 border-2 border-Ablack rounded-full bg-Awhite"
                            onClick={()=> setColor("#FFFFFF")}
                        />
                        <Suspense fallback={null}>
                            <Canvas
                                gl={{
                                    antialias:true,
                                    colorSpace: THREE.LinearSRGBColorSpace,
                                    toneMapping: THREE.ACESFilmicToneMapping,
                                    toneMappingExposure: 1.0,
                                }}
                                camera={{
                                    fov: 75,
                                    aspect: window.innerWidth / window.innerHeight,
                                    near: 0.01,
                                    far: 10000,
                                    position: [0, 0, 10],
                                    rotation: [0, 0, 0]
                                }}
                                shadows
                            >
                                <Suspense fallback={null}>
                                    <IDBAnimationModel 
                                        keyName={data.keyname}
                                        modelSrc={data.url}
                                        position={data.position}
                                        rotation={[0, 0, 0]}
                                        scale={data.scale}
                                    />
                                </Suspense>
                                <OrbitControls 
                                    minDistance={1.5}
                                    maxDistance={5}
                                    minAzimuthAngle={MathUtils.degToRad(-45)}
                                    maxAzimuthAngle={MathUtils.degToRad(45)}
                                    maxPolarAngle={MathUtils.degToRad(90)}
                                    minPolarAngle={MathUtils.degToRad(70)}
                                    makeDefault
                                />
                                <mesh position={[0, 0, -4]} rotation={[0, 0, 0]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[100, 100, 2]} />
                                    <meshPhongMaterial color={"#FFFFFF"} attach="material" />
                                </mesh>
                                <Spot position={[0, 8, 5]} color={color} />
                                <ambientLight intensity={3} />
                                {/* <color attach="background" args={["#FFFFFF"]} /> */}
                            </Canvas>
                        </Suspense>
                    </div>
                    {popup && (
                        <div className={clsx(isPortrait ? "absolute bg-Ablack bg-opacity-40 h-[91%] w-[600px] bottom-16 screen-w:h-[97%] screen-w:w-[1500px] screen-w:bottom-28 left-1/2 transform -translate-x-1/2" : "absolute bg-Ablack bg-opacity-40 h-[91%] w-[600px] bottom-16 screen-w:h-[95%] screen-w:w-[1700px] screen-w:bottom-28 left-1/2 transform -translate-x-1/2")}
                            onClick={()=>setPopup(!popup)}
                        >
                            <div className={clsx(isPortrait ? "w-5/6 h-5/6 flex flex-col space-y-32 screen-w:space-y-[650px] px-4 mt-16 screen-w:px-8 screen-w:mt-48 mx-auto items-center justify-end text-center" : "w-5/6 flex flex-col space-y-32 screen-w:space-y-[650px] px-4 mt-16 screen-w:px-8 screen-w:mt-48 mx-auto items-center justify-center text-center")}>
                                <div className="flex flex-col space-y-2">
                                    <span className="text-Awhite font-bold text-screen-w screen-w:text-6xl">{data.title}</span>
                                    <span className="text-Dgrey font-bold text-xl screen-w:text-5xl">{''}</span>
                                </div>
                                <div className="flex flex-col space-y-2 mx-auto w-full screen-w:space-y-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                        className="h-20 w-20 animate-bounce mx-auto screen-w:h-40 screen-w:w-40 text-Awhite">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                    </svg>
                                    <span className="text-Awhite font-bold text-base screen-w:text-4xl">{popupText[language]}</span>
                                </div>
                                <div className="flex flex-col w-full mx-auto">
                                    <div className="flex justify-between w-full">
                                        <div className="flex flex-col space-y-2">
                                            <span className="font-bold text-Awhite text-lg screen-w:text-3xl">{data.name}</span>
                                            <span className="font-bold text-Awhite text-base screen-w:text-3xl">{data.overview}</span>
                                            <span className="font-bold text-Awhite text-base screen-w:text-3xl">{data.overview1}</span>
                                        </div>
                                        <span className="font-bold text-Awhite text-5xl screen-w:text-7xl">{data.order}{'.'}</span>
                                    </div>
                                    <div className="h-[1px] w-full bg-Awhite mt-3 screen-w:mt-4"/>
                                </div>
                            </div>
                        </div>
                    )}
                </>
            )}
            {/* 그림 넘기기 버튼 */}
            <div className={clsx(isPortrait ? "absolute h-[70px] w-[70px] left-40 bottom-80 screen-w:left-36 screen-w:top-1/2 screen-w:transform screen-w:-translate-y-1/2" : "absolute h-[70px] w-[70px] left-40 bottom-80 screen-w:h-[300px] screen-w:w-[300px] screen-w:left-96 screen-w:top-1/2 screen-w:transform screen-w:-translate-y-1/2")}>
                <button
                    id="left"
                    className="h-full w-full screen-w:h-[140px] screen-w:w-[140px]"
                    onClick={()=>changeExhibit(-1)}
                >   
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" 
                        className="w-12 h-12 screen-w:w-40 screen-w:h-40 text-Ablack"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
            <div className={clsx(isPortrait ? "absolute h-[70px] w-[70px] right-40 bottom-80 screen-w:right-56 screen-w:top-1/2 screen-w:transform screen-w:-translate-y-1/2" : "absolute h-[70px] w-[70px] right-40 bottom-80 screen-w:h-[300px] screen-w:w-[300px] screen-w:right-96 screen-w:top-1/2 screen-w:transform screen-w:-translate-y-1/2")}>
                <button
                    id="right"
                    className="h-full w-full screen-w:h-[140px] screen-w:w-[140px]"
                    onClick={()=>changeExhibit(1)}
                >   
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" 
                        className="w-12 h-12 screen-w:w-40 screen-w:h-40 text-Ablack"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            {/* 초기화 */}
            <div className="h-[200px] w-[100px] absolute left-10 bottom-80 screen-w:h-[750px] screen-w:w-[200px] screen-w:left-24 screen-w:bottom-[530px]">
                <div className="flex flex-col mx-auto text-center space-y-2 screen-w:space-y-4">
                    <button 
                        className="h-12 w-12 ml-6 screen-w:h-40 screen-w:w-40 screen-w:ml-4"
                        onClick={handleRefresh}
                    > 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="h-full w-full text-Ablack">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    </button>
                    <span className="text-Ablack text-base font-bold screen-w:text-3xl">{iconText1[language]}</span>
                </div>
            </div>
            {/* 작품해설 */}
            <div className="h-[130px] w-[100px] absolute left-10 bottom-72 screen-w:h-[600px] screen-w:w-[200px] screen-w:left-24 screen-w:bottom-[430px]">
                <div className="flex flex-col mx-auto text-center space-y-2 screen-w:space-y-4">
                    <button className="h-12 w-12 ml-6 screen-w:h-40 screen-w:w-40 screen-w:ml-4"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-full h-full text-Ablack">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        </button>
                        <span className="text-Ablack text-base font-bold screen-w:text-3xl">{iconText2[language]}</span>
                </div>
            </div>
            {/* 챗봇안내 */}
            <div className="h-[130px] w-[100px] absolute left-10 bottom-48 screen-w:h-[600px] screen-w:w-[200px] screen-w:left-24 screen-w:bottom-40">
                <div className="flex flex-col mx-auto text-center space-y-2 screen-w:space-y-4">
                    <button className="h-12 w-12 ml-6 screen-w:h-40 screen-w:w-40 screen-w:ml-4"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-full h-full text-Ablack">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                        </svg>
                    </button>
                        <span className="text-Ablack text-base font-bold screen-w:text-3xl">{iconText3[language]}</span>
                </div>
            </div>
            {/* 뒤로 가기 */}
            <button className={clsx("absolute left-16 bottom-28 screen-w:left-28 screen-w:bottom-44", isMobile ? "" : "hidden")}
                onClick={async ()=> router.back()}
            >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </button>
            <button className={clsx("absolute left-16 bottom-44 screen-w:left-28 screen-w:bottom-[340px]", isMobile ? "" : "hidden")}
                onClick={async ()=> router.push("/main")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 screen-w:h-36 screen-w:w-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </button>
            {isMobile 
            ? <Navbar />
            : null}  
        </div>
    )
};


