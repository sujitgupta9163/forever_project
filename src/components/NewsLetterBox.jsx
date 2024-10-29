import React from 'react'
import { useState } from 'react'
const NewsLetterBox = () => {
  const [email, setEmail] = useState('')
  const onSubmitHandler = (event)=>{
    event.preventDefault();
    setEmail('')
  }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, consequuntur.</p>

      <form onSubmit={onSubmitHandler} 
          className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
          <input onChange={(e)=>{setEmail(e.target.value)}} 
          value={email}
          className='w-full sm:flex-1 outline-none' type="email" required placeholder='Enter your email' />
          <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
      </form>
      <h1>{email}</h1>
    </div>
  )
}

export default NewsLetterBox