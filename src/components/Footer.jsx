import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src="../../public/assets/frontend_assets/logo.png" alt="" className='w-32 mb-5'/>
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ab, labore fugiat iste beatae quod eligendi saepe, sequi incidunt debitis tenetur omnis? Libero deleniti ipsum, dolor neque ad officiis asperiores laborum deserunt repudiandae, voluptatibus totam voluptates autem odit labore sapiente. Sint possimus cumque quibusdam nihil assumenda aperiam doloremque alias facilis!</p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col text-gray-600 gap-1'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
              <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
              <ul className='flex flex-col text-gray-600 gap-1'>
                <li>+443453-434</li>
                <li>contact@forever.com</li>
              </ul>
            </div>
        </div>
        <div>
          <hr className='border border-gray-300'/>
          <p className='py-5 text-sm text-center'>Copyright 2024 forver.com All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer