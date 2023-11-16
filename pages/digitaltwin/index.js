import { Canvas } from '@react-three/fiber';
import { MathUtils } from 'three';
import { Suspense } from 'react';
import Loading from '@/components/loading/Loading';
import Camerabutton from '@/components/digitaltwin/Camerabutton';
import Cameracontrol from '@/components/digitaltwin/Cameracontrol';
import Virtualexhibit from '@/components/digitaltwin/Virtualexhibit';
import Model from '@/components/digitaltwin/Model';

export default function Schemafloor() {
    return(
        <div className="h-screen w-screen">
            {/* <Link href="/main">  
            </Link> */}
            {/* <Inactivityredirect timeoutInMinutes={0.5} /> */}
            <Suspense fallback={<Loading />}>
                <Camerabutton />
                <Canvas 
                    camera={{position: [-2, 5, 15]}}
                    gl={{antialias: true, localClippingEnabled: true,}}
                    shadows
                >
                    <directionalLight 
                        intensity={1}
                        position={[20, 3, -5]}
                        castShadow
                        shadow-mapSize-height={2048}
                        shadow-mapSize-width={2048}
                        shadow-camera-near={0.1}
                        shadow-camera-far={400}
                        shadow-camera-left={-400}
                        shadow-camera-right={400}
                        shadow-camera-top={400}
                        shadow-camera-bottom={-400}
                        shadow-normalBias={0.1}
                    />
                    <Virtualexhibit />
                    <Model
                        modelName={'/models/schema_inside.glb'}
                        position={[0, 0, 0]}
                        scale={[3, 3, 3]}
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