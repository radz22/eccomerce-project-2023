import React from 'react'
import { product } from '../data/data'
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { FidgetSpinner  } from 'react-loader-spinner'
import { useState, useEffect } from 'react'

const Cart = () => {

    const {cartItem, getTotalAmount } = useContext(ShopContext);
    const totalAmount = getTotalAmount();
    const [loading , setLoading ] = useState(false)
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
       setLoading(false)
      },2000)
     },[])
   
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
        <div className='py-3 px-3 bg-[#e2e1e1] '>
        <div className='mt-4'>
        <h1 className='text-center text-2xl	font-bold'>Our Cart</h1>

        </div>
   <div >
   {
        product.map((item) => {
            if(cartItem[item.id] > 0){
                return <CartItem data={item}/>
            }
        })
    }

   </div>
<div className='w-full '>
    {
        totalAmount > 0 ? (
            <div className='flex justify-between mt-10'>
              <div>
              <p className='text-2xl font-semibold	max-md:text-xl	'>Total Amount : <span className='text-3xl	font-bold max-md:text-2xl		'>{totalAmount} PHP</span></p>
              </div>

              <div>
             <Link to='/checkout'>  <button className='px-4 py-3 text-xl	bg-[#232f3e] text-white  rounded-full max-md:text-lg		'>Check Out</button></Link> 
              </div>

            </div>
        ) : (
            <div className='h-screen w-full flex items-center justify-center'>
              <h1 className='text-3xl font-semibold'>Not Found Items!!!</h1>
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

export default Cart