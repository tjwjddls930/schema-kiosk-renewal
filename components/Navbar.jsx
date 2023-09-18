import Image from "next/image";
import ReactSlider from "react-slider";

export default function Navbar() {

    return(
        <footer className="flex flex-col-reverse w-full h-10">
             <div className="flex flex-row space-x-2">
                <div className="flex flex-row space-x-1">
                    <Image src="" />
                    <span>KOR</span>
                </div>
                <div className="flex flex-row space-x-1">
                    <Image />
                    <span>KOR</span>
                </div>
             </div>
        </footer>
    )
}