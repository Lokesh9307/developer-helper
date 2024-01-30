import '../App.css'

function Loader() {
  return (
    <div className='text-textColor flex flex-col justify-center items-center w-full h-screen gap-5'>
      <span className='text-2xl '>Loading...</span>
      <span className='loader'></span>
    </div>
  )
}

export default Loader