import React, { Suspense,lazy } from 'react'
const AiNavPage = lazy(()=>import('@/app/pages/AiNavItems'))
const Card = lazy(()=>import ('@/app/pages/Card')) ;
const Loader = lazy(()=>import('@/app/pages/Loader')) ;
import '../../App.css'


const ResearchItems = [
  { icon: '/assets/Ai/research/chatgpt.svg', name: 'ChatGPT', desc: 'ChatGPT website offers an immersive experience where users can interact with an AI language model, enabling engaging conversations and access to a wide range of information and assistance.', link: 'https://chat.openai.com/' },

  { icon: '/assets/Ai/research/claude.svg', name: 'Claude Ai', desc: 'Claude AI is a user-friendly platform harnessing artificial intelligence to streamline data analysis and automate decision-making processes, empowering businesses to make informed choices swiftly.', link: 'https://claude.ai/' },

  { icon: '/assets/Ai/research/bing.svg', name: 'Bing Chat', desc: '"Bing Chat is a user-friendly platform for real-time communication, offering seamless messaging and collaboration features to enhance productivity and connectivity."', link: 'https://www.bing.com/search?q=Bing+AI&showconv=1' },

  { icon: '/assets/Ai/research/perplexity.png', name: 'Perplexity Ai', desc: "Perplexity AI's website offers innovative solutions that unravel complex data with ease, paving the way for simplified insights and smarter decision-making.", link: 'https://www.perplexity.ai/' },
]

function Research() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg o w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
          <AiNavPage />
          <hr className='bg-primarybg h-2 w-full border-black' />
          <h1 className='text-white/70 text-center w-full lg:text-3xl text-xl mb-[-10px]'>Research with AI</h1>
          {
            ResearchItems.map((value, key) => (
              <Card key={key} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
            ))
          }
        </section>
      </Suspense>
    </>
  )
}

export default Research