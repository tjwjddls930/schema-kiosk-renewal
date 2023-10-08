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
                <div className="absolute top-3 left-3 h-12 w-12 2xl:top-16 2xl:left-16 2xl:h-24 2xl:w-24">
                    <img
                        src="/img/connectpage/홈버튼_밝은화면용.png"
                        className="h-16 w-16 mx-auto 2xl:h-36 2xl:w-36"
                        alt="home"
                    />
                </div>
            </Link>
            <Suspense fallback={<Loading />}>
                <Camerabutton />
                <Canvas 
                    camera={{position: [0, 3, 11]}}
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
                        modelName={'/models/schema_inside_new_2.glb'}
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