'use client'
import { Suspense, useState,lazy } from 'react';
import { CiBookmarkRemove } from "react-icons/ci";
import { MdBookmarkRemove } from "react-icons/md";
const Card = lazy(()=>import ('../pages/Card')) ;
const Loader = lazy(()=>import('../pages/Loader')) ;
import '../App.css'

interface CardData {
    icon: string;
    name: string;
    desc: string;
    link: string;
}

const MyCart = () => {
    const [savedCards, setSavedCards] = useState<CardData[]>(() => {
        if (typeof window !== 'undefined') {
            const savedData = localStorage.getItem('savedCards');
            return savedData ? JSON.parse(savedData) : [];
        }
        return [];
    });

    const handleRemoveCard = (index: number) => {
        const updatedCards = [...savedCards];
        updatedCards.splice(index, 1); // Remove the card at the specified index
        setSavedCards(updatedCards);
        localStorage.setItem('savedCards', JSON.stringify(updatedCards)); // Update local storage
    };


    return (
        <Suspense fallback={<Loader />}>
            <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 gap-x-8 bg-secondarybg  w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative lg:justify-normal md:justify-around sm:justify-around justify-around overflow-y-scroll scroll-none h-auto'>
                <h1 className='text-textColor absolute text-center top-0 text-xl p-2 lg:w-[95.2%] w-[90%]'>My Cart<hr className='bg-green-700' /></h1>
                {savedCards.map((card, index) => (
                    <div key={index} className="relative">
                    <button className="absolute top-12 lg:right-7 right-2 text-red-500 lg:text-2xl text-3xl z-10  p-[1px] rounded-lg font-bolder hover:scale-110 duration-200 bg-white" 
                    onClick={() => handleRemoveCard(index)}><MdBookmarkRemove/></button>
                    <Card icon={card.icon} name={card.name} desc={card.desc} link={card.link} />
                </div>
                ))}
            </section>
        </Suspense>
    );
};

export default MyCart;
