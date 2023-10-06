import { Html } from "@react-three/drei";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";

export default function Webpopup() {
    const link = useRef();
    return(
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 h-5/6 w-5/6 z-20">
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
                    <iframe 
                    className="w-full h-full touch-none border-none border-radius rounded-[20px]"
                    title="laptop"
                    src="https://schemaartmuseum.com/2023/09/09/%eb%a7%a4%eb%81%84%eb%9f%ac%ec%9a%b4-%eb%8f%8c%eb%b0%ad-2-2/"/>
                </Html>
            </Canvas>
        </div>
    )
};