import { useState, useEffect, Suspense } from "react";
import { useRouter } from "next/router";
import { modelData } from "@/data/modelData";
import Navbar from "@/components/navbar/Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Modelanimation from "@/components/Modelanimation";
import { MathUtils } from "three";
import * as THREE from 'three';

export default function Modelpage({}) {
    const router = useRouter();
    const {slug} = router.query;
    const [popup, setPopup] = useState(true);
    const [data, setData] = useState(null);

    useEffect(()=> {
        // Fetch and set data based on the slug from the router
        const mid = slug?.replace("", "");
        if(slug !== undefined && modelData[mid]) {
            setData(modelData[mid]);
        }
    }, [slug])

    const changeExhibit = (offset) => {
        const currentIndex = Number(slug?.replace("", ""));
        let newIndex = currentIndex + offset;
        if (newIndex < 0) {
          newIndex = modelData.length - 1;
        } else if (newIndex >= modelData.length) {
          newIndex = 0;
        }

        // router.push(`/modelpage/${newIndex}`)
        router.replace(`/modelpage/${newIndex}`);
        // Use the callback function of router.replace
        //router.replace(`/modelpage/${newIndex}`, undefined, { scroll: false, shallow: true }, { locale: false }, () => {
        // This code will execute after the route has been changed
        //window.location.reload();
        //});
    };
    function handleRefresh() {
        router.reload();
    };
    console.log(data);
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
                    <div className="h-[91%] w-full absolute bottom-16 screen-w:h-[94%] screen-w:bottom-28 left-1/2 transform -translate-x-1/2 bg-Awhite">
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
                                <directionalLight intensity={2} position={[0, 0, 2]} />
                                <Suspense fallback={null}>
                                    <Modelanimation 
                                        modelName={data.url}
                                        position={data.position}
                                        rotation={[0, 0, 0]}
                                        scale={data.scale}
                                    />
                                </Suspense>
                                <OrbitControls 
                                    minDistance={1.5}
                                    maxDistance={5}
                                    maxPolarAngle={MathUtils.degToRad(90)}
                                    minPolarAngle={MathUtils.degToRad(70)}
                                    makeDefault
                                />
                                <ambientLight intensity={3} />
                                <color attach="background" args={["#FFFFFF"]} />
                            </Canvas>
                        </Suspense>
                    </div>
                    {popup && (
                        <div className="absolute bg-Cgrey bg-opacity-30 h-[91%] w-[600px] bottom-16 screen-w:h-[94%] screen-w:w-[1700px] screen-w:bottom-32 left-1/2 transform -translate-x-1/2"
                            onClick={()=>setPopup(!popup)}
                        >
                            <div className="w-5/6 flex flex-col space-y-32 screen-w:space-y-[650px] px-4 mt-16 screen-w:px-8 screen-w:mt-48 mx-auto items-center justify-center text-center">
                                <div className="flex flex-col space-y-2">
                                    <span className="text-Awhite font-bold text-screen-w screen-w:text-5xl">{data.title}</span>
                                    <span className="text-Dgrey font-bold text-xl screen-w:text-4xl">{''}</span>
                                </div>
                                <div className="flex flex-col space-y-2 mx-auto w-full screen-w:space-y-4">
                                    <img 
                                        className="h-20 w-20 animate-bounce mx-auto screen-w:h-40 screen-w:w-40"
                                        src="/img/exhibitpage/icons/화면확대_아이콘.png"
                                        alt="toucn icon"
                                    />
                                    <span className="text-Dgrey font-bold text-base screen-w:text-screen-w">{'확대해서 그림을 더 자세히 감상해보세요!'}</span>
                                </div>
                                <div className="flex flex-col w-full mx-auto">
                                    <div className="flex justify-between w-full">
                                        <div className="flex flex-col space-y-2">
                                            <span className="font-bold text-Awhite text-lg screen-w:text-3xl">{data.name}</span>
                                            <span className="font-bold text-Awhite text-base screen-w:text-screen-w">{data.overview}</span>
                                            <span className="font-bold text-Awhite text-base screen-w:text-screen-w">{data.overview1}</span>
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
            <div className="absolute h-[70px] w-[70px] left-40 bottom-80 screen-w:h-[300px] screen-w:w-[300px] screen-w:left-96 screen-w:top-1/2 screen-w:transform screen-w:-translate-y-1/2">
                <button
                    id="left"
                    className="h-full w-full screen-w:h-[140px] screen-w:w-[140px]"
                    onClick={()=>changeExhibit(-1)}
                >   
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" 
                        className="w-6 h-6 screen-w:w-40 screen-w:h-40 text-Ablack"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
            <div className="absolute h-[70px] w-[70px] right-40 bottom-80 screen-w:h-[300px] screen-w:w-[300px] screen-w:right-96 screen-w:top-1/2 screen-w:transform screen-w:-translate-y-1/2">
                <button
                    id="right"
                    className="h-full w-full screen-w:h-[140px] screen-w:w-[140px]"
                    onClick={()=>changeExhibit(1)}
                >   
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" 
                        className="w-6 h-6 screen-w:w-40 screen-w:h-40 text-Ablack"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            {/* 초기화 */}
            <div className="h-[200px] w-[100px] absolute left-10 bottom-96 screen-w:h-[750px] screen-w:w-[200px] screen-w:left-24 screen-w:bottom-56">
                <div className="flex flex-col mx-auto text-center space-y-2 screen-w:space-y-4">
                    <button 
                        className="h-20 w-20 ml-2 screen-w:h-40 screen-w:w-40 screen-w:ml-4"
                        onClick={handleRefresh}
                    > 
                        {/* <img
                            className="h-full w-full"
                            src="/img/exhibitpage/icons/감상모드_아이콘.png"
                            alt="감상모드"
                        /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                            className="h-full w-full text-Ablack">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </button>
                    <span className="text-Ablack text-xl font-bold screen-w:text-3xl">{'초기화'}</span>
                </div>
            </div>
            {/* 작품해설 */}
            <div className="h-[130px] w-[100px] absolute left-10 bottom-72 screen-w:h-[600px] screen-w:w-[200px] screen-w:left-24 screen-w:bottom-24">
                <div className="flex flex-col mx-auto text-center space-y-2 screen-w:space-y-4">
                    <button className="h-20 w-20 ml-2 screen-w:h-40 screen-w:w-40 screen-w:ml-4"> 
                            {/* <img
                                className="h-full w-full"
                                src="/img/exhibitpage/icons/작품해설_아이콘.png"
                                alt="작품해설"
                            /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                            className="w-full h-full text-Ablack">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                        </button>
                        <span className="text-Ablack text-xl font-bold screen-w:text-3xl">{'작품해설'}</span>
                </div>
            </div>
            {/* 뒤로 가기 */}
            <button className="absolute left-14 bottom-28 screen-w:left-28 screen-w:bottom-44"
                onClick={async ()=> router.back()}
            >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 screen-w:w-36 screen-w:h-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </button>
            <button className="absolute left-36 bottom-28 screen-w:left-72 screen-w:bottom-44"
                onClick={async ()=> router.push("/")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-16 h-16 screen-w:h-36 screen-w:w-36 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
            </button>
              {/* <ViewNavbar 
            url={"/video/docent/blue-docent-test-02-removed.webm"}
            lang={"viewpage"}
            pid={mid}
            /> */}
            <Navbar 
                url={"/video/docent/schema-docent-04.webm"}
                sign={"/video/sign/schema_sign_2.mp4"}
            />  
        </div>
    )
};


