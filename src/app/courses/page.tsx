import React, { Suspense,lazy } from 'react'
const Card = lazy(()=>import ('../pages/Card')) ;
const Loader = lazy(()=>import('../pages/Loader')) ;
import 'D:\\web related all\\projects All\\Developer-Helper\\my-app\\src\\app\\App.css'


const CoursesItems = [
    {
        icon: '/assets/courses/exercism.png',
        name: 'Exercism',
        desc: 'Exercism is an online platform that offers coding exercises and mentorship to help individuals enhance their programming skills in various languages, fostering a collaborative learning environment for software development.',
        link: 'https://exercism.org/'
    },
    {
        icon: '/assets/courses/great.svg',
        name: 'Great Learning',
        desc: 'Great learning websites provide engaging and interactive content, fostering effective knowledge acquisition through diverse multimedia resources and user-friendly interfaces.',
        link: 'https://www.mygreatlearning.com/academy'
    },
    {
        icon: '/assets/courses/coursera.svg',
        name: 'Coursera',
        desc: 'Coursera is an online learning platform that offers a wide range of courses and specializations, allowing users to access high-quality educational content from top universities and institutions worldwide.',
        link: 'https://www.coursera.org/'
    },
    {
        icon: '/assets/courses/udemy.svg',
        name: 'Udemy',
        desc: 'Udemy is an online learning platform that offers a diverse range of courses taught by expert instructors, providing individuals worldwide with the opportunity to acquire new skills and knowledge in various fields.',
        link: 'https://www.udemy.com/'
    },
    {
        icon: '/assets/courses/simplilearn.svg',
        name: 'Simplilearn',
        desc: 'Simplilearn is an online learning platform offering a wide range of professional courses and certifications in various fields, providing learners with accessible and flexible opportunities to enhance their skills and advance their careers.',
        link: 'https://www.simplilearn.com/'
    },
    {
        icon: '/assets/courses/alison.svg',
        name: 'Alison',
        desc: 'Alison is an online learning platform that offers a wide range of free and certified courses, empowering learners worldwide with accessible education in diverse subjects.',
        link: 'https://alison.com/'
    },
    {
        icon: '/assets/courses/khan.png',
        name: 'Khan Academy',
        desc: 'Khan Academy is a non-profit educational platform offering a diverse range of free online courses and instructional videos, empowering learners worldwide with accessible and high-quality education across various subjects.',
        link: 'https://www.khanacademy.org/'
    },
    {
        icon: '/assets/courses/edx.svg',
        name: 'edX',
        desc: 'edX is an online learning platform founded by Harvard and MIT, offering a diverse range of courses from universities and institutions worldwide, providing accessible and quality education to learners globally.',
        link: 'https://www.edx.org/'
    },
    {
        icon: '/assets/courses/code.svg',
        name: 'Code Academy',
        desc: 'Codecademy is an online learning platform that offers interactive coding lessons in various programming languages, providing hands-on practice and real-time feedback to help users develop their coding skills.',
        link: 'https://www.codecademy.com/'
    },
    {
        icon: '/assets/courses/freecode.svg',
        name: 'FreeCodeCamp',
        desc: 'FreeCodeCamp is an online learning platform that offers free, interactive coding tutorials and projects, providing a comprehensive curriculum for individuals looking to enhance their coding skills in web development, data science, and more.',
        link: 'https://www.freecodecamp.org/'
    },
]

function CoursesPage() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg  w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative  lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
                    <h1 className='text-textColor absolute text-center top-0 text-xl p-2 lg:w-[95.2%] w-[90%]'>Courses <hr className='bg-green-700' /></h1>
                    {
                        CoursesItems.map((value, key) => (
                            <Card key={key} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
                        ))
                    }
                </section>
            </Suspense>
        </>
    )
}

export default CoursesPage