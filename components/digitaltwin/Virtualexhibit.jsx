import { MathUtils } from "three";
import * as THREE from 'three';
import { useTexture } from "@react-three/drei";

export default function Virtualexhibit() {
    const [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13] = useTexture(
        ['/img/exhibitpage/current_exhibit.png',
        '/img/exhibitpage/paintings/김준/Flying-cat-Loop.jpg', 
        '/img/exhibitpage/paintings/김준/Mr.-purple-Loop.jpg', 
        '/img/exhibitpage/paintings/김준/Somebody-anne.jpg', 
        '/img/exhibitpage/paintings/김준/Somebody-chair-man.jpg',
        '/img/exhibitpage/paintings/김준/Somebody-curtain-call.jpg', 
        '/img/exhibitpage/paintings/김준/Somebody-pink-tile.jpg', 
        '/img/exhibitpage/paintings/김준/Somebody-red-dot.jpg',
        '/img/exhibitpage/paintings/이윤성/The-Three-Graces.jpg',
        '/img/exhibitpage/paintings/이윤성/Head-of-Medusa.jpg',
        '/img/exhibitpage/paintings/이윤성/Head-of-Medusa-Pink.jpg',
        '/img/exhibitpage/paintings/이윤성/Head-of-Medusa-Pink1.jpg',
        '/img/exhibitpage/paintings/이윤성/Torso-12.jpg',
        '/img/exhibitpage/paintings/이윤성/Torso-12-1.jpg',
    ]);

    let pHeight = 2;
    return(
        <>
            <mesh position={[-4.7, 1, 3.65]}>
                <planeGeometry  args={[7, 5]} />
                <meshStandardMaterial map={image0} side={THREE.DoubleSide} />
                {/* <Videomaterial url={"/videos/removed-test5.webm"} /> */}
            </mesh>
            <mesh position={[2.4, pHeight, -2]} rotation={[0, MathUtils.degToRad(90), 0]}>
                <planeGeometry args={[4, 3]} />
                <meshStandardMaterial map={image1} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[2.4, pHeight, -10]} rotation={[0, MathUtils.degToRad(90), 0]}>
                <planeGeometry args={[4, 3]} />
                <meshStandardMaterial map={image2} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[8, pHeight, -15.86]} rotation={[0, 0, 0]}>
                <planeGeometry args={[4, 3]} />
                <meshStandardMaterial map={image3} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[16, pHeight, -15.86]} rotation={[0, 0, 0]}>
                <planeGeometry args={[4, 3]} />
                <meshStandardMaterial map={image4} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[23.95, pHeight, 0]} rotation={[0, MathUtils.degToRad(90), 0]}>
                <planeGeometry args={[4, 3]} />
                <meshStandardMaterial map={image5} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[23.95, pHeight, -8]} rotation={[0, MathUtils.degToRad(90), 0]}>
                <planeGeometry args={[4, 3]} />
                <meshStandardMaterial map={image6} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[20, pHeight, 8.3]} rotation={[0, 0, 0]}>
                <planeGeometry args={[4, 3]} />
                <meshStandardMaterial map={image7} side={THREE.DoubleSide} />
            </mesh>
            <mesh position={[13, pHeight, 8.3]} rotation={[0, 0, 0]}>
                <planeGeometry args={[8, 6]} />
                <meshStandardMaterial map={image8} side={THREE.DoubleSide} />
            </mesh>
        </>
    )
}