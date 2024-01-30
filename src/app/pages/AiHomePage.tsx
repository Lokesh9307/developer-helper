'use client'
import React, { useState, Suspense } from 'react'
import { GiArchiveResearch } from "react-icons/gi";
import { IoImagesOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { GrSystem } from "react-icons/gr";
import { BsRobot } from "react-icons/bs";
import Link from 'next/link';


const AiNavItems = [
    { icon: <GiArchiveResearch />, name: 'Research', url: '/ai/research',desc:'Research AI tools accelerate knowledge discovery and innovation through advanced algorithms and data analysis' },

    { icon: <IoImagesOutline />, name: 'Image Generation', url: '/ai/imageAi',desc:'Image generation AI tools use advanced algorithms to create visually stunning and diverse digital imagery' },

    { icon: <TfiWrite />, name: 'Logo', url: '/ai/logo',desc:'Empowering creativity with precision, AI logo design tools streamline branding visions effortlessly' },

    { icon: <GrSystem />, name: 'SEO', url: '/ai/seo',desc:'SEO AI tools analyze data, optimize content, and enhance website performance,  and improving search engine rankings ' },

    { icon: <BsRobot />, name: 'Chatbot', url: '/ai/chatbot',desc:'Chatbot AI tools streamline communication, enhancing efficiency and user engagement effortlessly' },
]

function AiHomePage() {
    return (
        <section className='w-full flex flex-wrap lg:h-[30rem] h-auto lg:mt-20 mt-16 lg:gap-10 gap-6 items-center justify-center mx-auto'>
            {AiNavItems.map((items) => (
                <Link href={items.url} className='w-[300px] h-[220px] bg-primarybg border-2 border-mainBorder rounded-xl flex flex-col justify-around p-4 hover:scale-110 duration-500'>
                    <div className='flex items-center flex-col gap-5 p-5'>
                        <span className='text-4xl text-mainColor '>{items.icon}</span>
                        <span className='text-xl text-mainColor'>{items.name}</span>
                    </div>
                    <div className='text-textColor text-center text-sm'>
                        {items.desc}
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default AiHomePage