import React, { useContext } from 'react'
import {NavLink , Link} from 'react-router-dom'
import { CiSearch , CiMenuFries  } from "react-icons/ci";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { ShopUContext } from '../context/ShopUContext';

const Navbar = () => {
    const {setShowSearch , getCartCount} = useContext(ShopUContext);
  const [visible , setVisible] = React.useState(false)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
            <Link to={'/'} className='cursor-pointer'>
              <img src="/assets/frontend_assets/logo.png" alt="" className='w-[100px]' />
            </Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to={'/'} className= 'flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            <NavLink to={'/collection'} className= 'flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            <NavLink to={'/about'} className= 'flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

            <NavLink to={'/contact'} className= 'flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>

      {/* menu section in nav bar */}
        <div className='flex items-center gap-6'>
            <CiSearch onClick={()=>setShowSearch(true)} className=' cursor-pointer text-3xl '/>

            <div className='group relative'>
                <Link to='/login'><IoPersonCircleSharp className=' cursor-pointer text-3xl rounded-full ' /></Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-3'>
                    <div className='flex flex-col gap-2 w-48 py-3 px-6 bg-slate-200 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>LogOut</p>
                    </div>
                </div>
           </div>

           <Link to={'/cart'} className='relative flex items-center justify-center'>
              <IoCartOutline className=' cursor-pointer text-4xl'/>
                <p className='w-5 h-6 absolute -top-2 -right-1 w-6 bg-red-600 flex items-center justify-center rounded-full text-white cursor-pointer text-xs'>{getCartCount()}</p>
           </Link>


           {/* side babar */}

           <div className='sm:hidden cursor-pointer w-5'>
              <CiMenuFries className=' cursor-pointer text-4xl 'onClick={()=>setVisible(true)}/>
           </div>

           <div className={`absolute top-0 , right-0 , bottom-0 overflow-hidden , bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                            <img src="/assets/frontend_assets/dropdown_icon.png." alt=""  className='h-4 rotate-180'/>
                            <p>Back</p>
                    </div>
                        
                        <div className='flex flex-col gap-4 px-4'>
                            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border rounded-full' to={"/"}>HOME</NavLink>
                            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border rounded-full' to={"/collection"}>COLLECTION</NavLink>
                            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border rounded-full' to={"/about"}>ABOUT</NavLink>
                            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border rounded-full' to={"/contact"}>CONTACT</NavLink>
                        </div>
                </div>
           </div> 

        </div>


        {/* menu section in mobile view */}
     

        
    </div>
  )
}

export default Navbar
