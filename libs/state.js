import * as THREE from 'three';
import { MathUtils } from 'three';

const state = {
    characterPos: new THREE.Vector3(0, -3, 4),
    characterRot: new THREE.Vector3(0, 0, 0),
    // characterRot: MathUtils.degToRad(0),
    cameraPos: new THREE.Vector3(0, 3, 11),
    target: new THREE.Vector3(0, 0, 0),
    shouldUpdate: true,
    clicked: false,
}

export default state;