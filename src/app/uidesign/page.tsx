import React, { Suspense, lazy } from 'react'
const Loader = lazy(() => import('../pages/Loader'));
const Card = lazy(() => import('../pages/Card'));
import '../App.css'

const UidesignItems = [
    {
        icon: '/assets/uidesign/minimal.png',
        name: 'Minimal Design',
        desc: 'A minimal design website captivates with its simplicity, boasting clean lines and intuitive navigation for an effortlessly elegant user experience.',
        link: 'https://minimal.gallery/'
    },
    {
        icon: '/assets/uidesign/darkmode.svg',
        name: 'Dark Mode Design',
        desc: 'Experience sleek sophistication and reduced eye strain with our dark mode design, offering a modern twist on website aesthetics for enhanced readability and comfort.',
        link: 'https://www.darkmodedesign.com/'
    },
    {
        icon: '/assets/uidesign/awwwards.png',
        name: 'Awwwards Design',
        desc: 'Awwwards is a prestigious online platform showcasing top-tier website designs, celebrating innovation, creativity, and excellence in digital craftsmanship.',
        link: 'https://www.awwwards.com/'
    },
    {
        icon: '/assets/uidesign/refero.svg',
        name: 'Refero',
        desc: "Refero's website design is sleek and intuitive, offering a seamless user experience for effortlessly navigating through its array of services and resources.",
        link: 'https://refero.design/'
    },
    {
        icon: '/assets/uidesign/stack.svg',
        name: 'Stack Sorted',
        desc: "Stack Sorted is a user-friendly website offering curated lists and reviews of top-rated tech products, helping consumers make informed purchasing decisions effortlessly.",
        link: 'https://stacksorted.com/buttons'
    },
]

function UiDesign() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg   w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative  lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
                    <h1 className='text-textColor absolute text-center top-0 text-xl p-2 lg:w-[95.2%] w-[90%]'>Images <hr className='bg-green-700' /></h1>
                    {
                        UidesignItems.map((value, key) => (
                            <Card key={key} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
                        ))
                    }

                </section>
            </Suspense>
        </>
    )
}

export default UiDesign