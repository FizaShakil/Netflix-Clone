import React from 'react'
import LogoNetflix from '../images/LogoNetflix.png'

const SignIn = () => {
  return ( 
    <>
     <div className="w-full h-[110vh] bg-black bg-cover signInDiv">
        <div id="navBar" className="flex ml-8 md:justify-between">
           <img src={LogoNetflix} alt="LogoNetflix" className="h-14 pt-6 md:h-[70px] md:ml-36 "/>
        </div>
         <div
                className='w-[90%] mt-8 relative left-1/2 transform -translate-x-1/2 
                 min-[600px]:w-[480px] min-[600px]:bg-[black] min-[600px]:h-[86vh] min-[600px]:py-14
                 min-[600px]:px-20 min-[600px]:bg-opacity-65'>
                  <h2 className='text-white text-3xl text-left font-bold '>
                             Sign In
                  </h2>
                  <div className="inputDiv mt-4 text-base w-[100%]">
                     <input
                         type="text"
                         placeholder="Email or mobile Number"
                         className="bg-opacity-10 rounded-sm bg-black text-gray-400 border-gray-500 w-[100%] h-12 border-[1px] pl-2"/>
                      <input
                         type="password"
                         placeholder="Password"
                         className="bg-opacity-10 rounded-sm bg-black text-gray-400 border-gray-500 my-5 w-[100%] h-12 border-[1px] pl-2"/>
                  </div>
                  <button className='text-white bg-[#E50914] hover:bg-red-700 duration-300 w-[100%] h-12 font-bold rounded-sm'>
                      Sign In
                  </button>
                  <p className='text-[#B6B6BD] my-4'> OR </p>
                  <button className='text-white bg-[#353333] hover:bg-[#272727] duration-300 w-[100%] h-12 font-bold rounded-sm'>
                      Use a Sign-In Code
                  </button>
                 <p className='my-4'>
                   <a href="#" className='hover:underline hover:text-[#B6B6BD] duration-500 my-4 text-white'>
                       Forgot Password ?
                   </a>
                </p> 
                <div className='flex mt-5'>
                  <input type="checkbox" 
                         className='duration-300'/>
                <p className='text-left text-white ml-2'>Remember me</p>
                </div>
                <div className='flex mt-3 mb-40'>
                  <p className='text-[#B6B6BD]'>New to Netflix?</p>
                  <p className='font-semibold hover:underline text-white ml-2'><a href="">Sign up now</a></p>
                </div>
                <p></p>
        </div>
     </div>
     
     <div className='mb-14'>
        <hr className='border-[#B6B6BD]'/>
        </div>
    </>
  )
}
        
export default SignIn