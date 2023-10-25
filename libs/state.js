import * as THREE from 'three';
import { MathUtils } from 'three';

const state = {
    // characterRot: MathUtils.degToRad(0),
    cameraPos: new THREE.Vector3(-2, 5, 15),
    target: new THREE.Vector3(0, 0, 0),
    shouldUpdate: true,
    clicked: false,
}

export default state;