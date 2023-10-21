import React, { useContext, useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosArrowDown} from 'react-icons/io'
import { ShopContext } from '../Context/ShopContext'
import {AiOutlineUser, AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Header = () => {


  const {handleClick, button, handleNavbar, navbar} = useContext(ShopContext)

  return (
    <div className='bg-[#e2e1e1]'>
     <div className='d-flex w-full justify-between items-center px-3	py-3 max-lg:bg-slate-800 max-sm:w-full '>
      <div className='max-lg:flex max-lg:justify-between max-lg:w-full '>
        <Link to='/'>
     <div className='d-flex text-center'>
     <p className='bg-stone-800	text-amber-400 py-3 px-3 text-5xl	font-bold	font-mono	max-xl:text-4xl max-lg:text-3xl max-md:text-xl	uppercase'>Swiftly</p>
       <h1 className='text-center bg-amber-400	text-stone-900 py-3 px-3 text-5xl font-medium		font-serif max-lg:text-3xl max-md:text-xl	'> SHOP</h1>
     </div>
     </Link>
<div className='d-flex justify-center	 items-center	flex-col'>
  <button onClick={handleNavbar}>
  <div>
   <GiHamburgerMenu className='text-3xl	text-white font-bold hidden max-md:block max-lg:block' />
   </div>
  
   
  </button>
  


</div>

      </div>

      <div className='d-flex flex-col text-center max-md:hidden'>
          <p className='text-base	text-slate-400 max-lg:hidden max-xl:text-sm	max-md:hidden'>Customer Service </p>
          <p className='text-xl		max-xl:text-sm max-lg:hidden	max-md:hidden'>+012 345 6789</p>  
      </div>

      
     </div>

     <div className=' w-full max-lg:bg-slate-800 max-lg:mb-3 px-3 max-sm:w-full'>
    {
      navbar && 
      <div className='d-flex flex-col gap-2'>

<div className='d-flex  gap-10'>
      <div className='d-flex d-flex items-center justify-center gap-2'>
       <AiOutlineUser  className='text-yellow-400	text-xl		'/>
  <Link to='/login'><p className='text-slate-50	font-bold'>Login</p></Link>
      </div>
      <Link to='/cart'> 
      <div className='d-flex d-flex items-center justify-center  gap-2'>
       <AiOutlineShoppingCart className='text-yellow-400	text-xl		'/>
        <p className='text-slate-50	font-bold'>Cart</p>
      </div>
      </Link>
      
    </div>
        <div>
          <Link to='/'><p className='text-white '>Home</p></Link>
        </div>

        <div>
         <Link to='/shop'><p className='text-white max-md:text-lg'>Shop</p></Link> 
        </div>

        <div>
        <Link to='/blogs'>  <p className='text-white max-md:text-lg'>Blogs</p></Link>  
        </div>

        <div>
        <Link to='/contact'> <p className='text-white max-md:text-lg'>Contact</p></Link> 
        </div>

        <div>
        <Link to='/ask'> <p className='text-white max-md:text-lg'>Ask?</p></Link> 
        </div>
      </div>
    }
   </div>
   
   <div className='d-flex w-full items-center justify-between px-3 mb-4	 bg-stone-800 h-16  max-lg:bg-transparent max-sm:w-full '>
    
    <div className='d-flex items-center gap-10'>

    <div className='d-flex bg-amber-400 w-80 py-3 px-3 h-16 d-flex items-center max-lg:bg-transparent '>
      <button onClick={handleClick}> 
        <div className='d-flex items-center justify-center gap-36'>
           <div className='d-flex items-center justify-center  gap-2  '>
           <GiHamburgerMenu className='cursor-pointer	text-lg max-xl:text-base max-lg:hidden'/>
          <p className='text-base max-xl:text-base max-lg:hidden'>Categories</p>
           </div>
          <div className=''>
            <IoIosArrowDown className='cursor-pointer	text-lg max-xl:text-base	max-lg:hidden'/>
          </div>
        </div>
        </button>
     </div>
     

     <div className='d-flex items-center justify-center gap-10'>
     <div>
    <Link to='/'><p className='text-slate-50	font-bold	max-xl:text-sm max-lg:hidden'>Home</p></Link>
     </div>

     <div>
    <Link to='/shop'><p className='text-slate-50	font-bold	max-xl:text-sm	max-lg:hidden'>Shop</p></Link> 
     </div>

     <div>
     <Link to='/blogs'><p className='text-slate-50	font-bold	max-xl:text-sm max-lg:hidden'>Blogs</p></Link>
     </div>

     <div className='d-flex items-center justify-center gap-2'>
   <Link to='/contact'> <p className='text-slate-50	font-bold	max-xl:text-sm max-lg:hidden'>Contact</p></Link>
    
     </div>


     <div className='d-flex items-center justify-center gap-2'>
   <Link to='/ask'> <p className='text-slate-50	font-bold	max-xl:text-sm max-lg:hidden'>Ask</p></Link>
    
     </div>

     </div>



    </div>
    
    <div className='d-flex  gap-10'>
      <div className='d-flex  items-center justify-center gap-2'>
       
       <AiOutlineUser  className='text-yellow-400	text-xl		max-lg:hidden'/>
       <Link to='/login'><p className='text-slate-50	font-bold max-lg:hidden'>Login</p>
       </Link>
      </div>
      <Link to='/cart'> 
      <div className='d-flex d-flex items-center justify-center  gap-2'>
       <AiOutlineShoppingCart className='text-yellow-400	text-xl		max-lg:hidden'/>
       <p className='text-slate-50	font-bold max-lg:hidden'>Cart</p>
      </div>
      </Link>
    </div>

    <div className=' absolute z-10 top-44 2xl:mt-0	'>

{
    button &&
    <div className='bg-white w-80	'>
    
    <div className='py-3 px-3 d-flex flex-col	gap-2'>
    <div>
     <p className='border-b-2'>Dresses</p>
     </div>

     <div>
     <p className='border-b-2'>Shirts</p>
    </div>

    <div>
    <p className='border-b-2'>Jeans</p>
    </div>

    <div>
    <p className='border-b-2'>Jeans</p>
    </div>

    <div>
     <p className='border-b-2'>Sleepwear</p>
    </div>
    <div>
     <p className='border-b-2'>SportsWear</p>
    </div>

    <div>
     <p className='border-b-2'>Jumpsuits</p>
    </div>


    <div>
     <p className='border-b-2'>Blazers</p>
    </div>
    <div>
     <p className='border-b-2'>Jackets</p>
    </div>

 <div>
  <p className='border-b-2'>Shoes</p>
 </div>
 </div> 
    </div>
    

    
  }

</div>
    
   </div>



   
    </div>
  )
}

export default Header