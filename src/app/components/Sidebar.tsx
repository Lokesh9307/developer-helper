'use client'
import React, { useState } from 'react'
import { FaImages,FaBookOpen,FaRobot   } from "react-icons/fa";
import { TbIcons } from "react-icons/tb";
import { IoIosColorFill } from "react-icons/io";
import { IoExtensionPuzzle } from "react-icons/io5";
import { TbWorldWww , TbBrandVscode } from "react-icons/tb";
import { GiStarFormation } from "react-icons/gi";
import { GrTemplate } from "react-icons/gr";
import { CgComponents } from "react-icons/cg";

import '../App.css'
import Link from 'next/link';

const Sidebar = () => {

  const ItemLists = [
    { icon: <FaImages />, name: 'Images', url: '/images' },
    { icon: <TbIcons />, name: 'Icons', url: '/icon' },
    { icon: <IoIosColorFill />, name: 'Backgrounds', url: '/background' },
    { icon: <FaBookOpen />, name: 'Courses', url: '/courses' },
    { icon: <TbWorldWww />, name: 'Hosting', url: '/hosting' },
    { icon: <FaRobot />, name: 'AI Tools', url: '/ai'},
    { icon: <GiStarFormation  />, name: 'UI Designs', url: '/uidesign' },
    { icon: <CgComponents  />, name: 'UI Components', url: '/uicomponents' },
    { icon: <GrTemplate  />, name: 'Templates', url: '/freetemplate' },
    { icon: <IoExtensionPuzzle />, name: 'Chrome Extensions', url: '/chrome' },
    { icon: <TbBrandVscode  />, name: 'VS Code Extension', url: '/vscode' },
  ]

  const [active,setActive] = useState(false);

  const ActiveToggle = ()=>{
    setActive(true)
  }

  return (
    <div className='lg:w-[20%] w-full lg:h-[40rem] h-20 lg:py-6 pl-6 flex lg:flex-col flex-row lg:gap-3 gap-2 bg-secondarybg rounded-2xl text-textColor duration-500 lg:px-1 px-2 overflow-x-scroll lg:justify-start justify-between lg:overflow-y-scroll scroll-none'>
      {
        ItemLists.map((item,index) => (
          <div className='flex gap-3 items-center hover:bg-primarybg py-4 rounded-tl-xl rounded-bl-xl'>
            <Link key={index} href={item.url} onClick={ActiveToggle} className='hover:text-mainColor flex gap-2 items-center lg:flex-row flex-col lg:w-auto w-[60px] lg:text-start text-center justify-center'>
              <span className='text-mainColor hover:text-mainColor lg:w-auto lg:h-auto  h-5 text-center'>{item.icon}</span>
              <span className='lg:text-lg text-[0.6rem] lg:w-auto lg:h-auto  h-5'>{item.name}</span>
            </Link>
          </div>
        ))
      }
    </div>
  )
}

export default Sidebar