import Link from "next/link"

export default function Artistcontent({order, title, name, text}) {
    return (
        <div className="2xl:w-full flex flex-row 2xl:mx-auto">
            <span className="text-8xl w-1/12 2xl:w-2/12 font-bold text-black pl-32 2xl:text-9xl 2xl:pl-56">{order}</span>
            <div className="flex flex-row h-[180px] 2xl:h-[500px] w-1/2 ml-64 2xl:ml-96 items-center shadow-lg px-8 bg-Awhite mx-auto rounded-lg">
                <div className="flex flex-col space-y-3 2xl:space-y-6 w-1/4">
                    <div className="bg-Cpurple h-[1.5px] w-10 2xl:w-14" />
                    <span className="text-lg 2xl:text-3xl text-Cgrey font-bold">{title}</span>
                    <span className="text-xl 2xl:text-5xl text-Ablack font-bold mb-4">{name}</span>
                    <button className="text-base h-8 w-[120px] 2xl:text-3xl 2xl:h-16 2xl:w-[250px] text-Awhite font-bold rounded-full bg-gradient-to-r from-Agradient to-Bgradient">
                        <Link href="/paint">
                            {'작품 보러가기'}
                        </Link>
                    </button>
                </div>
                <div className="p-2 w-3/4">
                    <p className="text-black text-base 2xl:text-2xl">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}