import { useEffect, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

const Character = ({url, position, scale, rotation}) => {
    const [index, setIndex] = useState(0);
    const {scene, animations} = useGLTF(url);
    const {ref, actions, names} = useAnimations(animations);
    scene.traverse((child)=> {
        if(child.isMesh) {
            child.receiveShadow = true;
            child.castShadow = true;
        }
    })
    useEffect(()=> {
        const currentAction = actions[names[index]];
        if (currentAction) {
          currentAction.reset().fadeIn(0.5).play();
          return () => currentAction.fadeOut(0.5);
        }
    }, [index, actions, names]);

    return(
        <group ref={ref} onClick={()=> setIndex((index + 1) % names.length)}>
            <primitive 
                object={scene}
                position={position}
                scale={scale}
                rotation={rotation}
            />
        </group>
    )
};

export default Character;
