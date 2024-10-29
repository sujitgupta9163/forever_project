import React from 'react'
import Title from './Title'
import NewsLetterBox from './NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl flex  justify-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[400px]' src='../../public/assets/frontend_assets/about_img.png' alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil vel, repellat laborum exercitationem sit fugiat quibusdam quis harum? Nisi consequuntur officia sapiente aspernatur, ab sequi eaque perspiciatis ut repellendus iusto! Maxime dignissimos ipsum dicta voluptatum distinctio vitae expedita ut est nisi, maiores aliquid, dolores hic? Sapiente consequatur necessitatibus dignissimos voluptas.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti dolore nihil ut et cum vitae architecto nobis, cupiditate dicta officia saepe possimus fuga exercitationem voluptatum, esse odit rem quidem minima?</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci fugit animi blanditiis id delectus, porro ipsum exercitationem odit, nobis consectetur reiciendis dignissimos, quod cupiditate? Iste, aliquid explicabo? Numquam, eum quae!</p>
          </div>
      </div>

      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-20 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda nam perferendis. Incidunt consequuntur fugit mollitia vel dignissimos quisquam, provident, aliquid, sit unde beatae saepe similique eius numquam harum sunt!</p>
        </div>

        <div className='border px-10 md:px-20 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda nam perferendis. Incidunt consequuntur fugit mollitia vel dignissimos quisquam, provident, aliquid, sit unde beatae saepe similique eius numquam harum sunt!</p>
        </div>

        <div className='border px-10 md:px-20 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia assumenda nam perferendis. Incidunt consequuntur fugit mollitia vel dignissimos quisquam, provident, aliquid, sit unde beatae saepe similique eius numquam harum sunt!</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
