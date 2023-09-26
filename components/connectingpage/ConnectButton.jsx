import Link from "next/link";
import Image from "next/image";
export default function ConnectButton() {

    return(
        <div className="w-3/4 h-[600px] flex flex-row mx-auto">
            <div className="flex flex-col h-full w-1/2 space-y-11">
                <div className="h-[350px] w-5/6 mx-auto">
                    <div className="flex flex-row space-x-4 justify-start">
                        <span className="text-[170px] font-bold text-Ablack drop-shadow-xl">{'01'}</span>
                        <div className="flex flex-col w-[200px] mr-4 pt-10 justify-start">
                            <div className="bg-Cpurple h-[1px] w-[70px]" />
                            <span className="text-lg text-Agrey font-bold">{'Last exhibition'}</span>
                            <span className="text-2xl text-Ablack font-bold mb-5">{'지난 전시'}</span>
                            <span className="text-base text-Cgrey font-bold">{'2009년부터 2023년까지의'}</span>                        
                            <span className="text-base text-Cgrey font-bold">{'전시를 감상하실 수 있습니다.'}</span>
                        </div>
                        <div className="flex flex-col-reverse pb-8">
                            <img 
                                className="h-12 w-12"
                                src="/img/connectpage/arrow_icon.png"
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <div className="bg-Ablack h-[1px] w-[480px] mx-auto" />
                </div>
                <Link href="/artist">
                    <div className="h-[350px] w-5/6 mx-auto">
                        <div className="flex flex-row space-x-4 overflow-hidden justify-start">
                            <span className="text-[170px] font-bold text-Ablack drop-shadow-xl">{'02'}</span>
                            <div className="flex flex-col w-[200px] mr-4 pt-10 justify-start">
                                <div className="bg-Cpurple h-[1px] w-[70px]" />
                                <span className="text-lg text-Agrey font-bold">{'Present exhibition'}</span>
                                <span className="text-2xl text-Ablack font-bold mb-5">{'현재 전시'}</span>
                                <span className="text-base text-Cgrey font-bold">{'현재 진행중인 전시를'}</span>                        
                                <span className="text-base text-Cgrey font-bold">{'감상하실 수 있습니다.'}</span>
                            </div>
                            <div className="flex flex-col-reverse pb-8">
                                <img 
                                    className="h-12 w-12"
                                    src="/img/connectpage/arrow_icon.png"
                                    alt="arrow"
                                />
                            </div>
                        </div>
                        <div className="bg-Ablack h-[1px] w-[480px] mx-auto" />
                    </div>
                </Link>
            </div>
            <div className="flex flex-col h-full w-1/2">
                <div className="h-[350px] w-5/6 mx-auto">
                    <div className="flex flex-row space-x-4 justify-start">
                        <span className="text-[170px] font-bold text-Ablack drop-shadow-xl">{'03'}</span>
                        <div className="flex flex-col w-[200px] pt-10 mr-4 justify-start">
                            <div className="bg-Cpurple h-[1px] w-[70px]" />
                            <span className="text-lg text-Agrey font-bold">{'Scheduled exhibition'}</span>
                            <span className="text-2xl text-Ablack font-bold mb-5">{'지난 전시'}</span>
                            <span className="text-base text-Cgrey font-bold">{'예정된 전시에 대한 정보를를'}</span>                        
                            <span className="text-base text-Cgrey font-bold">{'얻을 수 있습니다다.'}</span>
                        </div>
                        <div className="flex flex-col-reverse pb-8">
                            <img 
                                className="h-12 w-12"
                                src="/img/connectpage/arrow_icon.png"
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <div className="bg-Ablack h-[1px] w-[480px] mx-auto" />
                </div>
                <div className="h-[350px] w-5/6 mx-auto">
                    <div className="flex flex-row space-x-4 justify-start">
                        <span className="text-[170px] font-bold text-Ablack drop-shadow-xl">{'04'}</span>
                        <div className="flex flex-col w-[200px] pt-10 mr-4 justify-start">
                            <div className="bg-Cpurple h-[1px] w-[70px]" />
                            <span className="text-lg text-Agrey font-bold">{'Collection tour'}</span>
                            <span className="text-2xl text-Ablack font-bold mb-5">{'소장품 관람'}</span>
                            <span className="text-base text-Cgrey font-bold">{'미술관이 소장하고 있는 전시물을'}</span>                        
                            <span className="text-base text-Cgrey font-bold">{'관람하실 수 있습니다.'}</span>
                        </div>
                        <div className="flex flex-col-reverse pb-8">
                            <img 
                                className="h-12 w-12"
                                src="/img/connectpage/arrow_icon.png"
                                alt="arrow"
                            />
                        </div>
                    </div>
                    <div className="bg-Ablack h-[1px] w-[480px] mx-auto" />
                </div>
            </div>
        </div>
    )
}