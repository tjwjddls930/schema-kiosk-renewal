
import * as THREE from 'three';
import { useTexture, shaderMaterial } from '@react-three/drei';
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { useContext } from 'react';
import clsx from 'clsx';
import { ScreenOrientContext } from '@/contexts/ScreenOrientContext';

export const ImageFadeMaterial = shaderMaterial(
    {
      effectFactor: 1.2,
      dispFactor: 0,
      tex: undefined,
      tex2: undefined,
      disp: undefined
    },
    ` varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
      }`,
    ` varying vec2 vUv;
      uniform sampler2D tex;
      uniform sampler2D tex2;
      uniform sampler2D disp;
      uniform float _rot;
      uniform float dispFactor;
      uniform float effectFactor;
      void main() {
        vec2 uv = vUv;
        vec4 disp = texture2D(disp, uv);
        vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
        vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
        vec4 _texture = texture2D(tex, distortedPosition);
        vec4 _texture2 = texture2D(tex2, distortedPosition2);
        vec4 finalTexture = mix(_texture, _texture2, dispFactor);
        gl_FragColor = finalTexture;
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`
  )
  
  extend({ ImageFadeMaterial })

function Slider() {
    const ref = useRef();
    const timeoutRef = useRef();
    let url = "/img/intro/career/paintings/"
    const [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13, image14, image15, image16, image17, image18, image19, displace] = 
    useTexture([
    `${url}104x40.2.png`, 
    `${url}control-deviation-80.3x100.png`, 
    `${url}control-deviation-80.3x116.8.png`, 
    `${url}control-deviation95-72.9x155.9.png`, 
    `${url}control-deviation95-80.3x100.png`,
    `${url}cube-secret-117x117.png`, 
    `${url}deviation-grid-72x100.png`, 
    `${url}deviation-grid-79x51.png`, 
    `${url}distorted-cube-92.5x61.5.png`, 
    `${url}myth-of-cube-07-145.5x112.png`,
    `${url}myth-of-cube-502-122.0x63.8.png`, 
    `${url}nature-secret-117x117.png`, 
    `${url}relation-01-52.2x71.4.png`, 
    `${url}relation-03-72.7x60.6.png`, 
    `${url}relation-33-100.0x80.3.png`, 
    `${url}relation-72.7x60.6.png`,
    `${url}relation-81-100.0x80.3.png`, 
    `${url}relation-605-97.0x133.3.png`, 
    `${url}두개의상황-60.6x80.3.png`, 
    `${url}displace-1.jpg`
    ])
    let ypos = 0.5;
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9,  image10, image11, image12, image13, image14, image15, image16, image17, image18, image19];
    const geometry = 
    [[2.01, 5.2], 
      [4, 3.212], 
      [4.672, 3.212], 
      [3.118, 1.458], 
      [4, 3.212], 
      [4.68, 4.68], 
      [4, 2.88], 
      [2.04, 3.06], 
      [2.46, 3.7], 
      [4.48, 5.82], 
      [2.552, 4.88], 
      [4.68, 4.68], 
      [2.856, 2.088], 
      [2.424, 2.908], 
      [3.212, 4], 
      [2.424, 2.908], 
      [3.212, 4], 
      [5.332, 3.88], 
      [3.212, 2.424]]
    const position=[[0, ypos, 0], [0, ypos, 0], [0, ypos, 0], [0, ypos - 0.5, 4], [0, ypos, 0], [0, ypos, 0], [0, ypos, 0], [0, ypos, 1.5], [0, ypos, 1], [0, ypos, -3], 
    [0, ypos, 0], [0, ypos, 0], [0, ypos, 1.5], [0, ypos, 2], [0, ypos, 0], [0, ypos, 1], [0, ypos, 0], [0, ypos, 0], [0, ypos, 1]]
    const delay = 4000;
    const [change, setChange] = useState(false);
    const [index, setIndex] = useState(0);
    
    function resetTimeout() {
      if(timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    useEffect(()=> {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        setIndex((prevIndex)=> prevIndex === images.length - 1 ? 0 : prevIndex + 1)
        setChange((current)=> !current)
      },
      delay);
    }, [index]);

    useFrame(()=> {
        ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, change ? 1 : 0, 0.075);
    });

    return (
        <mesh position={position[index]}>
            <planeGeometry args={geometry[index]}/>
            <imageFadeMaterial ref={ref} tex={images[index]} tex2={images[index]} disp={displace} toneMapped={false} />
        </mesh>
    )
}

export default function Imageslider() {
  const {isPortrait} = useContext(ScreenOrientContext);
  const [canvasStyle, setCanvasStyle] = useState({
    height: "70vh",
    width: "100vw",
  });

  useEffect(()=> {
    if(isPortrait) {
      setCanvasStyle({
        height: "45vh",
        width: "70vw",
        alighItems: "center",
        alignContent: "center",
      })
    }
  }, [isPortrait])

  return (
  <div className="flex h-3/4 w-3/4 mx-auto">
      <Canvas
          camera={{position: [0, 0, 8], fov: 50}}
          style={canvasStyle}
          // style={{
          //   height: "50vh",
          //   width: "80vw",
          // }}
      >
          <Slider />
      </Canvas>
  </div>
  )
}