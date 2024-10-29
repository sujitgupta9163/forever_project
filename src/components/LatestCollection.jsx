import React, { useContext, useEffect, useState } from 'react'
import { ShopUContext } from '../context/ShopUContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const {products} = useContext(ShopUContext);
  

  const [latestProducts , setLatestProducts] = useState([])

  useEffect(()=>{
    setLatestProducts(products.slice(0,10));
    
  }, [])
  
  return (
    <div className='my-10'>
      <div className='text-center py-8 text 3xl'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam eum quasi at, sapiente asperiores debitis dicta nulla eaque ex magni, inventore, molestiae illo explicabo. Eum omnis nisi iste quos atque.</p>
      </div>
      
      {/* /// rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gay-y-6'>
      
      {
        latestProducts.map((product , index)=>{
          return (
            <div key={index}>
              {/* <ProductItem key={product.id} {...product} /> */}
              <ProductItem key={index} id={product._id} image={product.image} name={product.name} price={product.price} />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default LatestCollection
