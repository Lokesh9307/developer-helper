import React, { Suspense,lazy } from 'react'
const AiNavPage = lazy(()=>import('@/app/pages/AiNavItems'))
const Card = lazy(()=>import ('@/app/pages/Card')) ;
const Loader = lazy(()=>import('@/app/pages/Loader')) ;
import '../../App.css'


const SeoItems = [
  {
    icon: "/assets/Ai/seo/autolink.svg",
    name: "Autolink.ai",
    desc: "This tool is known for its seamless integration with popular website platforms like Webflow, WordPress, and Shopify. It can analyze website content and automatically generate internal links that improve navigation, SEO, and overall website performance.",
    link: "https://www.autolink.ai/"
  },
  {
    icon: "/assets/Ai/seo/seowriting.png",
    name: "SEOWriting.ai",
    desc: "This is one of the top free AI tools for content generation. It uses AI to create high-quality SEO-optimized content for various purposes, helping businesses create engaging and relevant content more efficiently.",
    link: "https://seowriting.ai/"
  },
  {
    icon: "/assets/Ai/seo/quattr.svg",
    name: "Quattr",
    desc: "Quattr offers a variety of free AI SEO tools that can help you craft compelling title tags, meta descriptions, SEO-friendly URLs, and H1 headings effortlessly with just a few clicks.",
    link: "https://www.quattr.com/"
  },
  {
    icon: "/assets/Ai/seo/seo.svg",
    name: "SEO.ai",
    desc: "This website provides a collection of popular free SEO and AI tools for you to use.",
    link: "https://seo.ai/"
  }
]


function Seo() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
      <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg  w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative  lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
        <AiNavPage />
        <hr className='bg-primarybg h-2 w-full border-black' />
        {
          SeoItems.map((value, key) => (
            <Card key={key} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
          ))
        }
      </section>
      </Suspense>
    </>
    
  )
}

export default Seo