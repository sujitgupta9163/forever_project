import React, { useContext, useState } from 'react'
import { ShopUContext } from '../context/ShopUContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id , image , name , price}) => {
  const {currency}= useContext(ShopUContext);
  return (
    <div>
        <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
          <div className='overflow-hidden'>
              <img className='hover:scale-125 transition ease-in-out' src={image[0]} alt="" />
          </div>
          
          <p className='pt-3 pb-1 text-sm'>{name}</p>
          <p className='text-sm font-medium'>{currency}{price}</p>
        </Link>
    </div>
  )
}

export default ProductItem
