import React, { Suspense,lazy } from 'react'
const Card = lazy(()=>import ('../pages/Card')) ;
const Loader = lazy(()=>import('../pages/Loader')) ;
import 'D:\\web related all\\projects All\\Developer-Helper\\my-app\\src\\app\\App.css'



const backgroundItems = [
  {
    icon: '/assets/backgrounds/webgradients.png',
    name: 'Web Gradients',
    desc: 'Web Gradients is a user-friendly website offering a diverse collection of captivating gradient combinations, providing designers and developers with a seamless way to enhance the visual appeal of their web projects.',
    link: 'https://webgradients.com/'
  },
  {
    icon: '/assets/backgrounds/svgbg.svg',
    name: 'SVG Backgrounds',
    desc: 'SVG backgrounds for websites offer scalability and flexibility, providing visually appealing patterns and textures that adapt seamlessly to different screen sizes, enhancing the overall aesthetic and user experience.',
    link: 'https://www.svgbackgrounds.com/'
  },
  {
    icon: '/assets/backgrounds/sphere.png',
    name: 'Mesh Gradients',
    desc: 'Mesh Gradient is a cutting-edge website that utilizing mesh gradients to create visually stunning and dynamic user interfaces. Elevating web aesthetics, it seamlessly blends colors in a captivating way, offering a unique and engaging online experience.',
    link: 'https://meshgradient.in/'
  },
  {
    icon: '/assets/backgrounds/bgjar.svg',
    name: 'Bg Jar',
    desc: "BG Jar is a dynamic website offering a diverse range of backgrounds for creative projects, providing users with a vibrant collection of high-quality images to enhance visual appeal and design versatility.",
    link: 'https://bgjar.com/'
  },
  {
    icon: '/assets/backgrounds/superdesign.svg',
    name: 'Super Designer',
    desc: "Super Designer is a cutting-edge website that seamlessly blends creativity and functionality, offering a visually stunning and user-friendly platform for individuals and businesses to showcase their unique designs and innovations.",
    link: 'https://superdesigner.co/'
  },
  {
    icon: '/assets/backgrounds/haikie.svg',
    name: 'Haikie',
    desc: "Haikie is a minimalist poetry website that invites users to explore the art of haiku, offering a platform for creating and sharing concise, three-line poems that capture moments of nature, emotion, and reflection.",
    link: 'https://haikei.app/'
  },
  {
    icon: '/assets/backgrounds/coolbg.svg',
    name: 'Cool Backgrounds',
    desc: "Discover an array of captivating and cool backgrounds on our website, transforming your digital space with vibrant aesthetics and personalized style.",
    link: 'https://coolbackgrounds.io/'
  },
  {
    icon: '/assets/backgrounds/cssdoodles.png',
    name: 'CSS Doodles',
    desc: "CSS Doodles is a creative website that showcases the artistic potential of Cascading Style Sheets (CSS), featuring a collection of visually stunning and interactive doodles created entirely through code.",
    link: 'https://css-doodle.com/'
  },
  {
    icon: '/assets/backgrounds/magic.jpeg',
    name: 'Gradient Magic',
    desc: "Gradient Magic is a dynamic website that captivates with its mesmerizing collection of seamlessly blended gradients, offering users an enchanting visual experience for creative projects and design inspiration",
    link: 'https://www.gradientmagic.com/'
  },
  {
    icon: '/assets/backgrounds/trianglify.png',
    name: 'Trianglify',
    desc: "Trianglify is a web-based tool that generates visually appealing and customizable triangular patterns, providing a simple and creative way to generate unique backgrounds for websites or graphic design projects.",
    link: 'https://trianglify.io/'
  },
  {
    icon: '/assets/backgrounds/vantajs.png',
    name: 'Vanta.js',
    desc: "Trianglify is a web-based tool that generates visually appealing and customizable triangular patterns, providing a simple and creative way to generate unique backgrounds for websites or graphic design projects.",
    link: 'https://www.vantajs.com/'
  },
]

function backgroundPage() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg  w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative  lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
          <h1 className='text-textColor absolute text-center top-0 text-xl p-2 lg:w-[95.2%] w-[90%]'>Backgrounds <hr className='bg-green-700' /></h1>

          {
            backgroundItems.map((value, key) => (
              <Card key={key} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
            ))
          }

        </section>
      </Suspense>
    </>
  )
}

export default backgroundPage