import React, { Suspense,lazy } from 'react'
const AiNavPage = lazy(()=>import('@/app/pages/AiNavItems'))
const Card = lazy(()=>import ('@/app/pages/Card')) ;
const Loader = lazy(()=>import('@/app/pages/Loader')) ;
import '../../App.css'

const ImageAiItems = [
  {
    icon: '/assets/Ai/imageAi/starry.png',
    name: "StarryAI",
    desc: "StarryAi is a cutting-edge platform harnessing AI to unlock the mysteries of the cosmos, offering innovative tools and insights for astronomy enthusiasts and professionals alike.",
    link: "https://www.starryai.com"
  },
  {
    icon: '/assets/Ai/imageAi/fotor.svg',
    name: "Fotor",
    desc: "Fotor AI website offers cutting-edge AI-powered tools for effortless photo editing, making creativity accessible to all skill levels with its intuitive interface and smart features.",
    link: "https://www.fotor.com"
  },
  {
    icon: '/assets/Ai/imageAi/dallE.svg',
    name: "Dall-E",
    desc: "Dalle is a versatile website creation platform that empowers users to effortlessly design and customize their online presence with intuitive tools and sleek templates.",
    link: "https://www.openai.com/dall-e"
  },
  {
    icon: '/assets/Ai/imageAi/leonardo.svg',
    name: "Leonardo AI",
    desc: "Leonardo AI is an innovative platform harnessing artificial intelligence to streamline creative processes, offering cutting-edge solutions for design, marketing, and content creation.",
    link: "https://leonardo.ai/"
  },
  {
    icon: '/assets/Ai/imageAi/canvas.svg',
    name: "Canva",
    desc: "CanvaAI is a user-friendly platform leveraging artificial intelligence to streamline graphic design processes, offering a myriad of customizable templates and tools for creating stunning visuals effortlessly.",
    link: "https://www.canva.com"
  },
  {
    icon: '/assets/Ai/imageAi/dream.png',
    name: "DreamStudio",
    desc: "DreamStudio offers a user-friendly platform for aspiring artists to explore their creativity through an array of digital tools, fostering a vibrant online community of creators.",
    link: "https://beta.dreamstudio.ai/"
  },
  {
    icon: '/assets/Ai/imageAi/deepAi.svg',
    name: "DeepAI",
    desc: "DeepAI is a comprehensive online platform offering tools and resources for artificial intelligence research, including access to pre-trained models and datasets, fostering innovation and collaboration in the AI community.",
    link: "https://www.deepai.com"
  },
  {
    icon: '/assets/Ai/imageAi/craiyon.svg',
    name: "Craiyon AI",
    desc: "Crayon AI's website offers innovative AI solutions, seamlessly blending creativity and technology to revolutionize the way businesses interact with data.",
    link: "https://www.craiyon.com/"
  }
]

function ImageAi() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
      <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg  w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
        <AiNavPage />
        <hr className='bg-primarybg h-2 w-full border-black' />
        <h1 className='text-white/70 text-center w-full lg:text-3xl text-xl mb-[-10px]'>AI Images Generation</h1>
        {
          ImageAiItems.map((value, key) => (
            <Card key={key} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
          ))
        }
      </section>
      </Suspense>
    </>
  )
}

export default ImageAi