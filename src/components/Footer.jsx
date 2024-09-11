import React from 'react'
import FooterLink from './smallComponents/FooterLink'

const Footer = () => {
  return (
<div className='text-[#B6B6BD] text-sm font-semibold text-left ml-8 mt-10 lg:ml-40'>
    <h1 className='mb-12'><a href="#"
           className='underline text-base'>
                Questions? Contact us
        </a>
    </h1>
    <ul className='md:w-[73%]'>
        <div className='md:flex md:justify-between'>
            <FooterLink content={"FAQ"}/>
            <FooterLink content={"Help Center"}/>
            <FooterLink content={"Account"}/>
            <FooterLink content={"Media Center"}/>
        </div>
        <div className='md:flex md:justify-between'>
            <FooterLink content={" Investor Relations"}/>
            <div className='md:relative md:right-10'>
                <FooterLink content={"Jobs"}/>
            </div>
            <FooterLink content={"Ways to Watch"}/>
            <FooterLink content={"Terms of Use"}/>
        </div>
        <div className='md:flex md:justify-between'>
            <FooterLink content={"Privacy"}/>
            <FooterLink content={"Cookie Preference"}/>
            <FooterLink content={"Corporate Information"}/>
            <FooterLink content={"Contact Us"}/>
        </div>
        <div className='md:flex md:justify-between md:w-[62%]'>
            <FooterLink content={"Speed Test"}/>
            <FooterLink content={"Legal Notices"}/>
            <div className="md:relative md:left-16">
            <FooterLink content={"Only on Netflix"}/>
            </div>
        </div>
    </ul>
    <div className="selectDiv">
       <select name="country" className=" bg-[#0F0F0F] my-8 text-lg text-white px-3 py-2 border-gray-400 rounded-sm border-[0.5px] w-32">
           <option value="English" className="bg-white text-black">English</option>
       </select>
    </div>
    <p className='mb-16'>Netflix Pakistan</p>
</div>
  )
}

export default Footer