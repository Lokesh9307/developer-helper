import React, { Suspense,lazy } from 'react'
const Loader = lazy(()=>import('../pages/Loader')) ;
const Card = lazy(()=>import ('../pages/Card')) ;
import 'D:\\web related all\\projects All\\Developer-Helper\\my-app\\src\\app\\App.css'


const HostingItems = [
    {
        icon: '/assets/hosting/github.svg',
        name: 'Github',
        desc: 'Static website hosting directly from your GitHub repository, supporting custom domains.',
        link: 'https://github.com/'
    },
    {
        icon: '/assets/hosting/netlify.png',
        name: 'Netlify',
        desc: 'Free hosting for static websites with continuous deployment from Git, including features like forms and serverless functions.',
        link: 'https://www.netlify.com/'
    },
    {
        icon: '/assets/hosting/vercel.svg',
        name: 'Vercel',
        desc: 'Vercel is a cloud platform that simplifies the deployment and hosting of web applications, providing a seamless experience for developers with features like automatic deployments and serverless functions.',
        link: 'https://vercel.com/'
    },
    {
        icon: '/assets/hosting/heroku.svg',
        name: '',
        desc: 'Host dynamic web applications for free with limitations on usage hours, requiring Git-based deployment.',
        link: 'https://www.heroku.com/'
    },
    {
        icon: '/assets/hosting/infinity.png',
        name: 'Infinity Free',
        desc: 'Ad-supported free hosting with unlimited disk space and bandwidth, supporting PHP and MySQL',
        link: 'https://www.infinityfree.com/'
    },
    {
        icon: '/assets/hosting/000webhost.svg',
        name: '000webhost',
        desc: 'Ad-supported hosting with PHP, MySQL, and cPanel, including a website builder for easy setup',
        link: 'https://in.000webhost.com/'
    },
    {
        icon: '/assets/hosting/award.svg',
        name: 'Award Space',
        desc: 'Free hosting with 1 GB storage, 5 GB monthly traffic, and support for PHP, MySQL, among other features, with ads.',
        link: 'https://www.awardspace.com/'
    },
]

function HostingPage() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg  w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative  lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
                    <h1 className='text-textColor absolute text-center top-0 text-xl p-2 lg:w-[95.2%] w-[90%]'>Hosting Platforms <hr className='bg-green-700' /></h1>
                    {
                        HostingItems.map((value, index) => (
                            <Card key={index} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
                        ))
                    }
                </section>
            </Suspense>
        </>
    )
}

export default HostingPage