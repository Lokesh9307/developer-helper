import React, { Suspense } from 'react'
import Loader from '../pages/Loader'
import VsCard from '../pages/VsCard'
import Link from 'next/link'
import '../App.css'


const vsCodeItems = [
    {icon:'/assets/vsCode/prettier.png',name:'Prettier Code Formatter',desc:"Prettier, the beloved code formatter, now seamlessly integrates with VS Code, ensuring your code remains elegantly formatted and consistent with just a few clicks."},

    {icon:'/assets/vsCode/live.png',name:'Live Server',desc:"The Live Server VSCode extension website offers a seamless development experience, providing real-time updates and instant feedback for web developers directly within Visual Studio Code."},

    {icon:'/assets/vsCode/autosave.png',name:'Auto Save',desc:"The Auto Save extension for VS Code automatically saves your work, ensuring you never lose progress, enhancing productivity and peace of mind while coding. Visit the website to streamline your coding experience effortlessly."},

    {icon:'/assets/vsCode/bettercomments.png',name:'Better Comments',desc:"Enhance your code clarity with Better Comments, a powerful VSCode extension that revolutionizes your commenting experience, making annotations more visually intuitive and organized."},

    {icon:'/assets/vsCode/coderunner.png',name:'Code Runner',desc:"The Code Runner VSCode extension website provides a comprehensive platform for developers to explore, download, and manage this versatile tool for executing code snippets effortlessly within Visual Studio Code."},

    {icon:'/assets/vsCode/material-icon-theme.png',name:'Material Icon Theme',desc:"The Material Icon Theme for VSCode enhances your coding experience with sleek, intuitive icons that streamline navigation and improve visual organization. Accessible directly from the VSCode extension marketplace, it offers a stylish and functional addition to your development environment."},

    {icon:'/assets/vsCode/rename.png',name:'Auto Rename',desc:"The Auto Rename Tag extension for Visual Studio Code automatically renames paired HTML/XML tags. This extension enhances coding efficiency by synchronizing tag name changes instantly."},

    {icon:'/assets/vsCode/thunder-client.png',name:'Thunder Client',desc:"Thunder Client is a popular VSCode extension for testing APIs, featuring a user-friendly interface and seamless integration with VSCode's workflow, enhancing developers' productivity."},

    {icon:'/assets/vsCode/file-icons.png',name:'File Icons',desc:"Enhance your Visual Studio Code experience with File Icons, a vibrant extension that adds colorful and intuitive icons to your file explorer, making navigation and organization a breeze."},
]

function vsCodePage() {
  return (
    <>
    <Suspense fallback={<Loader />}>
      <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg  w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
        <h1 className='text-textColor absolute text-center top-0 text-xl p-2 lg:w-[95.2%] w-[90%]'>VS Code Extension <hr className='bg-green-700' /></h1>

        {
          vsCodeItems.map((value, key) => (
            <VsCard key={key} icon={value.icon} name={value.name} desc={value.desc}/>
          ))
        }
        <div className=' w-full p-3 text-center bg-mainColor text-black font-bold rounded-xl'>
        <Link href='https://marketplace.visualstudio.com/' className='text-xl hover:scale-110 '>
          <span className=''>Checkout More..</span> 
        </Link>
      </div>
      </section>
      
    </Suspense>
  </>
  )
}

export default vsCodePage