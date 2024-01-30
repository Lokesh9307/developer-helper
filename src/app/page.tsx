import Image from 'next/image'
import Link from 'next/link'
import { RiArrowRightDoubleLine } from "react-icons/ri";
import './App.css'


export default function Home() {
  return (
    <section className="w-full lg:h-screen h-[30rem] home-bg rounded-2xl text-textColor flex justify-center items-center lg:p-1 p-4 overflow-hidden">
      <div className='flex gap-5 justify-center items-center'>
        <div className='flex flex-col lg:gap-4 text-center gap-2'>
          <h1 className='text-6xl'>
            Welcome!
          </h1>
          <h3>Explore the websites which help you to become a good developer</h3>
          <p>Let's Go...</p>
          <span className=' flex items-center justify-center'>
          <Link href='/images' className='bg-mainColor text-gray-700 hover:text-black font-bold text-xl p-4 rounded-lg mt-[100px]  gap-3 flex items-center md:w-52'>
            Explore Now <span><RiArrowRightDoubleLine/></span>
            </Link>
          </span>
        </div>
        <div className='lg:block hidden overflow-hidden'>
        </div>
      </div>
    </section>
  )
}
