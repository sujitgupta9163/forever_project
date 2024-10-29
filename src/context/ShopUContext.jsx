import { createContext, useState } from 'react'
import { products } from '../assets/assets'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
export const ShopUContext = createContext()

const ShopUContextProvider = (props)=>{
const currency = "$";
const delivery_fee = 10;
const [search , setSearch] = useState('');
const [showSearch , setShowSearch] = useState(false);
const [cartItems , setCartItems] = useState({})
const navigate = useNavigate();
const addToCart = (itemId, size) => {

  if(!size){
    toast.error("Please Select the any size")
  }

  let cartData = structuredClone(cartItems);

  if (cartData[itemId]) {
    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;  // Correctly increments the quantity
    } else {
      cartData[itemId][size] = 1;
    }
  } else {
    cartData[itemId] = {};
    cartData[itemId][size] = 1;
  }

  setCartItems(cartData);  // Updates the cartItems state
};


const getCartCount = ()=>{
  let totalCount = 0;
  for(const items in cartItems){
    for(const item in cartItems[items]){
      try {
        if(cartItems [items][item] > 0){
          totalCount += cartItems[items][item];
        }
      } catch (error) {
        
      }
    }
  }
  return totalCount;
}

  

// useEffect(()=>{
//   console.log(cartItems);
  
//  } , [cartItems])

const updateQuantity = async (itemId ,size , quantity) =>{
  let cartData = structuredClone(cartItems);
  cartData[itemId][size] = quantity;
  setCartItems(cartData)
}

 const getCartAmount =  ()=>{
    let totalAmount = 0;

    for(const items in cartItems){
      let itemInfo = products.find((product)=> product._id === items);
      for(const item in cartItems[items]){
        try {
          if(cartItems[items][item] > 0){
            totalAmount += itemInfo.price * cartItems[items][item]
          }
        } catch (error) {
          
        }
      }
    }
    return totalAmount;
  }

  const value = {
     products,currency,delivery_fee,
     search,showSearch,setSearch,setShowSearch,
     cartItems , addToCart , setCartItems ,
     getCartCount, updateQuantity,
     getCartAmount, navigate
  }

 

  return (
    <ShopUContext.Provider value={value}>
      {props.children}
    </ShopUContext.Provider>
  )
}

export default ShopUContextProvider;