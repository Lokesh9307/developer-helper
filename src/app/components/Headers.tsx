import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";


const Headers = () => {
  return (
    <div className='w-full h-auto bg-primarybg p-2 mb-6 sticky top-0 z-50'>
      <div className='w-full flex items-center justify-between text-black'>
        <Link href='/'>
          <Image src='/assets/logo.png' alt='logo' width={150} height={25} className='object-cover overflow-hidden' />
        </Link>

        <div className='px-6 flex justify-between items-center lg:text-2xl text-xl w-[250px] '>
          <div className='bg-white text-black flex items-center rounded-lg lg:p-2 p-1'>
            <Link href='/newlink' className='text-black rounded-full flex justify-center items-center lg:gap-2 gap-1'>
              <IoIosAddCircle className='text-mainColor text-lg'/>
            <p className='text-sm font-bold'>Add New</p>
            </Link>
          </div>
          {/* cart link*/}
          <Link href='/carts' className='lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] bg-mainColor rounded-full flex justify-center items-center'>
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Headers