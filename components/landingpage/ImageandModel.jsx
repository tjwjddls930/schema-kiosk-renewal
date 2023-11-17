import { useRef, useContext } from "react";
import { SpotLight, useTexture, Text, Html } from "@react-three/drei";
import { useRouter } from "next/router";
import * as THREE from 'three';
import { useFrame } from "@react-three/fiber";
import { LanguageContext } from "@/contexts/LanguageContext";

const mainpageText ={
    KOR: "메인 페이지로 가기",
    ENG: "Go to Mainpage",
    CH: "前往主页",
    TH: "ไปที่หน้าหลัก",
    VI: "Tới trang chính"
};

const chatbotText ={
    KOR: "챗봇 페이지로 가기",
    ENG: "Go to Chatbot page",
    CH: "转到聊天机器人页面",
    TH: "ไปที่หน้าแชทบอท",
    VI: "Tới trang chatbot"
};

const Imageandmodel = () => {
    const [texture1, texture2] = useTexture(['/img/landingpage/mainpage.png', '/img/mainpage/ai_chatbot.png']);
    const {language} = useContext(LanguageContext);
    const router = useRouter();
    const lightRef1 = useRef();
    const lightRef2 = useRef();
    const lightRef3 = useRef();
    const targetPosition = new THREE.Vector3();

    useFrame(() => {
        lightRef1.current.target.position.copy(targetPosition.set(-10, 1, 0));
        lightRef2.current.target.position.copy(targetPosition.set(0, 1, 0));
        lightRef3.current.target.position.copy(targetPosition.set(10, 1, 0));

    });
    return(
        <>
            <mesh 
                position={[-10, 1, 0]} rotation={[0, 0, 0]} castShadow 
                onClick={()=> router.push('/main')}>
                <boxGeometry attach="geometry" args={[8, 4.5, 0.1]} />
                <meshLambertMaterial color={0xffffff} attach="material-0" />
                <meshLambertMaterial color={0xffffff} attach="material-1" />
                <meshLambertMaterial color={0xffffff} attach="material-2" />
                <meshLambertMaterial color={0xffffff} attach="material-3" />
                <meshLambertMaterial map={texture1} attach="material-4" side={THREE.DoubleSide} />
                <meshLambertMaterial map={texture1} attach="material-5" side={THREE.DoubleSide} />
            </mesh>
            <Html
                transform
                distanceFactor={10}
                position={[-10, -3, 0]}
                zIndexRange={[1, 0]}
            >
                <span className="text-Awhite font-bold text-4xl -z-10">{mainpageText[language]}</span>
            </Html>
            <mesh 
                position={[0, 1, 0]} rotation={[0, 0, 0]} castShadow 
                onClick={()=> router.reload()}>
                <boxGeometry attach="geometry" args={[8, 4.5, 0.1]} />
                <meshLambertMaterial color={0xffffff} attach="material-0" />
                <meshLambertMaterial color={0xffffff} attach="material-1" />
                <meshLambertMaterial color={0xffffff} attach="material-2" />
                <meshLambertMaterial color={0xffffff} attach="material-3" />
                <meshLambertMaterial map={texture2} attach="material-4" side={THREE.DoubleSide} />
                <meshLambertMaterial map={texture2} attach="material-5" side={THREE.DoubleSide} />
            </mesh>
            <Html
                transform
                distanceFactor={10}
                position={[0, -3, 0]}
                zIndexRange={[1, 0]}
            >
                <span className="text-Awhite font-bold text-4xl -z-10">{chatbotText[language]}</span>
            </Html>
            {/* <Character 
                url={'/models/landingpage_avatar_5.glb'}
                position={[9, -3, 1]}
                scale={[4, 4, 4]}
                rotation={[0, MathUtils.degToRad(-50), 0]}
            /> */}
            <SpotLight castShadow ref={lightRef1} 
                penumbra={0.1} distance={100} angle={Math.PI / 6} intensity={20} decay={1} position={[-10, 10, 5]} 
            />
            <SpotLight castShadow ref={lightRef2} 
                penumbra={0.1} distance={100} angle={Math.PI / 6} intensity={20} decay={1} position={[0, 10, 5]} 
            />
            <SpotLight castShadow ref={lightRef3} 
                penumbra={0.1} distance={100} angle={Math.PI / 6} intensity={20} decay={1} position={[10, 10, 5]} 
            />
        </>
    )
};

export default Imageandmodel;