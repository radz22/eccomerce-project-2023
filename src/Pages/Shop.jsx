import React from 'react'
import ProductItem from './ProductItem'
import { useState, useEffect } from 'react'
import { product } from '../data/data'
import Search from './Search'
import { FidgetSpinner  } from 'react-loader-spinner'
import { MagnifyingGlass  } from 'react-loader-spinner'

const Shop = () => {
  const [data, setData] = useState(product)
  const [loading , setLoading ] = useState(false)
  const [searchLoading , setSearchLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
     setLoading(false)
    },2000)
   },[])

  const handleSearch = (searchItem) => {
   const filter = product.filter((item) => item.name.toLowerCase().includes(searchItem.toLowerCase()))

   setTimeout(() => {
    setSearchLoading(false)
    }, 2000);
    setSearchLoading(true)
   setData(filter)
  }
  return (
   
   <>
   {
   loading ? (
    <div className='w-full flex justify-center	h-screen items-center'>

    <FidgetSpinner
      visible={true}
      height="120"
      width="120"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      ballColors={['#ff0000', '#00ff00', '#0000ff']}
      backgroundColor="#F4442E"
    />
          </div>
   ) : (
    <div className='bg-[#e2e1e1] py-3 px-3 w-full'>

    <h1 className='text-center text-2xl	font-bold	'>Our Products</h1>
    
          <div>
            <Search onSearch={handleSearch}/>
          </div>
    
         
         
    
    
       <div className='flex justify-center w-full items-center'>
       {
          searchLoading ? (
           <div className='flex w-full h-screen items-center justify-center'>
  <MagnifyingGlass
  visible={true}
  height="120"
  width="120"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>
           </div>
          ) : (
            <div>
        {
          data == 0 ? (
            <div className='w-full h-screen flex items-center justify-center'>
            <div >
            <h1 className='text-3xl font-semibold	'>Sorry Item Not Found!!!</h1>
            </div>
            </div>
          ) : 
          
          <div className='grid grid-cols-3 place-items-center gap-10 w-full mt-20 max-lg:grid-cols-2 max-md:grid-cols-1'>
           {
           data.map((item, index) => (
            
             <ProductItem data={item} index={index}/>
      
          ))
           }
             </div>
        }
      </div>
          )
        }
       </div>
    
    
    
          
    
    
      </div>
   )
   }
   </>
  )
}

export default Shop