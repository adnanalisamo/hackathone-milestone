import React from 'react'
import Image from 'next/image'

const Project = () => {
  return (
    <div>
    <section className='mt-60'>
      <h1 className='text-white text-4xl text-center mt-10 animate-bounce duration-500'><span>My</span> Pro<span>je</span>cts</h1>
      <div className='text-white justify-items-center mt-40 grid grid-cols-2 md:grid-cols-3 text-center'>
      
       <div className="items-center justify-center p-4">
      <Image
        src="/travelling-agency.png" alt="travelling" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500 "/>
        <a href="https://travelling-agency-gamma.vercel.app" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Travelling Agency</h3></a>
       </div> 

       <div className=" items-center justify-center p-4">
      <Image 
        src="/explore-pakistan.jpg" alt="explore-pakistan" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500 "/>
        <a href="https://explore-pakistan-eta.vercel.app" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Explore Pakistan</h3></a>
       </div>

       <div className=" items-center justify-center p-4">
      <Image
        src="/calculator.png" alt="calculator" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500"/>
        <a href="https://my-projects-mocha-kappa.vercel.app" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Calculator</h3></a>
      </div>

        <div className=" items-center justify-center p-4">
      <Image
        src="/weather-app.png" alt="Weather app" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500"/>
        <a href="https://milstone-sigma.vercel.app" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Weather app</h3></a>
      </div> 

      <div className=" items-center justify-center p-4">
      <Image
        src="/own web.png" alt="periodic-table" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500"/>
        <a href="https://periodiic-table.vercel.app" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Own Website</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/portfolio.png" alt="chess-game" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500"/>
        <a href="https://chess-game-neon.vercel.app" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Own Portfolio with HTML,CSS,JS</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/cv.png" alt="semester-table" width={300} height={300}  className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500"/>
        <a href="https://semester-table.vercel.app" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Own Resume</h3></a>
      </div> 

      <div className=" items-center justify-center p-4">
      <Image
        src="/registration-form.png" alt="registration-form" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500"/>
        <a href="https://registration-form-sooty-ten.vercel.app" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Registration Form</h3></a>
      </div>

      <div className=" items-center justify-center p-4">
      <Image
        src="/stop-watch.png" alt="stop-watch" width={300} height={300} className="w-64 h-40 rounded-lg shadow-lg shadow-blue-300 hover:scale-105 duration-500"/>
        <a href="https://stop-watch-inky-six.vercel.app" target="_blank"><h3 className='mt-6 mb-10 underline hover:text-blue-500'>Stop Watch</h3></a>
      </div>
      </div>
      
        </section>
    </div>
  )
}

export default Project
