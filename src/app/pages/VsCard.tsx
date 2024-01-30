import Image from 'next/image'
import React from 'react'

interface Props{
    icon:string,
    name:string,
    desc:string
}

function VsCard({icon,name,desc}:Props) {
  return (
    <div className='lg:w-[270px] w-full lg:h-[200px] h-[150px] border-2 border-slate-300 mt-10 rounded-lg p-2 flex flex-col justify-between hover:scale-105 duration-300 gap-5'>
        <div className='flex items-center lg:justify-center lg:flex-col flex-row gap-3'>
            <Image src={icon} alt={name} height={50} width={50} className='rounded-lg object-fill'/>
            <span className='text-mainColor text-lg'>{name}</span>
        </div>
        <div className='w-full h-auto overflow-hidden'>
            <p className='text-textColor text-[10px]'>{desc.length > 10 ? desc.substring(0,200) + '...':desc}</p>
        </div>
    </div>
  )
}

export default VsCard