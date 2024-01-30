'use client'
import { Suspense, useState,lazy } from 'react';
const Card = lazy(()=>import ('../pages/Card')) ;
const Loader = lazy(()=>import('../pages/Loader')) ;
import '../App.css'

interface CardData {
    icon: string;
    name: string;
    desc: string;
    link: string;
}

const MyComponent = () => {
    const [savedCards, setSavedCards] = useState<CardData[]>(() => {
        if (typeof window !== 'undefined') {
            const savedData = localStorage.getItem('savedCards');
            return savedData ? JSON.parse(savedData) : [];
        }
        return [];
    });


    return (
        <Suspense fallback={<Loader />}>
            <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg  w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative olg:justify-normal justify-start overflow-y-scroll scroll-none h-auto'>
                <h1 className='text-textColor absolute text-center top-0 text-xl p-2 lg:w-[95.2%] w-[90%]'>My Cart<hr className='bg-green-700' /></h1>
                {savedCards.map((card, index) => (
                    <Card key={index} icon={card.icon} name={card.name} desc={card.desc} link={card.link} />
                ))}
            </section>
        </Suspense>
    );
};

export default MyComponent;
