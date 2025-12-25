import React from 'react'




export default function About() {
  return (
    <main className='bg-[white]'>
     <section className='mb-[180px]'>
       <div className="container mx-auto px-[30px] ">
            <div className='pt-[140px] flex justify-between items-center'>
                <div className="">
                  <h6 className='text-[16px] font-semibold '>About us</h6>
                    <h1 className='font-semibold text-[64px]  pb-[48px]'>Createx Online School</h1>
                    <p className='w-[600px] pb-[24px] text-[20px]'>Createx Online School is a leader in online studying. We have lots of courses and programs from the main market experts.</p>
                    <p className='font-normal text-[16px] text-[#424551] w-[600px]'>We provide relevant approaches to online learning, internships and employment in the largest companies in the country. Our educational programs help you get a new specialty from scratch. During your studies, we will help you find a job. Check the courses and online events that we organise.</p>
                 <div className="flex gap-[40px] py-[60px]">
                  <button className=' h-[52px] px-[40px] text-[#F95612] border-1 border-[#F95612]'>Explore events</button>
                 <button className=' h-[52px] px-[40px] text-[white] bg-[#F95612]  border-1 border-[#F95612]'>Browse courses</button>
                 </div>
                </div>
                <img src="" className='w-[602px] h-[551px]' alt="Img1" />
              </div>
      </div>
     </section>
     <section className='mb-[180px]'>
      <div className="container mx-auto px-[30px]">
        <div className="flex justify-between">
                  <img className='w-[810px] h-[500px]' src="" alt="Img5"/>
        <div className="">
          <div className='flex gap-[16px] items-center '>
            <p className='font-bold text-[48px] text-[#FF3F3A]'>1200</p>
            <p className='font-semibold text-[18px]'>students graduated</p>
          </div>
          <div className='flex gap-[16px] items-center'>
            <p className='font-bold text-[48px] text-[#FF3F3A]'>84</p>
            <p className='font-semibold text-[18px] '>completed courses</p>
          </div>
          <div className='flex gap-[16px] items-center'>
            <p className='font-bold text-[48px] text-[#FF3F3A]'>16</p>
            <p className='font-semibold text-[18px] '>qualified tutors</p>
          </div>
          <div className='flex gap-[16px] items-center'>
            <p className='font-bold text-[48px] text-[#FF3F3A]'>15</p>
            <p className='font-semibold text-[18px] '>years of experience</p>
          </div>
        </div>
        </div>
      </div>
     </section>
     <section className='mb-[180px]'>
      <div className="container mx-auto px-[30px]">
        <h6 className='font-semibold tet-[16px] text-center'>We always stand for</h6>
        <h1 className='text-[46px] font-bold text-center'>Our core values</h1>
        <ol className='flex justify-between'>
          <li className='w-[240px] flex flex-col items-center text-center'>
            <img className='w-[48px] h-[48px] mb-[24px] ' src="" alt="" />
            <h3 className='font-semibold text-[20px] text-center'>Structured Approach</h3>
            <p className='text-[#787A80] font-normal text-[16px] w-[240px] text-center'>Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. </p>
          </li>
          <li className='w-[240px] flex flex-col items-center text-center'>
            <img className='w-[48px] h-[48px] mb-[24px]' src="" alt="" />
            <h3 className='font-semibold text-[20px] text-center'>Professional Feedbacks</h3>
            <p className='text-[#787A80] font-normal text-[16px] w-[240px] text-center'>Culpa nostrud commodo ea consequat reprehenderit aliquip. </p>
          </li>
          <li className='w-[240px] flex flex-col items-center text-center'>
            <img className='w-[48px] h-[48px] mb-[24px]' src="" alt="" />
            <h3 className='font-semibold text-[20px] text-center'>Efficiency</h3>
            <p className='text-[#787A80] font-normal text-center text-[16px] w-[240px]'>Viverra scelerisque consequat net. Adipisicing esse consequat. </p>
          </li>
          <li className='w-[240px] flex flex-col items-center text-center'>
            <img className='w-[48px] h-[48px] mb-[24px]' src="" alt="" />
            <h3 className='font-semibold text-[20px] text-center'>Flexible Shedule</h3>
            <p className='text-[#787A80] font-normal text-[16px] w-[240px] text-center'>Aute eiusmod dolore dolore deserunt veniam ad deserunt. </p>
          </li>
        </ol>
      </div>
     </section>
    </main>
  )
}
