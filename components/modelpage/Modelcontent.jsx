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
                <Canvas
                    gl={{antialias:true}}
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
                            modelName={url}
                            position={position}
                            rotation={[0, 0, 0]}
                            scale={scale}
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
        </div>
    </>
    )
};

export default Modelcontent;
