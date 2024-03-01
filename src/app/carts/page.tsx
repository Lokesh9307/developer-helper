'use client'
import { Suspense, useState, lazy } from 'react';
import { CiBookmarkRemove } from "react-icons/ci";
import { MdBookmarkRemove } from "react-icons/md";
const Card = lazy(() => import('../pages/Card'));
const Loader = lazy(() => import('../pages/Loader'));
import '../App.css'
import { FaSearch } from 'react-icons/fa';

interface CardData {
    icon: string;
    name: string;
    desc: string;
    link: string;
}

const MyCart = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');
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

    const filteredCards = savedCards.filter(card =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Suspense fallback={<Loader />}>
            <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 gap-x-8 bg-secondarybg  w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative  overflow-y-scroll scroll-none h-auto justify-center'>
                <h1 className='text-textColor  text-center  text-xl p-2 lg:w-[95.2%] w-[90%]'>My Cart<hr className='bg-green-700' /></h1>
                  {/* Search input field */}
                  <div className="flex justify-center items-center  bg-primarybg p-2 text-lg ring-1 ring-white/50 rounded-lg gap-2 w-full h-[50px] sticky">
                    <FaSearch className='text-xl text-white' />
                    <input
                        type="text"
                        placeholder="Search by name"
                        className="input-field bg-secondarybg focus:outline-none "
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className='flex flex-wrap w-full h-full lg:justify-normal md:justify-around sm:justify-around justify-around'>
                {filteredCards.length > 0 ? (
                        filteredCards.map((card, index) => (
                            <div key={index} className="relative">
                                <button className="absolute top-12 lg:right-7 right-2 text-red-500 lg:text-2xl text-3xl z-10 p-[1px] rounded-lg font-bolder hover:scale-110 duration-200 bg-white"
                                    onClick={() => handleRemoveCard(index)}><MdBookmarkRemove /></button>
                                <Card icon={card.icon} name={card.name} desc={card.desc} link={card.link} />
                            </div>
                        ))
                    ) : (
                        <div className="text-textColor text-center mt-5 text-xl">
                            <h1 >
                            No items found!
                            </h1>
                        </div>
                    )}
                </div>
            </section>
        </Suspense>
    );
};

export default MyCart;
