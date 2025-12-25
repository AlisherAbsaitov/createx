import React from 'react'

export default function ButtonStyleOne(props) {
  return (
    <React.Fragment>
        <button className='bg-[linear-gradient(45deg,#FF4038,#E85808)] py-2 px-3 rounded-md border-2 border-[#ff4038] text-white hover:text-[#ff4038] duration-300 hover:bg-[linear-gradient(0deg,transparent,transparent)]'>{props.text}</button>
    </React.Fragment>
  )
}
