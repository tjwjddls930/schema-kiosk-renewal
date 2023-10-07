import { useFrame } from "@react-three/fiber";
import state from "@/libs/state";

export default function Cameracontrol() {
    useFrame(({camera, scene}, delta)=> {
        if(state.shouldUpdate) {
            camera.position.lerp(state.cameraPos, 0.08);
            const diff = camera.position.clone().sub(state.cameraPos).length();
            camera.lookAt(state.target);
            camera.updateProjectionMatrix();
            if (diff < 0.1) {
                state.clicked = false;
            }
        };
    });

    return null;
};