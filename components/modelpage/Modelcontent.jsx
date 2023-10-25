import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { MathUtils } from "three";
import {useEffect, useState, Suspense} from "react";
import Modelanimation from "../Modelanimation";
// import Inactivityredirect from "../digitaltwin/Inactivityredirect";
import InactivityRedirect2 from "../digitaltwin/Inactivityredirect2";

const Modelcontent = ({url, position, scale}) => {
  
    return(
        // <div className="h-[91%] w-[1000px] absolute bottom-16 screen-w:h-[94%] screen-w:w-[1500px] screen-w:bottom-28 left-1/2 transform -translate-x-1/2">
        <>  
        <div className="h-[91%] w-full absolute bottom-16 screen-w:h-[94%] screen-w:bottom-28 left-1/2 transform -translate-x-1/2 bg-Awhite">
            {/* <Inactivityredirect timeoutInMinutes={0.2} /> */}
            {/* <InactivityRedirect2 timeoutInMinutes={0.2} /> */}
            <Suspense fallback={null}>
                <Canvas
                    gl={{antialias:true}}
                    shadows
                >
                    <directionalLight intensity={2} position={[0, 0, 2]} />
                    <Modelanimation 
                        modelName={url}
                        position={position}
                        rotation={[0, 0, 0]}
                        scale={scale}
                    />
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
    </>
    )
};

export default Modelcontent;
