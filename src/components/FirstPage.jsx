import React from 'react'
import curveVector from '../images/curveVector.png'
import LogoNetflix from '../images/LogoNetflix.png'
import Email from './smallComponents/Email'
import { useNavigate } from 'react-router-dom'

const FirstPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/signin'); // Navigate to the sign-in page
    }
return (
    <>
    <div className="w-full h-[82vh] md:h-[100vh] backGround">
        <div id="navBar" className="flex justify-around md:justify-between">
        <img src={LogoNetflix} alt="LogoNetflix" className="h-14 pt-6 md:h-[70px] md:ml-36 "/>
       
            <button onClick={handleClick}
                  className=" bg-[#E50914] text-white rounded-sm w-20 h-7 text-sm font-semibold mt-6 hover:bg-red-700 md:mr-52">
                    Sign In
            </button>
       
     </div>
     <div id="center" className="text-center relative top-20 md:top-32">
        <h1 className="text-white text-center text-3xl lg:text-6xl font-extrabold ">Unlimited movies, <br/> TV shows, and more</h1>
        <p className="text-white mt-6 lg:text-xl">Starts at Rs 250. Cancel anytime.</p>
    <Email/>
    </div>
</div>
    <img src={curveVector} alt="curve"
    className='w-full bg-cover relative -mt-10 lg:bottom-16'/>
    </>
  )
}

export default FirstPage