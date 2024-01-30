import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";


const Headers = () => {
  return (
    <div className='w-full h-auto bg-primarybg p-2 mb-6 sticky top-0 z-10'>
      <div className='w-full flex items-center justify-between text-black'>
        <Link href='/'>
          <Image src='/assets/logo.png' alt='logo' width={150} height={25} className='object-cover overflow-hidden' />
        </Link>

        <div className='px-6 bg-mainColor lg:w-[50px] lg:h-[50px] w-[35px] h-[45px] flex justify-center items-center rounded-full lg:text-2xl text-xl'>
          <Link href='/carts' className=''>
            <FaShoppingCart />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Headers