import React from 'react'

const Reason = ({main,para}) => {
  return (
    <>
    <div className='w-[88%] mx-auto bg-gradient-to-t from-[#210F18] to-[#1B1C39] mt-4 h-[30vh] rounded-2xl lg:h-[52vh] lg:w-[24%]'>
        <h2 className="text-white text-xl leading-snug text-left font-semibold pl-4 pt-4 xl:text-2xl">
            {main}
        </h2>
        <div className='text-[#B6B6BD] text-base leading-snug text-left font-semibold pl-4 pt-4'>{para}</div>
    </div>
    </>
  )
}

export default Reason
