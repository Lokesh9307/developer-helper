import React, { Suspense,lazy } from 'react'
const AiNavPage = lazy(()=>import('@/app/pages/AiNavItems'))
const Card = lazy(()=>import ('@/app/pages/Card')) ;
const Loader = lazy(()=>import('@/app/pages/Loader')) ;
import '../../App.css'


const CopyWriteItems = [
  {
    icon: "/assets/Ai/logo/freelogo.svg",
    name: "Free Logo Design",
    desc: "Free Logo Design is a free logo maker used every day by thousands of people around the world. As its name suggests, you can create and download a logo for free. This is the perfect way to try our tool to create all components of your brand identity.",
    link: "https://www.freelogodesign.org/"
  },
  {
    icon: "/assets/Ai/logo/canvas.svg",
    name: "Canva",
    desc: "Canva's logo maker provides all of the ingredients you need to create a custom logo, fast – and free. You can choose from every template, icon, shape and font with no limitations.",
    link: "https://www.canva.com/create/logos/"
  },
  {
    icon: "/assets/Ai/logo/designevo.png",
    name: "DesignEvo",
    desc: "Browse through our different categories or search 10,000+ logo templates using keywords to find a design that meets your needs and customize it to make it your own.",
    link: "https://www.designevo.com/"
  },
  {
    icon: "/assets/Ai/logo/logo.svg",
    name: "LOGO.com",
    desc: "Our free online logo generator gives you hundreds of logo design options at no cost. Customize them and download your brand logo for free in high-resolution formats such as PNG, SVG vector files, and more.",
    link: "https://logo.com/"
  }
]


function Logo() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
      <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg  w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
        <AiNavPage />
        <hr className='bg-primarybg h-2 w-full border-black' />
        {
          CopyWriteItems.map((value, key) => (
            <Card key={key} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
          ))
        }
      </section>
      </Suspense>
    </>
  )
}

export default Logo