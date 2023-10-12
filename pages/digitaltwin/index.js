import { Canvas } from '@react-three/fiber';
import { MathUtils } from 'three';
import { Suspense } from 'react';
import Loading from '@/components/loading/Loading';
import Camerabutton from '@/components/digitaltwin/Camerabutton';
import Cameracontrol from '@/components/digitaltwin/Cameracontrol';
import Virtualexhibit from '@/components/digitaltwin/Virtualexhibit';
import Model from '@/components/digitaltwin/Model';
import Inactivityredirect from '@/components/digitaltwin/Inactivityredirect';

export default function Schemafloor() {
    return(
        <div className="h-screen w-screen">
            {/* <Link href="/main">  
            </Link> */}
            <Inactivityredirect timeoutInMinutes={0.5} />
            <Suspense fallback={<Loading />}>
                <Camerabutton />
                <Canvas 
                    camera={{position: [-2, 3, 11]}}
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
                        position={[0, 0, 0]}
                        scale={[2, 2.5, 2]}
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