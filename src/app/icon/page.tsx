import React, { Suspense,lazy } from 'react'
const Card = lazy(()=>import ('../pages/Card')) ;
const Loader = lazy(()=>import('../pages/Loader')) ;
import '../App.css'

const IconsItem = [
  {
    name: "Flaticon",
    link: "https://www.flaticon.com",
    desc: 'Flaticon is a popular website offering a vast collection of high-quality vector icons, providing designers and developers with a diverse resource for creating visually appealing and customizable graphics.',
    icon: '/assets/icons/flaticon.png'
  },
  {
    name: "IconScout",
    link: "https://www.iconscout.com",
    desc: 'IconScout is a comprehensive platform offering a vast collection of high-quality icons, illustrations, and design assets, making it a go-to resource for designers and developers seeking visually appealing and customizable elements for their projects.',
    icon: '/assets/icons/iconscout.png'
  },
  {
    name: "Freepik",
    link: "https://www.freepik.com",
    desc: 'Freepik is a popular online platform offering a vast collection of high-quality icons, providing designers and creators with a diverse range of visual elements to enhance their projects.',
    icon: 'assets/images/freepik.svg'
  },
  {
    name: "Font Awesome",
    link: "https://fontawesome.com",
    desc: 'Font Awesome is a popular icon library and toolkit, offering a vast collection of scalable vector icons that can be easily customized and integrated into websites, providing a sleek and modern visual appeal.',
    icon: '/assets/icons/fontawesome.svg'
  },
  {
    name: "Icons8",
    link: "https://icons8.com",
    desc: 'Icons8 is a comprehensive online platform offering a diverse collection of high-quality icons for various design projects, providing designers and developers with a valuable resource for creating visually appealing interfaces.',
    icon: '/assets/icons/icon8.png'
  },
  {
    name: "React icons",
    link: "https://react-icons.github.io/react-icons/",
    desc: 'React Icons website is a comprehensive resource offering a vast collection of customizable, SVG-based icons for React applications, simplifying the integration of visually appealing icons into web projects.',
    icon: '/assets/icons/react.svg'
  },
  {
    name: "Basicons",
    link: "https://basicons.xyz/",
    desc: 'Basicons is a user-friendly website that offers a diverse collection of high-quality basic icons, providing a simple and efficient way for designers and developers to enhance their projects with visually appealing and standardized graphical elements.',
    icon: '/assets/icons/basicons.svg'
  },

  {
    name: "Css Icons",
    link: "https://css.gg/",
    desc: 'CSS.gg is a website that provides a collection of minimalistic and customizable CSS icons, allowing developers to easily enhance the visual appeal of their web projects with a wide range of sleek and modern icons.',
    icon: '/assets/icons/css.png'
  },

  {
    name: "Lordicons",
    link: "https://lordicon.com/",
    desc: 'Lordicons website is a hub for captivating animated icons that elevate web and app design, offering a diverse collection of visually appealing and customizable vector animations.',
    icon: '/assets/icons/lordicon.svg'
  },
  {
    name: "Icon Park",
    link: "https://iconpark.oceanengine.com/home",
    desc: 'Iconpark is a user-friendly website offering a diverse collection of free, customizable icons for designers and developers, providing a convenient resource for enhancing visual elements in digital projects.',
    icon: '/assets/icons/iconpark.svg'
  },
  {
    name: "Ming Cute Icons",
    link: "https://www.mingcute.com/",
    desc: "Ming's Cute Icons website offers a delightful collection of charming and vibrant icons, adding a touch of whimsy and personality to your digital expressions.",
    icon: '/assets/icons/ming.svg'
  },
  {
    name: "Heroicons",
    link: "https://heroicons.com/",
    desc: "Heroicons is a popular website offering a sleek collection of free, MIT-licensed SVG icons for web development, providing a diverse range of customizable options to enhance the visual appeal of digital projects.",
    icon: '/assets/icons/hero.svg'
  },
  {
    name: "Feather icons",
    link: "https://feathericons.com/",
    desc: "Feather Icons is a sleek and lightweight open-source icon set designed for web development, offering a diverse collection of customizable SVG icons that can be easily integrated into projects to enhance visual appeal.",
    icon: '/assets/icons/feather.png'
  },

  {
    name: "Phosphor icons",
    link: "https://phosphoricons.com/",
    desc: "Phosphor Icons is a visually appealing website offering a diverse collection of sleek and customizable icons, providing a modern touch to web and app design.",
    icon: '/assets/icons/phosphor.svg'
  },
  {
    name: "Simple icons",
    link: "https://simpleicons.org/",
    desc: "Explore a minimalist paradise of simplicity with our simple icons website, where each design tells a story in just a glimpse, making your digital experience effortlessly intuitive and visually delightful.",
    icon: '/assets/icons/simple.png'
  },
  {
    name: "Free3dicon",
    link: "https://free3dicon.com/",
    desc: "Free3DIcons is a website offering a diverse collection of high-quality, royalty-free 3D icons for designers and developers, enhancing digital projects with visually appealing and customizable graphics.",
    icon: '/assets/icons/free3d.png'
  },

]

function IconPage() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg  w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative  lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
          <h1 className='text-textColor absolute text-center top-0 text-xl p-2 lg:w-[95.2%] w-[90%]'>Icons <hr className='bg-green-700' /></h1>

          {
            IconsItem.map((value, key) => (
              <Card key={key} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
            ))
          }

        </section>
      </Suspense>
    </>
  )
}

export default IconPage