import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Modelanimation = ({ modelName, position, rotation, scale, ...props}) => {
    const ref = useRef();
    const model = useGLTF(modelName);
    model.scene.traverse((child) => {
        if(child.isMesh) {
            child.receiveShadow = true;
            child.castShadow = true;
        }
    });

    useFrame((state, delta)=> {
        ref.current.rotation.y += delta * 0.4;
    });

    return(
      <>
      <primitive
        ref={ref} 
        object={model.scene}
        position={position}
        rotation={rotation}
        scale={scale}
        {...props}
      />
      </>
    )
};

export default Modelanimation;