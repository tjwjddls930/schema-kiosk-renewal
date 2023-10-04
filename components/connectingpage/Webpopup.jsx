import { Html } from "@react-three/drei";
import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Link from "next/link";

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
                  <iframe>
                    <Link href="https://schemaartmuseum.com/2023/09/09/매끄러운-돌밭-2-2/">
                    </Link>
                  </iframe>
                </Html>
            </Canvas>
        </div>
    )
};