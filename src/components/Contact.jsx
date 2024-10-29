import React from 'react'
import Title from './Title'
import NewsLetterBox from './NewsLetterBox'

const Contact = () => {
  return (
    <div>
       <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
       </div>

       <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
          <img className='w-full md:max-w-[450px]' src="../../public/assets/frontend_assets/contact_img.png" alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className = 'text-gray-600'>Our Store</p>
            <p className = 'text-gray-600'>Sujit Kumar</p>
            <p className = 'text-gray-600'>Sujit9163@gmail.com</p>
            <p className = 'text-gray-600'>916378990</p>
            <p className = 'text-gray-600'>Hasua siwan (Bihar)</p>

            <button className='border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>
       </div>
       <NewsLetterBox/>
    </div>
  ) 
}

export default Contact