import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import './App.css'


export default function Home() {
  return (
    <section className="w-full lg:h-screen h-auto home-bg rounded-2xl text-textColor flex justify-center items-center lg:p-1 p-4 overflow-hidden">
      <div className='flex gap-5 justify-center items-center'>
        <div className='flex flex-col lg:gap-4 text-center gap-2'>
          <h1 className='text-6xl my-5'>
            Welcome!
          </h1>
          <h3>Find resourcefull websites that helps you to create and builds Apps rapidly.</h3>
          <span className=' flex items-center justify-center'>
            <Link href='/images' className='bg-mainColor text-gray-700 hover:text-black font-bold text-xl p-4 rounded-lg mt-[100px]  gap-3 flex items-center md:w-52'>
              Explore Now <span><RiArrowRightDoubleLine /></span>
            </Link>
          </span>
          <ul className='flex gap-3 flex-row w-full justify-center items-center mt-20 flex-wrap'>
            <li className='w-[300px] text-textColor/80 border-2 border-white/40 p-2 rounded-lg bg-secondarybg/50 hover:text-textColor duration-300'>
              Free to use
            </li>
            <li className='w-[300px]  text-textColor/80 border-2 border-white/40 p-2 rounded-lg bg-secondarybg/50 hover:text-textColor duration-300'>
              No login or signUp required
            </li>
            <li className='w-[300px] text-textColor/80 border-2 border-white/40 p-2 rounded-lg bg-secondarybg/50 hover:text-textColor duration-300'>
              Add favorites to your cart
            </li>
            <li className='w-[300px]  text-textColor/80 border-2 border-white/40 p-2 rounded-lg bg-secondarybg/50 hover:text-textColor duration-300'>
              Easily add and remove from cart
            </li>
            <li className='w-[300px]  text-textColor/80 border-2 border-white/40 p-2 rounded-lg bg-secondarybg/50 hover:text-textColor duration-300'>
              User friendly Experience
            </li>
            <li className='w-[300px]  text-textColor/80 border-2 border-white/40 p-2 rounded-lg bg-secondarybg/50 hover:text-textColor duration-300'>
              Now you can create your own link
            </li><sup className='ml-[-10px] text-red-500 font-bold'>new</sup>
          </ul>
        </div>
        <div className='lg:block hidden overflow-hidden'>
        </div>
      </div>
    </section>
  )
}
