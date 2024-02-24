'use client'
import React, { Suspense, lazy, useEffect, useState } from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
import { MdAddLink } from "react-icons/md";
import '../App.css'
import Link from 'next/link';
const Loader = lazy(()=>import('../pages/Loader'))  ;


interface FormData {
    name: string;
    link: string;
    description: string;
}

interface CardData {
    id: string;
    name: string;
    link: string;
    description: string;
    removable: boolean;
}
function NewLink() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        link: '',
        description: '',
    });

    const [cards, setCards] = useState<CardData[]>([]);

    useEffect(() => {
        const storedCards = localStorage.getItem('cards');
        if (storedCards) {
          setCards(JSON.parse(storedCards));
        }
      }, []); // Run once when component mounts

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newCard: CardData = {
          id: Math.random().toString(36).substr(2, 9), // Generate unique id
          ...formData,
          removable: false, // Newly added cards cannot be removed
        };
        setCards(prevCards => [...prevCards, newCard]);
        localStorage.setItem('cards', JSON.stringify([...cards, newCard]));
        setFormData({ name: '', link: '', description: '' });
      };

      const handleRemoveCard = (idToRemove: string) => {
        const updatedCards = cards.filter(card => card.id !== idToRemove); // Remove the card with the matching id
        setCards(updatedCards);
        localStorage.setItem('cards', JSON.stringify(updatedCards)); // Update local storage
      };
    return (
        <>
        <Suspense fallback={<Loader/>}>
            <main className='flex flex-col w-full h-auto gap-5 p-4'>
                <section className='bg-secondarybg w-full h-[22rem] text-textColor flex justify-center items-center flex-col p-2'>
                    <h1 className='text-2xl text-center flex items-center gap-3'>Create New Link <MdAddLink className='text-3xl text-mainColor'/></h1>
                    <form action="" className='flex flex-col gap-2 border-2 border-mainBorder p-4 rounded-lg' onSubmit={handleSubmit}>
                        <div className='flex gap-5'>
                            <div className='flex gap-2'>
                                <label htmlFor="name">
                                    Name:
                                </label>
                                <input type="text" name="name" placeholder='Enter name' className='input-field bg-gray-800' value={formData.name} onChange={handleChange} required/>
                            </div>
                            <div className='flex gap-2'>
                                <label htmlFor="link">
                                    Link:
                                </label>
                                <input type="url" name="link" placeholder='Enter link' className='input-field bg-gray-800' value={formData.link} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="name">
                                Description:
                            </label>
                            <textarea name="description" id="" cols={20} rows={3} className='resize-none text-white rounded-lg p-1 bg-gray-800 overflow-hidden' placeholder='Enter Description' value={formData.description} onChange={handleChange} required></textarea>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button type="submit" className='bg-mainColor text-black p-2 rounded-lg'>
                                Create
                            </button>
                        </div>
                    </form>
                </section>

                
                <section className='bg-secondarybg w-full flex flex-col gap-10'>
                    <h1 className='text-center text-3xl text-textColor mt-10'>My Items</h1>
                    <div className='w-full h-auto flex items-center flex-wrap overflow-y-auto mx-auto p-6 lg:gap-5 gap-2 lg:justify-normal justify-center'>
                        {cards.map((card) => (
                            <div key={card.id} className='bg-primarybg w-[300px] h-[200px] border-2 border-mainBorder rounded-lg text-textColor flex justify-around items-center flex-col p-3'>
                                <div className='relative flex items-center w-full justify-center'>
                                <h3 className='text-center'>{card.name.toLocaleUpperCase()}</h3>
                                <span className='text-2xl text-red-500  cursor-pointer absolute right-0 top-[-16px]'>
                                    <IoIosRemoveCircle onClick={() => handleRemoveCard(card.id)}/>
                                    </span>
                                </div>
                                <p>{card.description.split(" ").slice(0,10).join(" ")+(card.description.split(" ").length > 10?"...":"")}</p>
                                <Link className='text-mainColor border-2 border-white/70 py-1 px-4 rounded-lg flex items-center gap-1' 
                                href={card.link} target='blank'>
                                    <span><FaExternalLinkAlt/></span>
                                    Link
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
            </Suspense>
        </>
    )
}

export default NewLink