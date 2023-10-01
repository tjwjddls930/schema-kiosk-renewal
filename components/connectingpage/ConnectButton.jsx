import Link from "next/link";
import Image from "next/image";
export default function ConnectButton() {

    return(
        <div className="w-3/4 h-[500px] 2xl:h-3/4 flex flex-row mx-auto">
            <div className="flex flex-col h-full w-1/2">
                <Link href="/artist">
                    <div className="h-[250px] 2xl:h-[500px] w-5/6 mx-auto">
                        <div className="flex flex-row space-x-4 justify-start 2xl:justify-center">
                            <span className="text-[150px] 2xl:text-[250px] font-bold text-Ablack drop-shadow-xl">{'01'}</span>
                            <div className="flex flex-col w-[170px] 2xl:w-[350px] mr-4 pt-10 justify-start 2xl:justify-center">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-lg 2xl:text-2xl text-Agrey font-bold">{'Last exhibition'}</span>
                                <span className="text-2xl 2xl:text-4xl text-Ablack font-bold mb-5">{'지난 전시'}</span>
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'2009년부터 2023년까지의'}</span>                        
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'전시를 감상하실 수 있습니다.'}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 2xl:h-24 2xl:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1px] w-[400px] 2xl:w-[600px] mx-auto" />
                    </div>
                </Link>
                <Link href="/artist">
                    <div className="h-[250px] 2xl:h-[500px] w-5/6 mx-auto">
                        <div className="flex flex-row space-x-4 overflow-hidden justify-start 2xl:justify-center">
                            <span className="text-[150px] 2xl:text-[250px] font-bold text-Ablack drop-shadow-xl">{'02'}</span>
                            <div className="flex flex-col w-[170px] 2xl:w-[350px] mr-4 pt-10 justify-start 2xl:justify-center">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-lg 2xl:text-2xl text-Agrey font-bold">{'Present exhibition'}</span>
                                <span className="text-2xl 2xl:text-4xl text-Ablack font-bold mb-5">{'현재 전시'}</span>
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'현재 진행중인 전시를'}</span>                        
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'감상하실 수 있습니다.'}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 2xl:h-24 2xl:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1px] w-[400px] 2xl:w-[600px] mx-auto" />
                    </div>
                </Link>
            </div>
            <div className="flex flex-col h-full w-1/2">
                <Link href="/artist">
                    <div className="h-[250px] 2xl:h-[500px] w-5/6 mx-auto">
                        <div className="flex flex-row space-x-4 justify-start 2xl:justify-center">
                            <span className="text-[150px] 2xl:text-[250px] font-bold text-Ablack drop-shadow-xl">{'03'}</span>
                            <div className="flex flex-col w-[170px] 2xl:w-[350px] pt-10 mr-4 justify-start 2xl:justify-center">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-lg 2xl:text-2xl text-Agrey font-bold">{'Scheduled exhibition'}</span>
                                <span className="text-2xl 2xl:text-4xl text-Ablack font-bold mb-5">{'지난 전시'}</span>
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'예정된 전시에 대한 정보를를'}</span>                        
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'얻을 수 있습니다다.'}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 2xl:h-24 2xl:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1px] w-[400px] 2xl:w-[600px] mx-auto" />
                    </div>
                </Link>
                <Link href="/artist">
                    <div className="h-[250px] 2xl:h-[500px] w-5/6 mx-auto">
                        <div className="flex flex-row space-x-4 justify-start 2xl:justify-center">
                            <span className="text-[150px] 2xl:text-[250px] font-bold text-Ablack drop-shadow-xl">{'04'}</span>
                            <div className="flex flex-col w-[170px] 2xl:w-[350px] pt-10 mr-4 justify-start 2xl:justify-center">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-lg 2xl:text-2xl text-Agrey font-bold">{'Collection tour'}</span>
                                <span className="text-2xl 2xl:text-4xl text-Ablack font-bold mb-5">{'소장품 관람'}</span>
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'미술관이 소장하고 있는 전시물을'}</span>                        
                                <span className="text-base 2xl:text-xl text-Cgrey font-bold">{'관람하실 수 있습니다.'}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12 2xl:h-24 2xl:w-24"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1px] w-[400px] 2xl:w-[600px] mx-auto" />
                    </div>
                </Link>
            </div>
        </div>
    )
}