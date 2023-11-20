import { useTexture } from "@react-three/drei";
import * as THREE from 'three';

const Whitewall = () => {
    const whiteTexture = useTexture('/img/white.png');

    return(
        <mesh position={[0, 0, -2]} rotation={[0, 0, 0]} receiveShadow>
            <boxGeometry attach="geometry" args={[100, 100, 2]} />
            {/* <meshBasicMaterial /> */}
            <meshStandardMaterial 
                // color={0xFFFFFF}
                map={whiteTexture} 
                side={THREE.DoubleSide}
                attach="material" />
        </mesh>
    )
};

export default Whitewall;