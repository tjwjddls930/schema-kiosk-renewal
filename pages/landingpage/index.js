import { Canvas } from "@react-three/fiber"
import Portal from "@/components/landingpage/Portal";
import { Gltf } from "@react-three/drei";
import Landingcamera from "@/components/landingpage/Landingcamera";

export default function Landingpage() {
    return(
        <div className="h-screen w-screen bg-Ablue">
            <div className="w-1/3 h-1/12 flex mx-auto justify-center py-12">
                <img 
                    src="/img/mainpage/schema-logo-NEW.svg"
                    alt="logo1"
                    className="h-full w-full"
                />
            </div>
            <div className="w-full h-5/6">
                <Canvas
                    camera={{ fov:75, position: [0, 0, 5]}}
                >
                    <ambientLight intensity={1} />
                    <color attach="background" args={['#18287f']} />
                    <Portal 
                        id="main" name={`main`} author="Schema Art Museum" 
                        bg="#5c92de" position={[-1.15, 0, 0]} 
                        // rotation={[0, 0.5, 0]}
                    >
                        <Gltf 
                            src="/models/schema_model_7.glb"
                            scale={8}
                            position={[0, -0.7, -2]}
                        />
                    </Portal>
                    <Portal
                        id="02" name={`exhibit`} author="Schema Art Museum"
                        bg="#5c92de"
                    >
                        <Gltf 
                            src="/models/schema_model_2.glb"
                            position={[0, -2, -3]} 
                        />
                    </Portal>
                    <Portal id="03" name="Chatbot" author="Schema Art Museum" 
                    bg="#5c92de" position={[1.15, 0, 0]} 
                    // rotation={[0, -1, 0]}
                    >
                        <Gltf 
                            src="/models/thinker.glb" 
                            scale={2} 
                            position={[-1, -0.8, -4]} 
                        />
                    </Portal>
                    <Landingcamera />
                </Canvas>
            </div>
        </div>
    )
}