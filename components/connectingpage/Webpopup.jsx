import { Html } from "@react-three/drei";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";

export default function Webpopup() {
    const link = useRef();
    return(
        <div className="h-full w-full">
            <Canvas
                gl={{antialias:true}}
                shadows
            >
                <Html
                    ref={link}
                    transform
                    wrapperClass="htmlScreen" 
                    distanceFactor={1.17}   
                    position={[0, 1.56, -1.4]}
                    // rotation-x={-0.256}
                >
                    <iframe src="https://schemaartmuseum.com/2023/09/09/%eb%a7%a4%eb%81%84%eb%9f%ac%ec%9a%b4-%eb%8f%8c%eb%b0%ad-2-2/"/>
                </Html>
            </Canvas>
        </div>
    )
};