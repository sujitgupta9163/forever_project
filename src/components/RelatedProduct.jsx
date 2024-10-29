import React, { useContext, useEffect, useState } from 'react'
import { ShopUContext } from '../context/ShopUContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProduct = ({category , subcategory}) => {
  const {products} = useContext(ShopUContext)
  const [related , setRelated] = useState([]);
  

  useEffect(()=>{
    if(products.length > 0){
      let productCopy = products.slice();
      productCopy = productCopy.filter((item)=> category === item.category);
      productCopy = productCopy.filter((item)=> subcategory == item.subcategory)
      setRelated(productCopy.slice(0,5));
      console.log(productCopy.slice(0,5));
      
      
    }
  },[products])
  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'}/>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            related.map((item , index)=>(
              <ProductItem key={index} id={item._id} description = {item} name={item.name} price={item.price} image={item.image}/>
            ))
          }
      </div>
    </div>
  )
}

export default RelatedProduct