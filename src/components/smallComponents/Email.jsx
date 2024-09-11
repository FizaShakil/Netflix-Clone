import React from 'react'

const Email = () => {
  return (
   <>
   <p className="text-white mt-6 lg:text-base">
          Ready to watch? Enter your email to create or restart your membership.
    </p>
         <div id="emailDiv" className="mt-4 sm:flex sm:justify-center">
           <input
             type="text"
             placeholder="Email address"
             className="bg-opacity-10 bg-black text-gray-400 border-gray-500 w-[75%] h-10 border-[1px] pl-2 text-sm rounded-sm sm:w-[30%] sm:h-14 lg:pl-4 lg:rounded-md lg:pr-36 md:pr-44"
          />
          <button className="text-white bg-[#E50914] hover:bg-red-700 duration-300 lg:text-2xl py-3 px-8 mt-3 md:mt-0 font-semibold rounded-md sm:ml-3 sm:px-12">
            Get Started
          </button>
        </div>
   </>
  )
}

export default Email