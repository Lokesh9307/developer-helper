import React, { Suspense,lazy } from 'react'
const Loader = lazy(()=>import('../pages/Loader')) ;
const Card = lazy(()=>import ('../pages/Card')) ;
import '../App.css'

const ImagesItem = [
  { icon: '/assets/images/pexels.svg', name: 'Pexels', desc: 'Pexels is a popular online platform offering a vast collection of high-quality, royalty-free images and videos.', link: 'https://www.pexels.com/' },

  { icon: '/assets/images/freepik.svg', name: 'Freepik', desc: 'Freepik is a popular online platform that offers a vast collection of free images and videos, catering to diverse creative needs. With a user-friendly interface and a wide range of high-quality content.', link: 'https://www.freepik.com/' },

  { icon: '/assets/images/unsplash.svg', name: 'Unsplash', desc: 'Freepik is a popular online platform that offers a vast collection of free images and videos, catering to diverse creative needs. With a user-friendly interface and a wide range of high-quality content.', link: 'https://unsplash.com/' },

  { name: "Pixabay", link: "https://www.pixabay.com", desc: 'Pixabay is a user-friendly website offering a vast collection of high-quality, royalty-free images and videos for free, making it a valuable resource for creative projects and content creation.', icon: '/assets/images/pixabay.svg' },


  { name: "Gratisography", link: "https://www.gratisography.com", desc: 'Gratisography is a renowned website offering a diverse collection of high-quality, quirky, and visually stunning images and videos for free. It stands out as a valuable resource for users seeking unique visual content without any cost.', icon: '/assets/images/Gratisography.svg' },

  { name: "Picography", link: "https://picography.co", desc: 'Picography is a user-friendly website offering a vast collection of high-quality, royalty-free images and videos, serving as a valuable resource for creative projects without any cost constraints.', icon: '/assets/images/Picography.png' },

  { name: "Negative Space", link: "https://www.negativespace.co", desc: 'Negative Space is a user-friendly website offering a diverse collection of high-quality, royalty-free images and videos, emphasizing the creative use of negative space for impactful design projects.', icon: '/assets/images/negativeSpace.png' },

  { name: "Freestock", link: "https://freestock.com", desc: 'Freestock is a user-friendly website offering a vast collection of high-quality, royalty-free images and videos for creative projects, providing a valuable resource for designers, bloggers, and content creators.', icon: '/assets/images/freestock.svg' },


  { name: "Burst (by Shopify)", link: "https://burst.shopify.com", desc: 'Burst by Shopify is a free stock photo platform that offers a diverse collection of high-quality, royalty-free images for businesses and entrepreneurs to enhance their visual content and marketing materials.', icon: '/assets/images/burst.svg' },

  { name: "Reshot", link: "https://www.reshot.com", desc: 'Reshot is a popular stock photo website that offers a diverse collection of high-quality, royalty-free images contributed by a community of photographers.', icon: '/assets/images/reshot.svg' },

  { name: "FoodiesFeed", link: "https://www.foodiesfeed.com", desc: 'FoodiesFeed is a vibrant online platform that caters to food enthusiasts, offering a diverse collection of high-quality, royalty-free food images for creative use, making it a go-to resource for culinary content creators.', icon: '/assets/images/foodiesFeed.svg' },

  { name: "Picjumbo", link: "https://picjumbo.com", desc: 'Picjumbo is a popular stock photo website that offers a diverse collection of high-quality, royalty-free images for both personal and commercial use, providing a valuable resource for designers and content creators.', icon: '/assets/images/picjumbo.png' },

  { name: "StyledStock", link: "https://styledstock.co", desc: 'StyledStock is a premium stock photo website known for its curated collection of aesthetically pleasing and professionally styled images, catering to businesses and creatives seeking visually appealing content for their projects.', icon: '/assets/images/styledstock.png' },

  { name: "Kaboompics", link: "https://kaboompics.com", desc: 'Kaboompics is a popular website offering a diverse collection of high-quality, royalty-free stock photos, providing creatives and designers with visually appealing and free-to-use imagery for their projects.', icon: '/assets/images/kaabom.svg' },

  { name: "Startup Stock Photos", link: "https://startupstockphotos.com", desc: 'Startup Stock Photos is a website offering a diverse collection of high-quality, royalty-free images tailored for the entrepreneurial and startup community, providing visually appealing content for presentations, websites, and marketing materials.', icon: '/assets/images/startupStock.svg' },

  { name: "Freerange Stock", link: "https://freerangestock.com", desc: 'Freerange Stock is a website offering a diverse collection of high-quality, royalty-free stock photos, catering to creative professionals and businesses seeking visually appealing and authentic imagery for their projects.', icon: '/assets/images/freerange.png' },

  { name: "LibreShot", link: "https://libreshot.com", desc: 'LibreShot is a user-friendly stock photo website offering high-quality, free images for both personal and commercial use. With a diverse collection of captivating photographs, it provides a valuable resource for creative projects.', icon: '/assets/images/libreshot.svg' }
]

const Images = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg   w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative  lg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
          <h1 className='text-textColor absolute text-center top-0 text-xl p-2 lg:w-[95.2%] w-[90%]'>Images <hr className='bg-green-700' /></h1>
          {
            ImagesItem.map((value, key) => (
              <Card key={key} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
            ))
          }

        </section>
      </Suspense>
    </>
  )
}

export default Images