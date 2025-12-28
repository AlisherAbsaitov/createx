// General
import React from 'react'
// Images
import ImageOne from '/SobirjonovImageOne.png'
import ImageTwo from '/SobirjonovImageSectionTwo.png'
// Icons
import { FaPlay } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
// Components
import ButtonStyleOne from '../components/ButtonStyleOne';

// Sobirjonov
export default function Home() {
  return (
    <React.Fragment>
      <main>
        {/* First section */}
        <section className='bg-[#FEDCD0] pb-15'>
          <div className="container mx-auto px-20">
              <div className="flex justify-between py-25">
                <div className="w-160">
                  <div className="flex gap-4 items-center">
                    <button className='w-15 h-15 text-white flex items-center justify-center rounded-full bg-[#E85808] duration-300 transition-shadow hover:shadow-[0_0_0_15px] shadow-[#e8560842]'><FaPlay/></button>
                    <p className='font-semibold'>PLay showreel</p>
                  </div>
                  <h1 className='text-7xl font-bold pt-10'>Enjoy studying with Createx Online Courses</h1>
                  <div className="flex pt-20 gap-6">
                    <ButtonStyleOne text={'About Me'}/>
                    <ButtonStyleOne text={'Explore courses'}/>
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
        {/* Why createx */}
        <section className='py-50'>
          <div className="container mx-auto px-20">
            <div className="flex gap-30 justify-between">
              <img src={ImageTwo} alt="image"/>
              <div className="flex gap-10 flex-col w-110">
                <p className='font-semibold'>WHO ARE WE</p>
                <h1 className='font-bold text-6xl'>Why Createx?</h1>
                <ul className='flex flex-col gap-3'>
                  <li className='flex gap-2 '><SiTicktick className='text-[#ff4038]'/>A fermentum in morbi pretium aliquam adipiscing donec tempus.</li>
                  <li className='flex gap-2 '><SiTicktick className='text-[#ff4038]'/>Vulputate placerat amet pulvinar lorem nisl.</li>
                  <li className='flex gap-2 '><SiTicktick className='text-[#ff4038]'/>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
                  <li className='flex gap-2 '><SiTicktick className='text-[#ff4038]'/>Etiam duis lobortis in fames ultrices commodo nibh.</li>
                  <li className='flex gap-2 '><SiTicktick className='text-[#ff4038]'/>Tincidunt sagittis neque sem ac eget.</li>
                  <li className='flex gap-2 '><SiTicktick className='text-[#ff4038]'/>Ultricies amet justo et eget quisque purus vulputate dapibus tortor.</li>                  
                </ul>
                <ButtonStyleOne text={'More about us'}/>
              </div>
            </div>
          </div>
        </section>
        {/* Ready to learn */}
        <section>
          <div className="container mx-auto px-20">
            <p className='font-semibold'>READY TO LEARN?</p>
            <div className="flex justify-between pb-15">
                <h1 className='font-bold text-6xl'>Featured Courses</h1>
                <ButtonStyleOne text={'View all courses'}/>
            </div>
            <div className="grid grid-cols-2 grid-rows-9 gap-4">
              
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  )
}
