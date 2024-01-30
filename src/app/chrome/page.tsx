import React, { Suspense,lazy } from 'react'
const Loader = lazy(()=>import('../pages/Loader')) ;
const Card = lazy(()=>import ('../pages/Card')) ;
import '../App.css'



const ChromePageItems = [
  {
    "icon": "/assets/chrome/wappalyzer.png",
    "name": "Wappalyzer - Technology profiler",
    "desc": "Wappalyzer is a technology profiler that shows you what websites are built with. Find out what CMS a website is using, as well as any framework, ecommerce platform, JavaScript libraries and many more.",
    "link": "https://chromewebstore.google.com/detail/wappalyzer-technology-pro/gppongmhjkpfnbhagpmjfkannfbllamg"
  },
  {
    "icon": "/assets/chrome/html.png",
    "name": "HTML Validator",
    "desc": "Pioneering the realm of Chrome extension development tools, HTML Validator is a browser tool that integrates HTML validation within the Developer Tools of Chrome.",
    "link": "https://chromewebstore.google.com/detail/html-validator/mpbelhhnfhfjnaehkcnnaknldmnocglk"
  },
  {
    "icon": "/assets/chrome/json.png",
    "name": "JSON Viewer",
    "desc": "With the JSONView extension, JSON documents are formatted, highlighted, and arrays and objects can be collapsed. Even if the JSON document contains errors, JSONView will still show the raw text.",
    "link": "https://chromewebstore.google.com/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh"
  },
  {
    "icon": "/assets/chrome/checklist.png",
    "name": "Web Developer Checklist",
    "desc": "Analyses any web page for violations of best practices. This extension helps web developers easily discover problem areas in websites.",
    "link": "https://chromewebstore.google.com/detail/web-developer-checklist/iahamcpedabephpcgkeikbclmaljebjp"
  },
  {
    "icon": "/assets/chrome/react.png",
    "name": "React Developer Tools",
    "desc": "Use React Developer Tools to inspect React components, edit props and state, and identify performance problems.",
    "link": "https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
  },
  {
    "icon": "/assets/chrome/browser.png",
    "name": "BrowserStack",
    "desc": "BrowserStack is a tool that lets you test your web page on any desktop or mobile browser in real user conditions.",
    "link": "https://chromewebstore.google.com/detail/browserstack/nkihdmlheodkdfojglpcjjmioefjahjb"
  },
  {
    "icon": "/assets/chrome/window.png",
    "name": "Window Resizer",
    "desc": "This extension re-sizes the browser's window in order to emulate various resolutions. It is particularly useful for web designers and developers by helping them test their layouts on different browser resolutions.",
    "link": "https://chromewebstore.google.com/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh"
  },
  {
    "icon": "/assets/chrome/clear.png",
    "name": "Clear Cache",
    "desc": "Clear on the options page,including: App Cache, Cache, Cookies, Downloads, File Systems, Form Data, History, Local Storage, Plugin Data, Passwords and WebSQL.",
    "link": "https://chromewebstore.google.com/detail/clear-cache/cppjkneekbjaeellbfkmgnhonkkjfpdn"
  },
  {
    "icon": "/assets/chrome/lorem.png",
    "name": "Lorem Ipsum Generator",
    "desc": "Quickly generate Lorem Ipsum placeholder text. Select a desired length and choose between paragraphs, words, bytes or lists.",
    "link": "https://chromewebstore.google.com/detail/lorem-ipsum-generator/pglahbfamjiifnafcicdibiiabpakkkb"
  },
  {
    "icon": "/assets/chrome/viewer.png",
    "name": "CSSViewer",
    "desc": "A simple CSS properties viewer originally made by Nicolas Huon as a FireFox add-on (2006-2008). To enable CSSViewer, simply click the toolbar icon and then hover any element on you want to inspect in current page.",
    "link": "https://chromewebstore.google.com/detail/css-viewer-for-google-chr/eedfldkdghfkhdcanjnfiklpeehbfoag"
  },
  {
    "icon": "/assets/chrome/peeper.png",
    "name": "CSS Peeper",
    "desc": "CSS Peeper is a popular Chrome extension that allows users to inspect and extract CSS code from any website, facilitating efficient web design and development workflows.",
    "link": "https://chromewebstore.google.com/detail/css-peeper/mbnbehikldjhnfehhnaidhjhoofhpehk"
  },
  {
    "icon": "/assets/chrome/mobile.png",
    "name": "Mobile Simulator",
    "desc": "Experience mobile browsing without a device with our Chrome extension, emulating various smartphone platforms seamlessly within your browser.",
    "link": "https://chromewebstore.google.com/detail/mobile-simulator-responsi/ckejmhbmlajgoklhgbapkiccekfoccmk"
  },
]


function ChromePage() {
  return (
    <>
    <Suspense fallback={<Loader />}>
      <section className=' flex flex-wrap lg:gap-5 gap-1 lg:p-3 bg-secondarybg   w-full mx-auto px-5 lg:gap-y-3 gap-y-4 relative olg:justify-normal justify-around overflow-y-scroll scroll-none h-screen scroll-none'>
        <h1 className='text-textColor absolute text-center top-0 text-xl p-2 lg:w-[95.2%] w-[90%]'>Chrome Extension <hr className='bg-green-700' /></h1>

        {
          ChromePageItems.map((value, key) => (
            <Card key={key} icon={value.icon} name={value.name} desc={value.desc} link={value.link} />
          ))
        }

      </section>
    </Suspense>
  </>
  )
}

export default ChromePage