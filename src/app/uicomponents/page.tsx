import React, { Suspense, lazy } from 'react'
const Loader = lazy(() => import('../pages/Loader'));
const Card = lazy(() => import('../pages/Card'));
import '../App.css'


const UiComponentsItem = [
    {
        icon: '/assets/uicomponents/bootstrap.png',
        name: 'Bootstap',
        desc: 'A Bootstrap website utilizes the Bootstrap framework, offering responsive design and a plethora of pre-built components for streamlined development, ensuring seamless user experiences across devices.',
        link: 'https://getbootstrap.com/'
    },
    {
        icon: '/assets/uicomponents/tailgrid.svg',
        name: 'Tailgrids',
        desc: 'TailGrids offers a sleek and intuitive UI component website, providing a seamless experience for developers to enhance their projects with customizable and responsive design elements.',
        link: 'https://tailgrids.com/'
    },
    {
        icon: '/assets/uicomponents/tailwindcss.svg',
        name: 'Tailwind UI',
        desc: 'TailGrids offers a sleek and intuitive UI component website, providing a seamless experience for developers to enhance their projects with customizable and responsive design elements.',
        link: 'https://tailwindui.com/'
    },
    {
        icon: '/assets/uicomponents/uiverse.svg',
        name: 'UI Verse',
        desc: 'TailGrids offers a sleek and intuitive UI component website, providing a seamless experience for developers to enhance their projects with customizable and responsive design elements.',
        link: 'https://uiverse.io/'
    },
    {
        icon: '/assets/uicomponents/hyper.png',
        name: 'Hyper UI',
        desc: 'Hyper UI: A sleek and intuitive website design that prioritizes user experience, offering seamless navigation and visually engaging interfaces.',
        link: 'https://www.hyperui.dev/'
    },
]

function UiComponents() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg   w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative  lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
                    <h1 className='text-textColor absolute text-center top-0 text-xl p-2 lg:w-[95.2%] w-[90%]'>Images <hr className='bg-green-700' /></h1>
                    {
                        UiComponentsItem.map((value, key) => (
                            <Card key={key} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
                        ))
                    }

                </section>
            </Suspense>
        </>
    )
}

export default UiComponents