import { SectionHome } from "@/modules/explorar/components/section-home";
import { HeaderPageHome } from "@/modules/header/HeaderPageHome";
import { Pin } from "@/modules/pin/Pin";
import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

interface ExplorarSection {
    title: string
    subtitle: string
    url: string
    parragraf: string
    filter: string
}

export function ExplorarSecion({ title, url, subtitle, parragraf, filter }: ExplorarSection) {
    const [_, setLocation] = useLocation()
    return (
        <>
            <HeaderPageHome />
            <div className='flex flex-col items-center justify-center relative'>
                <button
                    onClick={() => setLocation('/home/explorar')}
                    className='absolute w-12 h-12 flex justify-center bg-white items-center rounded-full hover:bg-slate-300 left-3 top-3'
                >
                    <ArrowLeft className='text-3xl font-bold' />
                </button>
                <SectionHome
                    src={url}
                    parragraf={subtitle}
                    title={title}
                />
                <p className='w-[290px] sm:w-[600px] ms:w-[800px] py-3'>
                    {parragraf}
                </p>
            </div >
            <div className='w-full mt-16 flex justify-center items-center'>
                <div className='container sm:columns-2 md:columns-4 lg:columns-5 xl:columns-6 2xl:columns-8 gap-8 p-4'>
                    <Pin filter={filter} />
                </div>
            </div>
        </>

    )
}