import { Canvas } from "@react-three/fiber"
import Imageandmodel from "@/components/landingpage/ImageandModel";
import { Suspense } from "react";
import Navbar from "@/components/navbar/Navbar";
import Soundguide from "@/components/docent/Soundguide";
import { Html } from "@react-three/drei";
import Screensaver from "@/components/docent/Screensaver2";

export default function Landingpage() {

    return(
        <div className="h-screen w-screen bg-Ablue">
            <div className="w-1/3 h-1/12 flex mx-auto justify-center py-12">
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
                                distanceFactor={10}
                                position={[9, 1.2, 1]}
                                zIndexRange={[1, 0]}
                            >
                                <Soundguide 
                                    className="h-[850px] w-[850px]"
                                    videoUrl={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_ENDPOINT}/digital-docents/KOR/schema-docent-main-KOR.webm`}
                                    volume={0}
                                    playing={true}
                                    loop={true}
                                />
                            </Html>
                        </Suspense>
                    </Canvas>
                </Suspense>
            </div>
            {/* <Screensaver videoId="Z9K0zY5gB4o" timeout={60000} /> */}
            <Navbar 
            />
        </div>
    )
};

export const getServerSideProps = async (context) => {
    return {
        redirect: {
            // destination: 'https://schema-screensaver.vercel.app/',
            destination: '/',  
            permanent: false, 
        },
    };
};