import React from 'react'
import SubHeading from './smallComponents/SubHeading'
import Reason from './smallComponents/Reason'

const ReasonToJoin = () => {
  return (
    <>
    <SubHeading heading={'More Reasons to join'}/>
    <div className='mb-10 mt-3 lg:flex lg:justify-evenly lg:w-[80%] lg:ml-[10%] '>
        <Reason 
                 main={"Enjoy on your TV"} 
                 para={"Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."}
        />
        <Reason 
                 main={"Download your shows to watch offline"} 
                 para={"Save your favorites easily and always have something to watch."}
        />
        <Reason 
                 main={"Watch everywhere"} 
                 para={"Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."}
        />
        <Reason 
                 main={"Create profiles for kids"} 
                 para={"Send kids on adventures with their favorite characters in a space made just for them — free with your membership."}
        />
    </div>
    </>
  )
}

export default ReasonToJoin