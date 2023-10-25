import * as THREE from 'three';
import { CameraControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Landingcamera = ({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0)}) => {
    const {controls, scene} = useThree();
    // const [, params] = useRoute('/example3/:id');
    const { query } = useRouter();
    console.log(query)

    useEffect(() => {
        if(query.portalpage !== undefined) {
            const active = scene.getObjectByName(query.portalpage[0]);
            if(active) {
                active.parent.localToWorld(position.set(0, 0.5, 0.25))
                active.parent.localToWorld(focus.set(0, 0, -2))
            }
        };
        controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
    })

    // useEffect(() => {
    //     const active = scene.getObjectByName(params?.id);
    //     if(active) {
    //         active.parent.localToWorld(position.set(0, 0.5, 0.25))
    //         active.parent.localToWorld(focus.set(0, 0, -2))
    //     }
    //     controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
    // })

    return (
        <CameraControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 2 }/>
    )
}

export default Landingcamera;