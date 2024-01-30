import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaArrowRight,FaUser  } from "react-icons/fa";
import { MdOutlineEmail,MdLocationOn  } from "react-icons/md";
import { SiTypescript } from "react-icons/si";




const Footer = () => {
  return (
    <footer className='w-full bg-secondarybg h-auto p-6 mt-10 rounded-xl gap-10 flex flex-col '>
      <hr  className='bg-white h-1 w-full'/>

      {/* image */}
      <div>
        <Image src='/assets/logo.png' alt='logo' width={150} height={50} />
      </div>

      {/* info */}
      <section className='flex items-center justify-around lg:flex-row flex-col lg:gap-0 gap-5'>
        {/* about */}
        <div id='about' className='text-textColor/75 text-sm'>
          <h3 className='text-xl'>About</h3>
          <ul className='list-disc'>
            <li>Easy To use.</li>
            <li>Add your favorites to cart.</li>
            <li>Can Access anytime without login.</li>
          </ul>
        </div>

        {/* dev */}
        <div id='dev' className='text-textColor/75 text-md'>
          <h3 className="text-xl">Developer</h3>
          <ul>
            <li className='pt-2'>
              <Link href='https://lokeshumredkar.vercel.app' target='blank' className='flex items-center gap-1 text-md'>
              <span><FaUser /></span>
              Portfolio
              </Link>
            </li>
            <li className='flex items-center text-md gap-1 pt-2'>
              <MdOutlineEmail/>
              lokeshumredkar2003@gmail.com
            </li>
            <li className='flex items-center text-md gap-1 pt-2'>
              <MdLocationOn />
              Maharashtra,India
            </li>
          </ul>
        </div>

      </section>

      {/* stack */}
      <div className='w-full h-auto p-2 bg-primarybg flex items-center justify-center gap-7 text-textColor relative'>
        <h2 className='absolute text-textColor/75 text-xl p-1 flex items-center gap-1 lg:left-0 lg:top-3 top-[-30px]'>Stack use<FaArrowRight /></h2>
        <div className=' rounded-full flex items-center justify-center flex-col'>
          <Image src='/assets/footer/nextjs.svg' alt='next' height={70} width={70} />
        </div>
        <div className=' rounded-full flex items-center justify-center flex-col'>
          <Image src='/assets/footer/react.svg' alt='react' height={50} width={50} />
        </div>
        <div className='flex items-center justify-center flex-col'>
          <Image src='/assets/footer/tailwindcss.svg' alt='tailwindcss' height={150} width={150} />
        </div>
        <div className='flex items-center justify-center flex-col text-3xl'>
          <SiTypescript/>
        </div>
      </div>

      {/* contacts */}
      <div id='contact' className='w-full h-12 flex justify-center items-center gap-7 text-3xl'>
        <Link href='https://www.linkedin.com/in/lokesh-umredkar-2a0961243/?trk=people-guest_people_search-card&originalSubdomain=in' className='text-textColor/75 p-1  hover:scale-105 duration-300 hover:text-textColor'>
          <FaLinkedin />
        </Link>

        <Link href='https://github.com/Lokesh9307'
          className='text-textColor/75 p-1 hover:scale-105 duration-300 hover:text-textColor'>
          <FaGithub />
        </Link>

        <Link href='https://www.facebook.com/lokesh.umredkar.967/'
          className='text-textColor/75 p-1 hover:scale-105 duration-300 hover:text-textColor'>
          <FaFacebook />
        </Link>

        <Link href='https://www.instagram.com/itz_lokesh_02/?hl=bg'
          className='text-textColor/75 p-1 hover:scale-105 duration-300 hover:text-textColor/85'>
          <FaInstagram />
        </Link>
      </div>

      <div className='text-textColor/75 lg:text-right text-center'>
        &copy; All rights reserved by Lokesh Umredkar
      </div>
    </footer>
  )
}

export default Footer