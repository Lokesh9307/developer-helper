'use client'
import React, { useState,Suspense, useEffect } from 'react'
import { GiArchiveResearch } from "react-icons/gi";
import { IoImagesOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { GrSystem } from "react-icons/gr";
import { BsRobot } from "react-icons/bs";
import Link from 'next/link';

const AiNavItems = [
    { icon: <GiArchiveResearch />, name: 'Research', url: '/ai/research' },
    { icon: <IoImagesOutline />, name: 'Image Generation', url: '/ai/imageAi' },
    { icon: <TfiWrite />, name: 'Logo', url: '/ai/logo' },
    { icon: <GrSystem />, name: 'SEO', url: '/ai/seo' },
    { icon: <BsRobot />, name: 'Chatbot', url: '/ai/chatbot' },
]

function AiNavPage() {

    const [active, setActive] = useState<number | null>(() => {
        const storedIndex = localStorage.getItem('activeIndex');
        return storedIndex ? parseInt(storedIndex, 10) : null;
    });
    useEffect(() => {
        if (active !== null) {
            localStorage.setItem('activeIndex', active.toString());
        } else {
            localStorage.removeItem('activeIndex');
        }
    }, [active]);

    const handleClick = (index: number) => {
        setActive(index);
    };



    
    return (
            <div className='w-full h-20 flex gap-3 text-textColor mt-10 justify-around duration-300 border-l-4 border-r-4 border-mainBorder/75 rounded-lg bg-secondarybg'>
            {
                AiNavItems.map((items,index) => (
                    <Link href={items.url} key={index}
                        className={`flex gap-3 items-center lg:flex-row flex-col text-center p-2 lg:w-auto w-[60px] duration-100
                        ${active==index?'text-mainColor':'text-textColor'}
                        hover:text-mainColor`}
                        onClick={()=>handleClick(index)}
                    >
                        <span className='lg:text-xl text-sm'>{items.icon}</span>
                        <span className='lg:text-xl text-[10px]'>{items.name}</span>
                    </Link>
                ))
            }
        </div>
    )
}
export default AiNavPage