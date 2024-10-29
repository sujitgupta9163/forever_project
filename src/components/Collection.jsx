import React, { useContext, useEffect, useState } from 'react'
import Title from './Title';
import { ShopUContext } from '../context/ShopUContext';
import ProductItem from './ProductItem';
// import { products } from '../assets/assets.js';


const Collection = () => {
  const {products , search , showSearch} = useContext(ShopUContext)
  const [showFillter , setShowFillter] = useState(false);
  const [fillterProducts , setFillterProducts] = useState([]);
  const [category , setCategory] = useState([]);
  const [subCategory , setSubCategory] = useState([]);
  const [sortType , setSortType] = useState('relavent')


  // useEffect(()=>{
  //   setFillterProducts(products);
  // }, [])
  const toggleCategory = (e)=>{
    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item != e.target.value))
    }
    else{
      setCategory(prev =>[...prev , e.target.value])
    }
  }

  const toggleSubCategory = (e)=>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item != e.target.value))
    }
    else{
      setSubCategory(prev =>[...prev , e.target.value])
    }
  }


  const applyFilter = ()=>{
    let productsCopy = products.slice();
    if(search && showSearch){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFillterProducts(productsCopy)
  }

 
  // useEffect(()=>{
  //   console.log(subCategory);
    
  // } , [subCategory])

  // useEffect(()=>{
  //   console.log(category);
    
  // } , [category])
   const sortProduct = ()=>{
    let fpCopy = fillterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFillterProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
        break;

        case 'high-low':
          setFillterProducts(fpCopy.sort((a,b)=>(b.price - a.price)))
          break;

          default:
            applyFilter();
            break;
    }
   }

   useEffect(()=>{
    sortProduct();
   },[sortType])

    useEffect(()=>{
    applyFilter();
  }, [category , subCategory , search , showSearch])
  return ( 
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 boder-t'>
      {/* filtter optiom */}
      <div className='min-w-60'>
          <p onClick={()=>{setShowFillter(!showFillter)}} 
          className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILLTERS
            <img className={`h-2 sm:hidden ${showFillter ? 'rotate-90' : ''}`} src="..//..//public/assets/frontend_assets/dropdown_icon.png" alt="" />
          </p>
          {/* Category fillters */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFillter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

            <div className='flex flex-col gap-2 text-sm font-light tex-gray-700'>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
                </p>

                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
                </p>

                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
                </p>
            </div>
          </div>
     {/* SUBCATEGORY */}
          <div className={`border border-gray-300 pl-5 py-3 mY-5 ${showFillter ? '' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>

            <div className='flex flex-col gap-2 text-sm font-light tex-gray-700'>
                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
                </p>

                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
                </p>

                <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
                </p>
            </div>
          </div>
      </div>
      
      {/* right side */}
      <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={'ALL'} text2={'COLLECTIONS'}/>
            {/* Product sort */}
            <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                <option value="relevent">Sort by: Relavent</option>
                <option value="low-high">Sort by: Low to High</option>
                <option value="high-low">Sort by: High to Low</option>
            </select>
          </div>

          {/* Map products sort*/}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-3'>
          {
          fillterProducts.map((item , index)=>(
            <ProductItem key={index} id={item._id} name={item.name} image={item.image} price = {item.price}/>
          ))
         }
          </div>
      </div>
    </div>
  )
}

export default Collection
