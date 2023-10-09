import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MathUtils } from "three";
import {useEffect, useState} from "react";
import Modelanimation from "../Modelanimation";

export default function Modelcontent({url, position, scale}) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      // Update the isClient state to true as this code will be executed only on client side
      setIsClient(true);
    }, []);
    return(
        // <div className="h-[91%] w-[1000px] absolute bottom-16 2xl:h-[94%] 2xl:w-[1500px] 2xl:bottom-28 left-1/2 transform -translate-x-1/2">
        <>
        {isClient && (
        <div className="h-[91%] w-full absolute bottom-16 2xl:h-[94%] 2xl:bottom-28 left-1/2 transform -translate-x-1/2">
            <Canvas
                gl={{antialias:true}}
                shadows
            >
                {/* <directionalLight intensity={2} /> */}
                <Modelanimation 
                    modelName={url}
                    position={position}
                    rotation={[0, 0, 0]}
                    scale={scale}
                />
                {/* <OrbitControls 
                    minDistance={1.5}
                    maxDistance={5}
                    minAzimuthAngle={MathUtils.degToRad(-45)}
                    maxAzimuthAngle={MathUtils.degToRad(45)}
                    maxPolarAngle={MathUtils.degToRad(90)}
                    minPolarAngle={MathUtils.degToRad(70)}
                    makeDefault 
                /> */}
                <OrbitControls 
                    minDistance={1.5}
                    maxDistance={5}
                    maxPolarAngle={MathUtils.degToRad(120)}
                    minPolarAngle={MathUtils.degToRad(70)}
                    makeDefault
                />
                <ambientLight intensity={4} />
                <color attach="background" args={["#000000"]} />
            </Canvas>
        </div>
        )}
        </>
    )
};