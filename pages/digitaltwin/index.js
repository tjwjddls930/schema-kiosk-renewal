import { Canvas } from '@react-three/fiber';
import { MathUtils } from 'three';
import { Suspense } from 'react';
import Loading from '@/components/loading/Loading';
import Camerabutton from '@/components/digitaltwin/Camerabutton';
import Cameracontrol from '@/components/digitaltwin/Cameracontrol';
import Virtualexhibit from '@/components/digitaltwin/Virtualexhibit';
import Model from '@/components/digitaltwin/Model';
import Link from 'next/link';

export default function Schemafloor() {
    return(
        <div className="h-screen w-screen">
            <Link href="/main">
                <button className="absolute top-3 left-3 h-12 w-12 2xl:top-16 2xl:left-16 2xl:h-24 2xl:w-24 rounded-full bg-Cpurple z-[1000]">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" 
                        width="100" height="100" viewBox="0 0 50 50"
                        className="w-7 h-7 mx-2.5 my-2 2xl:w-14 2xl:h-14 2xl:mx-4 2xl:my-3.5"
                    >
                        <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
                    </svg>
                </button>
            </Link>
            <Suspense fallback={<Loading />}>
                <Camerabutton />
                <Canvas 
                    camera={{position: [-2, 3, 13]}}
                    gl={{antialias: true, localClippingEnabled: true,}}
                    shadows
                >
                    <directionalLight 
                        intensity={1}
                        position={[0, 5, 0]}
                        castShadow
                    />
                    <Virtualexhibit />
                    <Model
                        modelName={'/models/schema_inside_new_3.glb'}
                        position={[0, -0.5, 0]}
                        scale={[2, 2, 2]}
                        rotation={[0, MathUtils.degToRad(180), 0]}
                    />
                    <ambientLight intensity={1.5} />
                    {/* <color attach="background" args={["#000000"]} /> */}
                    <Cameracontrol />
                </Canvas>
            </Suspense>
        </div>
    )
};