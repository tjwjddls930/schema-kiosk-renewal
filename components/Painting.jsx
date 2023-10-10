import { useTexture } from "@react-three/drei";

export default function Painting({url, width, height}) {
    const texture = useTexture(url);

    return(
        <mesh>
            {/* <boxGeometry attach="geometry" args={[6, 7.5, 0.1]} /> */}
            <boxGeometry attach="geometry" args={[width, height, 0.1]} />
            {/* <boxGeometry attach="geometry" args={[3, 3, 3]} /> */}
            <meshStandardMaterial map={texture} attach="material" />
            <meshStandardMaterial map={texture} attach="material" />
            <meshStandardMaterial map={texture} attach="material" />
            <meshStandardMaterial map={texture} attach="material" />
            <meshStandardMaterial map={texture} attach="material" />
            <meshStandardMaterial map={texture} attach="material" />
        </mesh>
    )
}