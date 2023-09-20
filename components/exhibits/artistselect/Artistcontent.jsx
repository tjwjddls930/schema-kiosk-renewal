import Link from "next/link"

export default function Artistcontent({order, title, name, text}) {
    return (
        <div className="flex flex-row">
            <span className="text-8xl w-1/12 font-bold text-black pl-32">{order}</span>
            <div className="flex flex-row h-[220px] w-1/2 ml-64 items-center shadow-lg px-8 bg-Awhite">
                <div className="flex flex-col space-y-3 w-1/4">
                    <div className="bg-Cpurple h-[1.5px] w-10" />
                    <span className="text-lg text-Cgrey font-bold">{title}</span>
                    <span className="text-xl text-black font-bold mb-4">{name}</span>
                    <button className="text-lg h-10 w-[150px] text-Awhite font-bold rounded-full bg-gradient-to-r from-Agradient to-Bgradient">
                        <Link href="/exhibit/present/artist/paint">
                            {'작품 보러가기'}
                        </Link>
                    </button>
                </div>
                <div className="p-2 w-3/4">
                    <p className="text-black text-base">
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}