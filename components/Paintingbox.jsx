import { useTexture } from "@react-three/drei";
import * as THREE from 'three';
// import { TextureLoader } from "three";

const Paintingbox = ({url, position, rotation, width, height}) => {
    const texture = useTexture(url);

    return(
        <mesh position={position} rotation={rotation} castShadow>
            <boxGeometry attach="geometry" args={[width, height, 0.1]} />
            {/* <boxGeometry attach="geometry" args={[3, 3, 3]} /> */}
            <meshLambertMaterial color={0xffffff} attach="material-0" />
            <meshLambertMaterial color={0xffffff} attach="material-1" />
            <meshLambertMaterial color={0xffffff} attach="material-2" />
            <meshLambertMaterial color={0xffffff} attach="material-3" />
            <meshLambertMaterial map={texture} attach="material-4" side={THREE.DoubleSide} />
            <meshLambertMaterial map={texture} attach="material-5" side={THREE.DoubleSide} />
        </mesh>
    )
};

export default Paintingbox;