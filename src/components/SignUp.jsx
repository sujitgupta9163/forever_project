import React, { useState } from 'react'
// import Footer from '../routes/Footer'
// import Nav from '../routes/nav'
import { Link } from 'react-router-dom'


const SignUp = () => {
  const [showPassword , setshowPassword] = useState(false);
  const [showConfirmPassword , setshowConfirmPassword] = useState(false);

  const [data ,setData] = useState({
    username : "",
    email : "",
    password : "",
    confirmPassword : ""
   
  });

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    // console.log(`Name: ${name}, Email: ${email}`);
    // submit data to API or perform other actions
  };
  

  const handleOnChange = (e)=>{
    const {name , value} = e.target;
    
    setData((prev)=>({...prev , [name] : value}))
  }
  console.log(data);
  
  return (
      <section id='signup'>
            {/* <Nav/> */}
        <div className='mx-auto container pt-5'>

              <div className='bg-white p-5 w-full max-w-md mx-auto w-full  rounded-md '>
                  <div className='flex flex-col items-center relative overflow-hidden'>
                      <img src='/signin.gif' alt="login icon" width="65px"/>
                      {/* <div className=' text-[8px] font-bold    absolute bottom-0 rounded-full bg-opacity-75 '>
                       <div className='text-center flex flex-col'>
                       <label>
                         
                          upload photo</label>
                          <input type="file" className='m-0 p-0 bg-transparent  border-none'/>
                       </div>
                      </div> */}
                  </div>

                <form className='mt-3 pr-7  onSubmit={handleSubmit}'>
                    <div className='flex flex-col gap-3'>
                      <div className='flex flex-col gap-1 pr-4'>
                          <label>Username : </label>
                          <div className='flex gap-2'>
                              <i className="ri-user-voice-fill text-2xl"></i>
                              <input onChange={handleOnChange} className='p-1.5 min-w-full border rounded-full outline-none bg-[#F1F5F9]' type="text" placeholder='username'/>
                             
                          </div>
                      </div>

                      <div className='flex flex-col gap-1 pr-4'>
                          <label>Email : </label>
                          <div className='flex gap-2'>
                              <i className="ri-mail-volume-fill text-2xl"></i>
                              <input  onChange={handleOnChange} className='p-1.5 min-w-full border rounded-full outline-none bg-[#F1F5F9]' type="email" placeholder='email' name='email' required/>
                          </div>
                      </div>

                      <div className='flex flex-col  w-full'>
                          <label>Password :</label>

                          <div className='flex gap-6 '>
                          <i className="ri-lock-2-fill text-2xl"></i>
                          <div className='flex justify-center w-full   rounded-full'>
                             
                              <input onChange={handleOnChange} className='p-1.5 min-w-full   outline-none  rounded-l-full bg-[#F1F5F9]'
                                  type={showPassword ? "text" : "password"} placeholder='password' name='password' required/>
                              <i className="ri-eye-fill text-2xl cursor-pointer text-lg bg-[#F1F5F9] rounded-r-full p-1.5" onClick={() => setshowPassword(!showPassword)}></i>
                          </div>
                          </div>
                          
                      </div>


                      <div className='flex flex-col  w-full'>
                          <label>Confirm Password :</label>

                          <div className='flex gap-6 '>
                          <i className="ri-lock-2-fill text-2xl"></i>
                          <div className='flex justify-center w-full   rounded-full'>
                             
                              <input onChange={handleOnChange} className='p-1.5 min-w-full   outline-none  rounded-l-full bg-[#F1F5F9]'
                                  type={showConfirmPassword ? "text" : "password"} placeholder='password' name='password' required/>
                               <i className="ri-eye-fill text-2xl cursor-pointer text-lg bg-[#F1F5F9] rounded-r-full p-1.5" onClick={() => setshowConfirmPassword(!showConfirmPassword)}></i>  
                          </div>
                          </div>
                          
                      </div>

                      
                   </div>
                  
             

                 <div className='flex  justify-center mt-3 gap-10'>

                        
                          <button className='p-2 bg-red-600 hover:w-[110px] text-white rounded-full mt-4 hover:bg-red-800  w-[100px]'
                            type="submit"
                          >Login</button>
                 </div>
                   
              </form>

             <div className='mt-3'> <p>Already have an account? <Link to={'/login'} className='text-red-600 hover:text-red-800: hover:underline '>Login Page</Link></p></div>
          </div>

       </div>

          {/* <Footer/> */}
      </section>
  )
}

export default SignUp