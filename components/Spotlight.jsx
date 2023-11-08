import { SpotLight } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Spot = ({position, ...props}) => {
    const ref = useRef();
    const targetPosition = new THREE.Vector3();

    useFrame(()=> {
        ref.current.target.position.copy(targetPosition.set(0, 1, 0));
    })
    return(
        <SpotLight castShadow ref={ref} 
            penumbra={0.1} distance={100} angle={Math.PI / 6} intensity={20} decay={1} position={position} 
        />
    )
};

export default Spot;