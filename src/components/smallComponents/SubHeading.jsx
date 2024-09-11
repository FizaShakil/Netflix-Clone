import React from 'react'

const SubHeading = ({heading}) => {
  return (
    <>
        <h3 className="text-white text-xl leading-snug text-left font-semibold ml-8 md:text-2xl lg:ml-40">
          {heading}
        </h3>
    </>
  )
}

export default SubHeading