import React from 'react'

const FooterLink = ({content,classes}) => {
  return (
    <>
     <li className={'mb-4 md:relative'}
      ><a href="#"
               className='underline'>
                     {content}
            </a>
        </li>
    </>
  )
}

export default FooterLink