import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Painting from "@/components/Painting";
import { MathUtils } from "three";
import {useEffect, useState, Suspense} from "react";


export default function Viewcontent({url, width, height}) {
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
                <directionalLight intensity={1} />
                <Suspense>
                    <Painting 
                        // url={'/img/exhibitpage/paintings/유성.jpg'}
                        url={`/img/exhibitpage/paintings/${url}`}
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
                <ambientLight intensity={3} />
            </Canvas>
        </div>
        )}
        </>
    )
};