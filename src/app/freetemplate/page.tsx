import React, { Suspense, lazy } from 'react'
const Loader = lazy(() => import('../pages/Loader'));
const Card = lazy(() => import('../pages/Card'));
import '../App.css'

const TemplateItems = [
    {
        icon: '/assets/freetemplates/tim.jpg',
        name: 'Creative Tim',
        desc: 'Creative Tim is a platform offering beautifully designed UI kits and templates, empowering developers and designers to create stunning web applications with ease.',
        link: 'https://www.creative-tim.com/'
    },
    {
        icon: '/assets/freetemplates/zerotheme.png',
        name: 'Zero Theme',
        desc: 'Zero Theme: Where simplicity meets sophistication in web design. Elevate your online presence with clean, minimalist aesthetics.',
        link: 'https://www.zerotheme.com/'
    },
    {
        icon: '/assets/freetemplates/bootstrap.png',
        name: 'Bootstrap Made',
        desc: 'Zero Theme: Where simplicity meets sophistication in web design. Elevate your online presence with clean, minimalist aesthetics.',
        link: 'https://bootstrapmade.com/'
    },
]

function Template() {
  return (
    <>
            <Suspense fallback={<Loader />}>
                <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg   w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative  lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
                    <h1 className='text-textColor absolute text-center top-0 text-xl p-2 lg:w-[95.2%] w-[90%]'>Templates <hr className='bg-green-700' /></h1>
                    {
                        TemplateItems.map((value, key) => (
                            <Card key={key} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
                        ))
                    }

                </section>
            </Suspense>
        </>
  )
}

export default Template