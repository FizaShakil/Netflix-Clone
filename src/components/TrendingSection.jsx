import React from 'react'
import haseenDilRubaPoster from '../images/haseenDilRubaPoster.jpg';
import savi from '../images/savi.jpg'
import KingsMan from '../images/KingsMan.jpg'
import marioBrosImage from '../images/marioBrosImage.jpg'
import { TrendingImg } from './smallComponents/TrendingImg';
import SubHeading from './smallComponents/SubHeading';

const TrendingSection = () => {
  return (
    <>
    <div className='relative lg:-mt-20'>
    <SubHeading heading={"Trending Now"}/>
<div className="trendingDiv h-[60vh]">
     <div className="selectDiv relative left-2 top-4 lg:flex lg:justify-start lg:left-40">
          <select name="country" className=" bg-[#0F0F0F] w-[90%] text-white px-3 py-2 border-gray-400 rounded-sm border-[0.5px] lg:w-32">
               <option value="Pakistan" className="bg-white text-black">Pakistan</option>
               <option value="Global" className="bg-white text-black">Global</option>
         </select>
          <select name="country" className=" bg-[#0F0F0F] w-[90%] text-white px-3 py-2 lg:ml-6 mt-4 border-gray-400 rounded-sm border-[0.5px] lg:mt-0 lg:w-32">
            <option value="Movies" className="bg-white text-black">Movies</option>
            <option value="TvShows" className="bg-white text-black">TV Shows</option>
        </select>
    </div>
    <div className="flex justify-evenly items-center w-auto mt-14 lg:w-[80%] lg:ml-[10%]">
              <TrendingImg imageSource={haseenDilRubaPoster} name={haseenDilRubaPoster}/>
              <TrendingImg imageSource={KingsMan} name={KingsMan}/>
              <TrendingImg imageSource={savi} name={savi}/>
              <TrendingImg imageSource={marioBrosImage} name={marioBrosImage}/>
    </div>
</div>
</div>
    </>
  )
}

export default TrendingSection