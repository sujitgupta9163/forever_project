import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Routes , Route,  } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import About from "./components/About"
import Cart from "./components/Cart"
import Collection from "./components/Collection"
import Contact from "./components/Contact"
// import Login from "./components/Login"
// import SignUp from './components/SignUp'
import Orders from "./components/Orders"
import PlaceOrder from "./components/PlaceOrder"
import Product from "./components/Product"
// import UserRegistrationForm from './components/UserRegistratioonForm'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './components/Login'

const App = () => {
  
  return (

    // <div>
    //   <UserRegistrationForm/>
    // </div>
    <div className='px-2 sm-px-[5vw] md:px-[3vw] lg-px-[9vw]'>
      {/* px-2 sm-px-[5vw] md:px-[3vw] lg-px-[9vw] */}
      <ToastContainer/>
      <Navbar />
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element = {<Contact/>}/>
        {/* <Route path='/login' element = {<Login/>}/> */}
        {/* <Route path='/signup'element = {<SignUp/>}/> */}
        <Route path='/orders' element = {<Orders/>}/>
        <Route path='/place-order' element = {<PlaceOrder/>}/>
        <Route path='/product/:productId' element = {<Product/>}/>
        <Route path='/login' element = {<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App