import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { ShopUContext } from '../context/ShopUContext'
import RelatedProduct from './RelatedProduct'
const Product = () => {
  const {productId} = useParams()
  const {products , currency , addToCart} = useContext(ShopUContext);
  const [productData , setProductData] = useState(false);
  const [image, setImage] = useState('');
  const[size , setSize] = useState('');

  const fetchProductData = ()=>{
      products.map((item) =>{
        if(item._id === productId){
          setProductData(item);
          setImage(item.image[0])
          // console.log(item);
            
          return null;
        }
      })
  }

  useEffect(()=>{
      fetchProductData();
  }, [productId , products])
  
  
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data */}
      
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
          {
            productData.image.map((item, index)=>(
              <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
            ))
          }   

          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-full' src={image} alt="" />
          </div>
        </div>
        {/* Product Information */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img className='w-3.5' src="../../public/assets/frontend_assets/star_icon.png" alt="" />
              <img className='w-3.5' src="../../public/assets/frontend_assets/star_icon.png" alt="" />
              <img className='w-3.5' src="../../public/assets/frontend_assets/star_icon.png" alt="" />
              <img className='w-3.5' src="../../public/assets/frontend_assets/star_icon.png" alt="" />
              <img className='w-3.5' src="../../public/assets/frontend_assets/star_dull_icon.png" alt="" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='text-2xl font-medium mt-5'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>

            <div className='flex flex-col gap-4 my-8'>
                <p>Select Size</p>
                <div className='flex gap-2 '>
                    {
                      productData.sizes.map((item , index)=>(
                        <button onClick={()=> setSize(item)} className={`py-2 px-4 bg-gray-200 border ${item ===size ? 'border-orange-400' : ''}`} key={index}>{item}</button>
                      ))
                    }
                </div>
            </div>
            <button onClick={()=> addToCart(productData._id , size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr  className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                  <p>100% Original Product</p>
                  <p>Cash on delivery available in this product.</p>
                  <p>Easy return and exchange with in the 7 days.</p>
            </div>
        </div>
      </div>
          {/* Description and reviws section */}
          <div className='mt-20'>
              <div className='flex'>
                  <b className='border px-5 py-3 text-sm'>Description</b>
                  <p className='border px-5 py-3 text-sm'>Reviws(122)</p>
              </div>
                <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt expedita illo nulla reiciendis rerum natus cum eos totam, aliquid commodi sapiente laudantium autem sequi placeat ipsum maiores cumque dignissimos eligendi? Atque, itaque ducimus? Eos distinctio sint nemo ipsum rem, dolor quaerat soluta ipsa harum ut voluptas corrupti dolorum ratione aperiam?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae dolore sunt iusto enim minima quisquam hic, itaque autem? Quaerat, delectus. Architecto, excepturi non! Obcaecati aperiam asperiores nulla commodi ipsam id natus illum quaerat quae doloremque reprehenderit perferendis sint, nesciunt, odio facere itaque doloribus nihil omnis. Placeat dolore unde consequatur at!</p>
                 </div>
          </div>

          {/* ----------------- display related product------------- */}
          <RelatedProduct category = {productData.category} subcategory={productData.subcategory}/>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product