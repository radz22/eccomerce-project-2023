import React from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
const CartItem = (props) => {
    const {id , image, name , price, } = props.data;
    const { addToCart, removeToCart } = useContext(ShopContext);
  return (
    <div className=' w-full'>
      
      <div className='bg-white py-3 px-3 w-full mt-10 flex justify-around		items-center rounded-lg	'>
       <div className='w-48	 max-md:w-40	max-sm:w-24	'>
         <img src={image} className='w-full h-36 max-md:h-32 max-sm:h-24		'/>
      </div>
      <div>
        <p className='text-lg font-medium max-md:text-base	'>Product Name: <span className='text-xl font-semibold	max-md:text-lg	'>{name}</span></p>
      </div>

      <div className='ml-10'>
        <p className='text-lg font-medium max-md:text-base'>Price: <span className='text-xl font-semibold	max-md:text-lg'>{price} PHP</span></p>
      </div>
      <div className='ml-10 flex flex-col gap-3'>
         <div>
         <button onClick={() => addToCart(id)} className='py-3 px-3 bg-[#232f3e] text-white text-lg	rounded-md max-md:text-base	'>+</button>
         </div>
         <div>
         <button onClick={() => removeToCart(id)} className='py-3 px-3 bg-[#febd89]  text-2xl	rounded-md	max-md:text-xl		'>-</button>
         </div>
      </div>
      </div>

    </div>
  )
}

export default CartItem