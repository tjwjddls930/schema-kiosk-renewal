import { Canvas } from "@react-three/fiber"
import Imageandmodel from "@/components/landingpage/ImageandModel";
import { Suspense, useState, useEffect, useContext } from "react";
import Navbar from "@/components/navbar/Navbar";
// import Soundguide from "@/components/docent/Soundguide";
import { Html } from "@react-three/drei";
import { LanguageContext } from "@/contexts/LanguageContext";
import Landingsound from "@/components/docent/Landingsound";

export default function Landingpage() {
    const {language} = useContext(LanguageContext);
    // const [video, setVideo] = useState();
    
    // useEffect(()=> {
    //     const fetchVideoUrl = async () => {
    //         setVideo(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/${language}/schema-docent-landing-${language}.webm`);
    //       };
      
    //     if(language) {
    //         fetchVideoUrl();
    //     } else {
    //         setVideo(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/KOR/schema-docent-landing-KOR.webm`)
    //     }
    // }, [language]);

    const [video, setVideo] = useState(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/${language}/schema-docent-landing-${language}.webm`);
    useEffect(()=> {
        const fetchVideoUrl = async () => {
            setVideo(`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/${language}/schema-docent-landing-${language}.webm`);
          };
      
          fetchVideoUrl();
    }, [language]);

    return(
        <div className="h-screen w-screen bg-Ablue">
            <div className="w-1/3 h-1/12 flex mx-auto justify-center py-12"
            >
                <img 
                    src="/img/mainpage/schema-logo-NEW.svg"
                    alt="logo1"
                    className="h-full w-full"
                />
            </div>
            <div className="w-full h-[79%]">
                <Suspense fallback={null}>
                    <Canvas
                        camera={{ fov:75, position: [0, 0, 10]}}
                        gl={{antialias: true}}
                        style={{
                            height: "80vh",
                            width: "100vw"
                        }}
                        shadows
                    >
                        <ambientLight intensity={2} />
                        <color attach="background" args={['#18287f']} />
                        {/* wall */}
                        <mesh position={[0, 0, -1]} rotation={[0, 0, 0]} receiveShadow>
                            <boxGeometry attach="geometry" args={[100, 100, 2]} />
                            <meshPhongMaterial color={"#18287F"} attach="material" />
                        </mesh>
                        <Suspense fallback={null}>
                            <Imageandmodel />
                            <Html
                                transform
                                distanceFactor={8}
                                position={[9, 2.2, 1]}
                                zIndexRange={[1, 0]}
                            >
                            {video && (
                                <Landingsound
                                    className="h-[350px] w-[350px] screen-w:h-[850px] screen-w:w-[850px]"
                                    videoUrl={video}
                                    volume={0.5}
                                    // playing={true}
                                    muted={false}
                                    loop={true}
                                />
                            )}
                            </Html>
                        </Suspense>
                    </Canvas>
                </Suspense>
            </div>
            {/* <Screensaver videoId="Z9K0zY5gB4o" timeout={10000} /> */}
            <Navbar />
        </div>
    )
};