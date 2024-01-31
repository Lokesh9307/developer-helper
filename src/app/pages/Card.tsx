'use client'
import Image from 'next/image'
import Link from 'next/link';
import { FiLink } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";
import { useState } from 'react';

interface Props {
  icon: string;
  name: string;
  desc: string;
  link: string;
}

const Card: React.FC<Props> = ({ icon, name, desc, link }: Props) => {
  const [addedToCart, setAddedToCart] = useState<boolean>(false);

  const handleBookmarkClick = () => {
    const cardData = { icon, name, desc, link };
    let existingData = JSON.parse(localStorage.getItem('savedCards') || '[]');

    const isCardDataExists = existingData.some((item: any) => {
      return (
        item.name === cardData.name &&
        item.desc === cardData.desc &&
        item.link === cardData.link
      );
    });


    if (!isCardDataExists) {
      existingData.push(cardData);
      localStorage.setItem('savedCards', JSON.stringify(existingData));
      setAddedToCart(true)

      setTimeout(() => {
        setAddedToCart(false);
      }, 3000);
    }

  };


  return (
    <div className='lg:w-[350px] lg:h-[200px] md:w-[260px] md:h-[220px] w-auto h-auto bg-secondarybg flex flex-col gap-2 border-2 border-mainBorder rounded-xl p-3 text-textColor lg:mx-5 mt-10 justify-between relative'>
      <div className='absolute p-2 top-0 right-0 text-textColor cursor-pointer hover:scale-110'>
        <FaBookmark onClick={handleBookmarkClick} />
      </div>
      {addedToCart && (
          <span className='absolute top-[-40px] right-14  bg-green-200 border-2 border-mainBorder text-black font-medium p-2 rounded-lg'>{name} is added to cart</span>
      )}
      <div className='flex gap-4 items-center text-textColor'>
        <Image src={icon} alt={name} width={50} height={50} className='bg-slate-300 rounded-lg p-1' />
        <span className='lg:text-xl text-lg'>{name}</span>
      </div>
      <div className='text-[10px]'>
        {desc}
      </div>
      <div className='text-center flex items-center justify-center hover:scale-105 duration-'>
        <Link href={link} target='blank' className='flex items-center gap-2 bg-primarybg p-2 border-mainBorder/75 border-2 rounded-md lg:text-lg text-sm '>Link<FiLink /></Link>
      </div>
    </div>
  )
}

export default Card