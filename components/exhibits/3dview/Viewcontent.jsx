import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Painting from "@/components/Painting";
import { MathUtils } from "three";
import {useEffect, useState, Suspense} from "react";
import * as THREE from 'three';
import { useRouter } from "next/router";
// import Spot from "@/components/Spotlight";
// import Model from "@/components/Model";

const Viewcontent = ({url, width, height}) => {
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();
    const [color, setColor] = useState("#FFFFFF");

    useEffect(() => {
      // Update the isClient state to true as this code will be executed only on client side
      setIsClient(true);
    }, []);
    return(
        // <div className="h-[91%] w-[1000px] absolute bottom-16 screen-w:h-[94%] screen-w:w-[1500px] screen-w:bottom-28 left-1/2 transform -translate-x-1/2">
        <>
        {isClient && (
        <div className="h-[92%] w-full absolute bottom-16 screen-w:h-[95%] screen-w:bottom-28 left-1/2 transform -translate-x-1/2">
            <div className="h-[50px] w-[50px] z-10 screen-w:h-[150px] screen-w:w-[150px] absolute bottom-20 screen-w:bottom-60 right-20 border-2 border-Ablack rounded-full bg-Bblue"
                onClick={()=> setColor("#5c92de")}
            />
            <div className="h-[50px] w-[50px] z-10 screen-w:h-[150px] screen-w:w-[150px] absolute bottom-20 screen-w:bottom-60 right-64 border-2 border-Ablack rounded-full bg-Awhite"
                onClick={()=> setColor("#FFFFFF")}
            />
            <Canvas
                gl={{
                    antialias:true,
                    colorSpace: THREE.LinearSRGBColorSpace,
                    toneMapping: THREE.ACESFilmicToneMapping,
                    toneMappingExposure: 1.0,
                }}
                // flat={true}
                // linear={true}
                shadows
            >
                <directionalLight intensity={1} />
                <Suspense>
                    {/* <Painting 
                        url={`/img/exhibitpage/paintings/${url}`}
                        width={width}
                        height={height}
                    /> */}
                      <Painting 
                        url={url}
                        width={width}
                        height={height}
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
                {/* <mesh position={[0, 0, -2]} rotation={[0, 0, 0]} receiveShadow>
                    <boxGeometry attach="geometry" args={[100, 100, 2]} />
                    <meshPhongMaterial 
                        color={new THREE.Color(0xFFFFFF)}
                        attach="material" />
                </mesh> */}
                {/* <Model 
                    modelName={'/models/white-wall.glb'}
                    position={[0, 0, -2]}
                    scale={[7, 7, 7]}
                />
                <Spot position={[0, 7, 5]}/> */}
                <ambientLight intensity={3} />
                <color attach="background" args={[color]} />
            </Canvas>
        </div>
        )}
        </>
    )
};

export default Viewcontent;