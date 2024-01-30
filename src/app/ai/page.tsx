import React, { Suspense,lazy } from 'react'
const Loader = lazy(()=>import('../pages/Loader')) ;
const AiHomePage = lazy(()=>import('../pages/AiHomePage'))
import '../App.css'


function AiPage() {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg  w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative  overflow-y-scroll scroll-none h-screen scroll-none'>
                    <h1 className='text-textColor absolute text-center top-0 text-xl p-2 lg:w-[95.2%] w-[90%]'>Ai Tools <hr className='bg-green-700' /></h1>
                    <AiHomePage />
                </section>
            </Suspense>
        </>
    )
}

export default AiPage