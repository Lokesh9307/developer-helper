'use client'
import React, { Suspense } from 'react'
import Loader from '../pages/Loader'
import Card from '../pages/Card'


const VirtualIntershipItems = [
    {
        icon: '/assets/virtual/codesoft.png',
        name: 'CodeSoft',
        desc: 'Codsoft offers free virtual internships in various tech domains like web development, app development, and data science. They partner with companies to provide real-world projects, helping you gain practical experience and build your portfolio.',
        link: 'https://www.codsoft.in/'
    },
    {
        icon: '/assets/virtual/codealpha.png',
        name: 'Code Alpha',
        desc: "CodeAlpha.tech offers paid virtual internships in tech fields like web development and data science. They claim high completion rates and improved skills for graduates. Look for websites mentioning 'free' internships if that's your focus.",
        link: 'https://www.codealpha.tech/internship.html'
    },
    {
        icon: '/assets/virtual/internpe.png',
        name: 'InternPe',
        desc: "While Internpe isn't specifically known for free virtual internships, it connects students with various internship opportunities, including some virtual ones. Explore their website or contact them directly for more info on current free virtual internship options.",
        link: 'https://internpe.in/index.html'
    },
    {
        icon: '/assets/virtual/forage.svg',
        name: 'Forage',
        desc: "Forage empowers you to explore diverse careers with free, immersive job simulations!Gain hands-on experience through realistic tasks, honing your skills and showcasing your potential to top companies. Dive into fields like marketing, finance, and data analysis, unlocking valuable career insights and building confidence - all at no cost!",
        link: 'https://www.theforage.com/'
    },
    {
        icon: '/assets/virtual/InternDEV.png',
        name: 'InternDev',
        desc: "InternDev connects passionate students with free, virtual internships in tech!Explore web design, app development, data science, and more. Gain real-world experience, build your portfolio, and network with industry professionals.",
        link: 'https://interndev.in/index.html'
    },
    {
        icon: '/assets/virtual/bharat.png',
        name: 'Bharat Intern',
        desc: "Bharat Intern connects students with exciting virtual internship opportunities in various fields, all from the comfort of your home!Gain valuable work experience, **develop essential skills, and build your network -for free!",
        link: 'https://bharatintern.live/b/apply/d/b/index.html'
    },
]
let alertTimeout: NodeJS.Timeout | null = null;
const AlertMessage =()=>{
    if (typeof window !== 'undefined'){
        if (alertTimeout === null) {
            window.alert("Explore virtual internships! But remember, safety first! Research companies thoroughly, use secure connections, and be cautious with personal info. Your skills and experience matter, but your well-being is top priority.")
        
            // Set a timeout to reset the alertTimeout variable after 1 second
            alertTimeout = setTimeout(() => {
              alertTimeout = null;
            }, 1000);
          }
    }
}
function VirtualInternsip() {  
    AlertMessage()
    return (
        <>
            <Suspense fallback={<Loader />}>
                <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg  w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative  lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
                    <h1 className='text-textColor absolute text-center top-0 text-xl p-2 lg:w-[95.2%] w-[90%]'>Virtual Internships <hr className='bg-green-700' /></h1>
                    {
                        VirtualIntershipItems.map((value, key) => (
                            <Card key={key} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
                        ))
                    }
                </section>
            </Suspense>
        </>
    )
}

export default VirtualInternsip