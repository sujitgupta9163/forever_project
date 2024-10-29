import React, { useContext, useEffect , useState } from 'react'
import { ShopUContext } from '../context/ShopUContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { products } from '../assets/assets.js';


const BestSeller = () => {
  const {products} = useContext(ShopUContext);
  console.log(products);
  const [bestSeller , setBestSeller] = useState([]);
  
  useEffect(()=>{
    const bestProdut = products.filter((item)=>(item.bestSeller));
    setBestSeller(bestProdut.slice(0,5))
    
  },[])
  

  
  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, eos consequatur? Assumenda nemo sed, consequuntur possimus asperiores beatae enim tempore quod debitis, tenetur molestiae odio quia nisi dolore aliquam! Adipisci!
        </p>
      </div>


      <div className='grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
         {
          products.map((item , index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price = {item.price}/>
          ))
         }
      </div>
    </div>
  )
}

export default BestSeller