import React from 'react'

export const TrendingImg = ({imageSource, name}) => {
  return (
    <>
     <div className="imgSec">
            <div className="imgDiv bg-cover w-28 lg:h-48 lg:w-44">
                <img src={imageSource} alt={name} className="bg-cover w-20% rounded-md h-40 lg:h-64 lg:w-[100%]"/>
                <div className="redDiv text-[10px] relative w-[75%] text-white text-center font-semibold mt-2 bg-[#E1070F] h-5 ml-[12%] bottom-7 lg:h-7 lg:mt-0 lg:text-base rounded-t-md">Recently Added</div>
            </div>
        </div>
    </>
  )
}