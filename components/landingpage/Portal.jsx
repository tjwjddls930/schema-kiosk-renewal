import { Text, useCursor, MeshPortalMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from 'three';
import { easing } from "maath";
import { useRouter } from "next/router";

const Portal = ({id, name, author, bg, width=1, height=1.6, children, ...props}) => {
    const ref = useRef();
    // const [hover, setHover] = useState(false);
    const router = useRouter();
    const { query } = useRouter();
  
    // useEffect(()=> {
    //     const push = async () => {
    //         await router.push(`/example3/${object}`);
    //     };
    //     push();
    // },[object]);

    const push = (e) => {
        router.push(`/${e}`)
    };


    useFrame((state, delta)=> { 
        easing.damp(ref.current, 'blend', query.portalpage !== undefined  && query.portalpage[0] === id ? 1 : 0, 0.2, delta);
    });

    // useCursor(hover);
    return (
            <group {...props}>
                <Text fontSize={0.3} anchorY="top" anchorX="left" lineHeight={0.8} position={[-0.375, 0.715, 0.01]} material-toneMapped={false}>
                    {name}
                </Text>
                <Text fontSize={0.1} anchorX="right" lineHeight={0.8} position={[0.4, -0.659, 0.01]} material-toneMapped={false}>
                    /{id}
                </Text>
                <Text fontSize={0.04} anchorX="right" lineHeight={0.8} position={[0.0, -0.677, 0.01]} material-toneMapped={false}>
                    {author}
                </Text>
                <mesh name={id} 
                    onClick={(e)=> (e.stopPropagation(), push(e.object.name))}>
                    <planeGeometry args={[width, height]} />
                    <MeshPortalMaterial 
                        ref={ref} 
                        // events={query.portalpage === [`${id}`]}
                        side={THREE.DoubleSide}
                    >
                        <color attach="background" args={[bg]} />
                        {children}
                    </MeshPortalMaterial>
                </mesh>
            </group>
    )
};

export default Portal;