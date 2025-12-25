// General
import React from 'react'
// Images
import ImageOne from '/SobirjonovImageOne.png'
// Icons
import { FaPlay } from "react-icons/fa";
// Components
import ButtonStyleOne from '../components/ButtonStyleOne';

// Sobirjonov
export default function Home() {
  return (
    <React.Fragment>
      <main>
        <section className='bg-[#FEDCD0] pb-15'>
          <div className="container mx-auto px-20">
              <div className="flex justify-between py-25">
                <div className="">
                  <div className="flex gap-4 items-center">
                    <button className='w-15 h-15 text-white flex items-center justify-center rounded-full bg-[#E85808] duration-300 transition-shadow hover:shadow-[0_0_0_15px] shadow-[#e8560842]'><FaPlay/></button>
                    <p className='font-semibold'>PLay showreel</p>
                  </div>
                  <h1 className='text-7xl font-bold'>Enjoy studying with Createx Online Courses</h1>
                  <div className="flex">
                    <ButtonStyleOne text={'About Me'}/>
                  </div>
                </div>
                <img src={ImageOne} alt="" />
              </div>
              <ul className="w-full flex gap-5 justify-between items-center">
                <li className='text-4xl font-bold'>1200</li>
                <li>Students graduated</li>
                <li className='w-2 h-2 bg-[#E85808] rounded-full mx-15'></li>
                <li className='text-4xl font-bold'>84</li>
                <li>Completed courses</li>
                <li className='w-2 h-2 bg-[#E85808] rounded-full mx-15'></li>
                <li className='text-4xl font-bold'>16</li>
                <li>Qualified tutors</li>
                <li className='w-2 h-2 bg-[#E85808] rounded-full mx-15'></li>
                <li className='text-4xl font-bold'>5</li>
                <li>Years of experience</li>
              </ul>
            </div>
        </section>
      </main>
    </React.Fragment>
  )
}
