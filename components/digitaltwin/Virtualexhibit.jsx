import { MathUtils } from "three";
import * as THREE from 'three';
import { useTexture } from "@react-three/drei";

const Virtualexhibit = () => {
    const [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15] = useTexture(
        [
        '/img/exhibitpage/paintings/김준/Mr.-purple-Loop.jpg', 
        '/img/exhibitpage/paintings/김준/Flying-cat-Loop.jpg', 
        '/img/exhibitpage/paintings/이윤성/Head-of-Medusa-Pink.jpg',
        '/img/exhibitpage/paintings/이윤성/Head-of-Medusa.jpg',
        '/img/exhibitpage/paintings/이윤성/Head-of-Medusa-Pink1.jpg',
        '/img/exhibitpage/paintings/이윤성/Head-of-Medusa-Silver-3D.png',
        '/img/exhibitpage/paintings/이윤성/The-Three-Graces.jpg',
        '/img/exhibitpage/paintings/김준/Somebody-anne.jpg', 
        '/img/exhibitpage/paintings/김준/Somebody-pink-tile.jpg', 
        '/img/exhibitpage/paintings/김준/Somebody-curtain-call.jpg', 
        '/img/exhibitpage/paintings/김준/Somebody-chair-man.jpg',
        '/img/exhibitpage/paintings/김준/Somebody-red-dot.jpg',
        '/img/exhibitpage/paintings/이윤성/Torso-12.jpg',
        '/img/exhibitpage/paintings/이윤성/Torso-12-1.jpg',
        '/img/exhibitpage/paintings/옥승철/Portrait3.jpg',
        '/img/exhibitpage/paintings/옥승철/Portrait4.jpg',
    ]);

    const [scale0, scale1, scale2, scale3, scale4, scale5, scale6, scale7, scale8, scale9, scale10, scale11, scale12] = [
        [1.46, 1.82],
        [3.24, 3.24],
        [1.46, 1.82],
        [9.6, 6],
        [2,2],
        [4, 4.80],
        [2.2, 2.2],
        [1.4, 1.4],
        [1.56, 2.20],
        [3.24, 2.6],
        [3.24, 2.6],
        [0.8, 1],
        [0.8, 1]
    ]

    let pHeight = 2;
    return(
        <>
            <mesh position={[-4, 0.5, 3.65]}>
                <planeGeometry  args={[5.5, 2.5]} />
                <meshStandardMaterial map={image0} side={THREE.DoubleSide} />
                {/* <Videomaterial url={"/videos/removed-test5.webm"} /> */}
            </mesh>
            <mesh position={[6.7, 1, 7]} rotation={[0, MathUtils.degToRad(90), 0]}>
                <planeGeometry  args={[5, 2.5]} />
                <meshStandardMaterial map={image1} side={THREE.DoubleSide} />
                {/* <Videomaterial url={"/videos/removed-test5.webm"} /> */}
            </mesh>
            {/* 전시실1 */}
            <mesh position={[2.4, pHeight, -2]} rotation={[0, MathUtils.degToRad(90), 0]}>
                {/* <planeGeometry args={[3, 2]} /> */}
                <planeGeometry args={scale0} />
                <meshStandardMaterial map={image2} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[2.4, pHeight, -7]} rotation={[0, MathUtils.degToRad(90), 0]}>
                {/* <planeGeometry args={[5, 4]} /> */}
                <planeGeometry args={scale1} />
                <meshStandardMaterial map={image3} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[2.4, pHeight, -12]} rotation={[0, MathUtils.degToRad(90), 0]}>
                {/* <planeGeometry args={[3, 2]} /> */}
                <planeGeometry args={scale2} />
                <meshStandardMaterial map={image4} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[12, pHeight, -15.86]} rotation={[0, 0, 0]}>
                <planeGeometry args={[4, 5]} />
                <meshStandardMaterial map={image5} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[23.95, pHeight, -4]} rotation={[0, MathUtils.degToRad(90), 0]}>
                {/* <planeGeometry args={[8, 6]} /> */}
                <planeGeometry args={scale3} />
                <meshStandardMaterial map={image6} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[21, pHeight, 8.3]} rotation={[0, 0, 0]}>
                {/* <planeGeometry args={[4, 3]} /> */}
                <planeGeometry args={scale4} />
                <meshStandardMaterial map={image7} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[16.5, pHeight, 8.3]} rotation={[0, 0, 0]}>
                {/* <planeGeometry args={[4, 3]} /> */}
                <planeGeometry args={scale5} />
                <meshStandardMaterial map={image8} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[12, pHeight, 8.3]} rotation={[0, 0, 0]}>
                {/* <planeGeometry args={[4, 3]} /> */}
                <planeGeometry args={scale6} />
                <meshStandardMaterial map={image9} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[8.5, pHeight, 7]} rotation={[0, MathUtils.degToRad(90), 0]}>
                {/* <planeGeometry args={[2.5, 1.5]} /> */}
                <planeGeometry args={scale7} />
                <meshStandardMaterial map={image10} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[8.5, pHeight, 4]} rotation={[0, MathUtils.degToRad(90), 0]}>
                {/* <planeGeometry args={[3, 2]} /> */}
                <planeGeometry args={scale8} />
                <meshStandardMaterial map={image11} side={THREE.DoubleSide} />
            </mesh>
            {/* 전시실2 */}
            <mesh position={[-13.5, pHeight, 0]} rotation={[0, MathUtils.degToRad(90), 0]}>
                {/* <planeGeometry args={[4, 3]} /> */}
                <planeGeometry args={scale9} />
                <meshStandardMaterial map={image12} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[-13.5, pHeight, -5]} rotation={[0, MathUtils.degToRad(90), 0]}>
                {/* <planeGeometry args={[4, 3]} /> */}
                <planeGeometry args={scale10} />
                <meshStandardMaterial map={image13} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[-16, pHeight, -9]} rotation={[0, 0, 0]}>
                {/* <planeGeometry args={[3, 2]} /> */}
                <planeGeometry args={scale11} />
                <meshStandardMaterial map={image14} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[-20, pHeight, -9]} rotation={[0, 0, 0]}>
                {/* <planeGeometry args={[3, 2]} /> */}
                <planeGeometry args={scale12} />
                <meshStandardMaterial map={image15} side={THREE.DoubleSide} />
            </mesh>
        </>
    )
};

export default Virtualexhibit;