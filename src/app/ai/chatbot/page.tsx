import React, { Suspense,lazy } from 'react'
const AiNavPage = lazy(()=>import('@/app/pages/AiNavItems'))
const Card = lazy(()=>import ('@/app/pages/Card')) ;
const Loader = lazy(()=>import('@/app/pages/Loader')) ;
import 'D:\\web related all\\projects All\\Developer-Helper\\my-app\\src\\app\\App.css'
const ChatbotItems = [
  {
    icon: "/assets/Ai/chatbot/tidio.svg",
    name: "Tidio",
    desc: "Tidio allows you to create a no-code chatbot for free with a visual editor. It provides a step-by-step guide to creating your own chatbot, making the process fast, easy, and fun.",
    link: "https://www.tidio.com/chatbots/"
  },
  {
    icon: "/assets/Ai/chatbot/simplechat.svg",
    name: "Chat Simple",
    desc: "Engage with our user-friendly chatbot website for quick and personalized assistance. Simplifying communication one chat at a time!",
    link: "https://www.chatsimple.ai/"
  },
  {
    icon: "/assets/Ai/chatbot/appypie.svg",
    name: "Appy Pie Chatbot Builder",
    desc: "Appy Pie Chatbot Builder is a user-friendly platform that comes with pre-built templates, making it easier to create a chatbot without extensive coding knowledge.",
    link: ""
  },
  {
    icon: "/assets/Ai/chatbot/zapier.svg",
    name: "Zapier",
    desc: "Zapier's chatbot integration simplifies workflows by automating tasks across various platforms, offering seamless communication between users and applications on their website.",
    link: "https://zapier.com/ai/chatbot"
  },
  {
    icon: "/assets/Ai/chatbot/droxy.svg",
    name: "Droxy Ai",
    desc: "Droxy Chatbot offers intuitive conversational interfaces for seamless customer interactions, enhancing user experience and streamlining communication processes.",
    link: "https://www.droxy.ai/"
  },
  {
    icon: "/assets/Ai/chatbot/chatbase.svg",
    name: "Chat Base",
    desc: "Chatbase is a comprehensive analytics platform designed to provide insights into chatbot interactions, allowing developers to optimize performance and enhance user experiences.",
    link: "https://www.chatbase.co/"
  }
]


function Chatbot() {
  return (
    <>
      <Suspense fallback={<Loader/>}>
      <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg  w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none' >
        <AiNavPage />
        <hr className='bg-primarybg h-2 w-full border-black' />
        {
           ChatbotItems.map((value, key) => (
            <Card key={key} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
          ))
        }
      </section>
      </Suspense>
    </>
  )
}

export default Chatbot