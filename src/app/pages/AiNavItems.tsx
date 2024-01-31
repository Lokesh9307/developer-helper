'use client'
import React, { useState,Suspense } from 'react'
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

    const [active,setActive] = useState(false)

    const handleClick =()=>{
        setActive(!active)
    }

    
    return (
            <div className='w-full h-20 flex gap-3 text-textColor mt-10 justify-around duration-300 border-l-4 border-r-4 border-mainBorder/75 rounded-lg bg-secondarybg'>
            {
                AiNavItems.map((items,index) => (
                    <Link href={items.url} key={index}
                        className={`flex gap-3 items-center lg:flex-row flex-col text-center p-2 lg:w-auto w-[60px] duration-100
                        ${active?'text-mainColor border-b-2 border-mainBorder':'text-textColor'}
                        hover:text-mainColor active:border-b-2 active:border-mainBorder focus:border-b-2 focus:border-mainBorder
                          
                        `}
                        onClick={()=>handleClick}
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