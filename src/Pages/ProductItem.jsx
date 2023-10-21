import React from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";

const ProductItem = (props) => {

    const {id , image, name , price, original, value, index} = props.data;
    const {cartItem, addToCart } = useContext(ShopContext);

   const cartItemAmount = cartItem[id]
  return (
    <div className='bg-white w-full	flex justify-center	 items-center	 flex-col py-4 max-md:w-11/12	rounded-md	' key={index}>
       
        <div className='w-2/4 mb-10 h-80	max-sm:h-64	'>
           <Link to={`/product/${id}`}><img src={image} className='w-full 	'/></Link> 
        </div>
        <div className=''>
            <p className='text-2xl	font-semibold	'>{name}</p> 
        </div>
        <div>
         <ReactStars
           count={5}
           size={24}
           value={value}
           edit={false}
           activeColor="#ffd700"
           isHalf={true}
           emptyIcon={<i className="far fa-star"></i>}
           halfIcon={<i className="fa fa-star-half-alt"></i>}
           fullIcon={<i className="fa fa-star"></i>}
         />
         </div>

        <div className=''>
           <p className='font-medium	text-lg	max-sm:text-base max-sm:text-xl	'><span className='font-semibold text-xl	max-lg:text-lg	 max-sm:text-base		max-sm:text-2xl'>PHP {price}</span> &nbsp; <strike> ${original}</strike> </p>
         </div>

         <div className='mt-4 mb-4'>
         <button onClick={() => addToCart(id)} className='text-lg bg-[#232f3e] py-3 px-4 rounded-full	text-white'>Add to Cart
        {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
         </div>
     

    </div>
  )
}

export default ProductItem