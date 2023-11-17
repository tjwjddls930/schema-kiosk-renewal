import { MathUtils } from "three";
import * as THREE from 'three';
import { useTexture } from "@react-three/drei";
import Paintingbox from "../Paintingbox";

const Virtualexhibit = () => {
    const [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15] = 
        [
        '/img/exhibitpage/paintings/2023/23-7/7.jpg', 
        '/img/exhibitpage/paintings/2023/23-7/6.jpg', 
        '/img/exhibitpage/paintings/2023/23-7/19.jpg',
        '/img/exhibitpage/paintings/2023/23-7/18.jpg',
        '/img/exhibitpage/paintings/2023/23-7/20.jpg',
        '/img/exhibitpage/paintings/2023/23-7/21.png',
        '/img/exhibitpage/paintings/2023/23-7/22.jpg',
        '/img/exhibitpage/paintings/2023/23-7/8.jpg', 
        '/img/exhibitpage/paintings/2023/23-7/11.jpg', 
        '/img/exhibitpage/paintings/2023/23-7/10.jpg', 
        '/img/exhibitpage/paintings/2023/23-7/9.jpg',
        '/img/exhibitpage/paintings/2023/23-7/12.jpg',
        '/img/exhibitpage/paintings/2023/23-7/23.jpg',
        '/img/exhibitpage/paintings/2023/23-7/24.jpg',
        '/img/exhibitpage/paintings/2023/23-7/13.jpg',
        '/img/exhibitpage/paintings/2023/23-7/14.jpg',
    ];

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

    let pHeight = 3;
    return(
        <>
            <Paintingbox position={[-4, 0.5, 4.5]} rotation={[0, 0, 0]} width={5.5} height={2.5} url={image0} />
            <Paintingbox position={[6.7, 1, 7]} rotation={[0, MathUtils.degToRad(90), 0]} width={5} height={2.5} url={image1} />
            {/* 전시실1 */}
            <Paintingbox position={[3.5, pHeight, -5]} rotation={[0, MathUtils.degToRad(90), 0]} width={1.46} height={1.82} url={image2} />
            <Paintingbox position={[3.5, pHeight, -10]} rotation={[0, MathUtils.degToRad(90), 0]} width={3.24} height={3.24} url={image3} />
            <Paintingbox position={[3.5, pHeight, -15]} rotation={[0, MathUtils.degToRad(90), 0]} width={1.46} height={1.82} url={image4} />
            <Paintingbox position={[16, pHeight, -19]} rotation={[0, 0, 0]} width={4} height={5} url={image5} />
            <Paintingbox position={[23.95, pHeight, -4]} rotation={[0, MathUtils.degToRad(90), 0]} width={9.6} height={6} url={image6} />
            <Paintingbox position={[21, pHeight, 8.3]} rotation={[0, 0, 0]} width={2} height={2} url={image7} />
            <Paintingbox position={[16.5, pHeight, 8.3]} rotation={[0, 0, 0]} width={4} height={4.8} url={image8} />
            <Paintingbox position={[12, pHeight, 8.3]} rotation={[0, 0, 0]} width={2.2} height={2.2} url={image9} />
            <Paintingbox position={[8.5, pHeight, 7]} rotation={[0, MathUtils.degToRad(90), 0]} width={1.4} height={1.4} url={image10} />
            <Paintingbox position={[8.5, pHeight, 4]} rotation={[0, MathUtils.degToRad(90), 0]} width={1.56} height={2.2} url={image11} />
            {/* 전시실2 */}
            <Paintingbox position={[-13.5, pHeight, 0]} rotation={[0, MathUtils.degToRad(90), 0]} width={3.24} height={2.6} url={image12} />
            <Paintingbox position={[-13.5, pHeight, -5]} rotation={[0, MathUtils.degToRad(90), 0]} width={3.24} height={2.6} url={image13} />
            <Paintingbox position={[-16, pHeight, -9]} rotation={[0, 0, 0]} width={0.8} height={1} url={image14} />
            <Paintingbox position={[-20, pHeight, -9]} rotation={[0, 0, 0]} width={0.8} height={1} url={image15} />
        </>
    )
};

export default Virtualexhibit;