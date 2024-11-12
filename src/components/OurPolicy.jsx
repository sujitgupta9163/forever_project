import React from 'react'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md-text-base-700 '>
      <div>
        <img src="/assets/frontend_assets/exchange_icon.png" alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hessle free exchange policy</p>
      </div>

      <div>
        <img src="/assets/frontend_assets/quality_icon.png" alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>7 Days Return Policy</p>
        <p className='text-gray-400'>We Provide 7 Days Return policy</p>
      </div>

      <div>
        <img src="/assets/frontend_assets/support_img.png" alt="" className='w-12 m-auto mb-5'/>
        <p className='font-semibold'>Best Coustomer Support</p>
        <p className='text-gray-400'>We Provide 24/7 Customer Support</p>
      </div>
    </div>
  )
}

export default OurPolicy