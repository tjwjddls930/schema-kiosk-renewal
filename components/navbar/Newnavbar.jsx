import React, {useState} from "react";
import { IonIcon } from "@ionic/react";

const Newnavbar = () => {
    const [active, setActive] = useState(0);
    const Menus = [
        { name: "Home", icon: "home-outline", dis: "translate-x-0" },
        { name: "Profile", icon: "person-outline", dis: "translate-x-16" },
        { name: "Message", icon: "chatbubble-outline", dis: "translate-x-32" },
        { name: "Photos", icon: "camera-outline", dis: "translate-x-48" },
        { name: "Settings", icon: "settings-outline", dis: "translate-x-64" },
    ];
    return(
    <div className="bg-Ablue max-h-[4.4rem] px-6 rounded-t-xl fixed lg:flex bottom-0 w-screen h-16 screen-w:h-28 screen-w:px-12">
        <ul className="flex relative">
          <span
            className={`bg-Bblue duration-500 ${Menus[active].dis} border-4 border-Ablue h-16 w-16 absolute
           -top-5 rounded-full`}
          >
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] 
            rounded-tr-[11px] shadow-myShadow1"
            ></span>
            <span
              className="w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] 
            rounded-tl-[11px] shadow-myShadow2"
            ></span>
          </span>
          {Menus.map((menu, i) => (
            <li key={i} className="w-16">
              <a
                className="flex flex-col text-center pt-6"
                onClick={() => setActive(i)}
              >
                <span
                  className={`text-xl cursor-pointer duration-500 ${
                    i === active && "-mt-6 text-white"
                  }`}
                >
                  {/* <IonIcon icon={menu.icon} /> */}
                </span>
                <span
                  className={` ${
                    active === i
                      ? "translate-y-4 duration-700 opacity-100"
                      : "opacity-0 translate-y-10"
                  } `}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
    </div>
    )
}

export default Newnavbar;