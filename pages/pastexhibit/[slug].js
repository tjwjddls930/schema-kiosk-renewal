import Spot from "@/components/Spotlight";
import IDBAnimationModel from "@/components/IndexedDB";
import { Canvas } from "@react-three/fiber";
import { useRouter } from "next/router";
import { useState, useEffect, Suspense } from "react";
import { modelData } from "@/data/modelData";
import * as THREE from 'three';
import { MathUtils } from "three";
import { OrbitControls } from "@react-three/drei";
// import InactivityRedirect from "@/components/InactivityRedirect";

export default function Collectionpage() {
    const [data, setData] = useState(null);
    const [popup, setPopup] = useState(true);
    const router = useRouter();
    const {slug} = router.query;

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

        router.replace(`/pastexhibit/${newIndex}`);
    };
    function handleRefresh() {
        router.reload();
    };
    return(
        <div className="h-screen w-screen bg-white">
            {/* 3D 콘텐츠 구역 */}
            {data && (
                <>
                    <div className="h-full w-full absolute left-1/2 transform -translate-x-1/2 bg-white">
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
                                    <meshPhongMaterial color={"#5c92de"} attach="material" />
                                </mesh>
                                <mesh position={[50, 0, 46]} rotation={[0, MathUtils.degToRad(90), 0]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[100, 100, 2]} />
                                    <meshPhongMaterial color={"#5c92de"} attach="material" />
                                </mesh>
                                <mesh position={[-50, 0, 46]} rotation={[0, MathUtils.degToRad(90), 0]} receiveShadow>
                                    <boxGeometry attach="geometry" args={[100, 100, 2]} />
                                    <meshPhongMaterial color={"#5c92de"} attach="material" />
                                </mesh>
                                <Spot position={[0, 8, 5]} />
                                <ambientLight intensity={3} />
                                {/* <color attach="background" args={["#FFFFFF"]} /> */}
                            </Canvas>
                        </Suspense>
                    </div>
                    {popup && (
                        <div className="absolute bg-Ablack bg-opacity-40 h-full w-1/3 left-1/2 transform -translate-x-1/2"
                            onClick={()=>setPopup(!popup)}
                        >
                            <div className="w-5/6 flex flex-col space-y-32 px-4 mt-16 mx-auto items-center justify-center text-center">
                                <div className="flex flex-col space-y-2">
                                    <span className="text-white font-bold text-2xl">{data.title}</span>
                                    <span className=" text-gray-500 font-bold text-xl">{''}</span>
                                </div>
                                <div className="flex flex-col space-y-2 mx-auto w-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                                        className="h-20 w-20 animate-bounce mx-auto text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                    </svg>
                                    <span className="text-white font-bold text-lg">{'화면 터치 후 확대해 보세요!'}</span>
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
            <div className="absolute h-[70px] w-[70px] left-40 bottom-80 top-1/2 transform -translate-y-1/2">
                <button
                    id="left"
                    className="h-full w-full"
                    onClick={()=>changeExhibit(-1)}
                >   
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" 
                        className="w-12 h-12 text-Ablack"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
            <div className="absolute h-[70px] w-[70px] right-40 bottom-80 top-1/2 transform -translate-y-1/2">
                <button
                    id="right"
                    className="h-full w-full"
                    onClick={()=>changeExhibit(1)}
                >   
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" 
                        className="w-12 h-12 text-Ablack"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
            {/* 초기화 */}
            <div className="h-[200px] w-[100px] absolute left-10 bottom-96">
                <div className="flex flex-col mx-auto text-center space-y-2 screen-w:space-y-4">
                    <button 
                        className="h-20 w-20 ml-2"
                        onClick={handleRefresh}
                    > 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="h-full w-full text-Ablack">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                    </button>
                    <span className="text-Ablack text-xl font-bold">{"초기화"}</span>
                </div>
            </div>
            {/* 작품해설 */}
            <div className="h-[130px] w-[100px] absolute left-10 bottom-72">
                <div className="flex flex-col mx-auto text-center space-y-2">
                    <button className="h-20 w-20 ml-2"> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                        className="w-full h-full text-Ablack">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                        </svg>
                        </button>
                        <span className="text-Ablack text-xl font-bold">{"작품 해설"}</span>
                </div>
            </div>
            {/* 뒤로 가기 */}
            <button className="absolute left-14 bottom-28"
                onClick={async ()=> router.push("/")}
            >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" 
                    className="w-12 h-12 text-Ablack">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </button>
            {/* <InactivityRedirect timeout={120000} landingPageUrl={"/"} /> */}
        </div>
    )
}