import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Model = ({ modelName, position, rotation, scale, ...props}) => {
    const ref = useRef();
    const model = useGLTF(modelName);
    model.scene.traverse((child) => {
        if(child.isMesh) {
            child.receiveShadow = true;
            child.castShadow = true;
        }
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

export default Model;