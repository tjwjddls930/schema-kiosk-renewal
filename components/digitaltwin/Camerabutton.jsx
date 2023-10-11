import state from "@/libs/state";
import { useState } from "react";
import { animated, useTrail } from "@react-spring/web";
import Link from "next/link";

export default function Camerabutton() {
    const items1 = ["작품1", "작품2", "작품3", "작품4", "작품5", "작품6", "작품7", "작품8", "작품9", "작품10"];
    const items2 = ["작품1", "작품2", "작품3", "작품4"];
    const [active, setActive] = useState(false);
    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(false);
    const [exhibit1, setExhibit1] = useState(false);
    const [exhibit2, setExhibit2] = useState(false);
    const trail1 = useTrail(items1.length, {
        config: {mass: 5, tension: 2000, friction: 200},
        opacity: exhibit1 ? 1 : 0,
        x: exhibit1 ? 0 : 20,
        height: exhibit1 ? 50 : 0,
        from: { opacity: 0, x: 20, height: 0},
    });
    const trail2 = useTrail(items2.length, {
        config: {mass: 5, tension: 2000, friction: 200},
        opacity: exhibit2 ? 1 : 0,
        x: exhibit2 ? 0 : 20,
        height: exhibit2 ? 50 : 0,
        from: { opacity: 0, x: 20, height: 0},
    });

    let pHeight = 2;

    const set = {
        1: {
            cameraPos: [-2, 3, 11],
            target: [0, 0, 0],
        },
        //전시실1
        2: {
            cameraPos: [20, 2, -5],
            target: [12, 0, -2],
        },
        //전시실2
        3: {
            cameraPos: [-20, 2, -6],
            target: [-17, 0, -2]
        },
        //전시실1 작품
        4: {
            cameraPos: [7, pHeight, -2],
            target: [2.4, pHeight, -2]
        },
        5: {
            cameraPos: [7, pHeight, -7],
            target: [2.4, pHeight, -7]
        },
        6: {
            cameraPos: [7, pHeight, -12],
            target: [2.4, pHeight, -12]
        },
        7: {
            cameraPos: [12, pHeight, -11],
            target: [12, pHeight, -15.86]
        },
        8: {
            cameraPos: [19, pHeight, -4],
            target: [30, pHeight, -4]
        },
        9: {  
            cameraPos: [21, pHeight, 4],
            target: [21, pHeight, 8.3]
        },
        10: {
            cameraPos: [17, pHeight, 4],
            target: [17, pHeight, 8.3]
        },
        11: { 
            cameraPos: [12, pHeight, 4],
            target: [12, pHeight, 8.3]
        },
        12: {
            cameraPos: [12.5, pHeight, 7],
            target: [8.5, pHeight, 7]
        },
        13: {
            cameraPos: [12.5, pHeight, 4],
            target: [8.5, pHeight, 4]
        },
        //전시실2 작품
        14: {
            cameraPos: [-18, pHeight, 0],
            target: [-13.5, pHeight, 0]
        },
        15: {
            cameraPos: [-18, pHeight, -5],
            target: [-13.5, pHeight, -5]
        },
        16: {
            cameraPos: [-16, pHeight, -5],
            target: [-16, pHeight, -9]
        },
        17: {
            cameraPos: [-20, pHeight, -5],
            target: [-20, pHeight, -9]
        },
    };

    function handleClick1() {
        setActive(!active);
        setButton1(!button1);
    };

    function handleClick2() {
        setActive(!active);
        setButton2(!button2)
    };

    function lookPaint(num) {
        state.cameraPos.set(...set[num].cameraPos);
        state.target.set(...set[num].target);
        state.shouldUpdate = true;
        state.clicked = true;
        console.log(num);
    };    

    // console.log(button);

    return<>
        <div className="absolute h-[100px] bottom-10 2xl:bottom-2 z-[1000]">
            <Link href="/main">
                <button className="relative top-3 left-3 2xl:bottom-0 2xl:left-16 h-12 w-12 2xl:h-24 2xl:w-24 rounded-full bg-Cpurple"
                    onClick={()=> lookPaint(1)}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" 
                        width="100" height="100" viewBox="0 0 50 50"
                        className="w-7 h-7 mx-2.5 my-2 2xl:w-14 2xl:h-14 2xl:mx-4 2xl:my-3.5"
                    >
                        <path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"></path>
                    </svg>
                </button>
            </Link>
        {button1 &&
            <button 
            id ="1"
            className="relative left-16 top-3 2xl:left-28 2xl:bottom-0 w-12 h-12 2xl:w-24 2xl:h-24 rounded-full bg-Cpurple text-white focus:outline-none" 
            onClick={()=> {
                lookPaint(1)
                setActive(!active)
                setButton1(!button1)
                if(exhibit1 === true) {
                    setExhibit1(!exhibit1)
                } else {
                    setExhibit1(exhibit1)
                }
            }}
            >    
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" fill="none" 
                    stroke="#000000" strokeWidth="2" strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="w-7 h-7 mx-2.5 my-2 2xl:w-14 2xl:h-14 2xl:mx-4 2xl:my-3.5">
                    <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z"/>
                </svg>
            </button>
        }
        {button2 &&
            <button 
                id ="1"
                className="relative left-16 top-3 2xl:left-28 2xl:bottom-0 w-12 h-12 2xl:w-24 2xl:h-24 rounded-full bg-Cpurple text-white focus:outline-none" 
                onClick={()=> {
                    lookPaint(1)
                    setActive(!active)
                    setButton2(!button2)
                    if(exhibit2 === true) {
                        setExhibit2(!exhibit2)
                    } else {
                        setExhibit2(exhibit2)
                    }
                }}
            >    
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" fill="none" 
                    stroke="#000000" strokeWidth="2" strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="w-7 h-7 mx-2.5 my-2 2xl:w-14 2xl:h-14 2xl:mx-4 2xl:my-3.5">
                    <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z"/>
                </svg>
            </button>
        }
        </div>
        <div className="absolute bottom-60 w-full h-[100px] z-[1000] text-white">
            <div className="flex flex-row">
                {button1 && <button 
                    onClick={()=> setExhibit1(!exhibit1)}
                    className={`${exhibit1 ? "opacity-0" : null} mx-auto rounded-full w-[200px] h-[50px] 2xl:w-[400px] 2xl:h-[100px] 2xl:font-bold 2xl:text-3xl bg-Cpurple`}>
                    1 전시실 둘러보기
                </button>}
                {button2 && <button
                    onClick={()=> setExhibit2(!exhibit2)} 
                    className={`${exhibit2 ? "opacity-0" : null} mx-auto rounded-full w-[200px] h-[50px] 2xl:w-[400px] 2xl:h-[100px] 2xl:font-bold 2xl:text-3xl bg-Cpurple`}>
                    2 전시실 둘러보기
                </button>}
            </div>
        </div>
        <div className="absolute bottom-40 w-full h-[100px] z-[1000] text-white">
            <div className="flex justify-between px-40">
                <button 
                    id="3"
                    className={`${active ? 'opacity-0' : 'opacity-100'} w-[200px] h-[50px] 2xl:w-[400px] 2xl:h-[100px] 2xl:font-bold 2xl:text-3xl bg-Cpurple rounded-full left-4`}
                    onClick={(e)=> {
                        lookPaint(3)
                        handleClick2()
                    }}
                >
                    전시실2
                </button>
                <button 
                    id="2"
                    className={`${active ? 'opacity-0' : 'opacity-100'} w-[200px] h-[50px] 2xl:w-[400px] 2xl:h-[100px] 2xl:font-bold 2xl:text-3xl bg-Cpurple rounded-full right-4`}
                    onClick={(e)=> {
                        lookPaint(2)
                        handleClick1()
                    }}    
                >
                    전시실1
                </button>
            </div>
        </div>
        <div className={
            `absolute bottom-28 w-full h-[80px] 2xl:h-[100px] space-x-2 overflow-hidden cursor-pointer ${exhibit1 ? 'z-[1000]': null}`
        }>
            <div className="flex flex-row">
            {trail1.map(({x, height, ...rest}, index) => (
                <animated.div 
                    key={items1[index]} 
                    onClick={()=> lookPaint(index+4)}
                    className="w-[100px] 2xl:w-[300px] h-full text-center pt-5 mx-auto bg-Cpurple border-2 rounded-full text-white 2xl:text-3xl 2xl:font-bold will-change-transform overflow-hidden" 
                    style={{
                        ...rest,
                        transform: x.to(x => `translate3d(0, ${x}px, 0)`)
                    }}>
                    <animated.div style={{ height }}>
                        {items1[index]}
                    </animated.div>
                </animated.div>
            ))}
            </div>
        </div>
        <div className={
            `absolute bottom-28 w-full h-[80px] 2xl:h-[100px] space-x-2 overflow-hidden cursor-pointer ${exhibit2 ? 'z-[1000]' : null}`
        }>
            <div className="flex flex-row">
            {trail2.map(({x, height, ...rest}, index) => (
                <animated.div 
                    key={items2[index]} 
                    onClick={()=> lookPaint(index+14)}
                    className="w-[100px] 2xl:w-[300px] h-full text-center pt-5 mx-auto bg-Cpurple border-2 rounded-full text-white 2xl:text-3xl 2xl:font-bold will-change-transform overflow-hidden" 
                    style={{
                        ...rest,
                        transform: x.to(x => `translate3d(0, ${x}px, 0)`)
                    }}>
                    <animated.div style={{ height }}>
                        {items2[index]}
                    </animated.div>
                </animated.div>
            ))}
            </div>
        </div>
    </>
};