import React from 'react'
import {IoLocationSharp} from 'react-icons/io5'
import {CgMail} from 'react-icons/cg'
import {IoCall} from 'react-icons/io5'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {BiLogoFacebook, BiLogoTwitter} from 'react-icons/bi'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     
    <div className='w-full  bg-stone-800  h-auto grid grid-cols-4  place-items-center	 py-4 px-4 max-xl:grid-cols-2 max-xl:gap-10 max-xl:place-items-start	max-md:grid-cols-1	'>
        
        <div className='max-md:w-full'>
          <div>
          <p className='text-white text-xl font-semibold	'>GET IN TOUCH</p>
          </div>
          <div className='mt-4'>
            <p className='text-white font-medium	'>No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et et dolor sed dolor. Rebum tempor no vero est magna amet no</p>
          </div>
          
           <div className='d-flex items-center gap-1 mt-3'>
            <div>
            <IoLocationSharp className='text-yellow-400 text-2xl	'/>
            </div>
            <div>
            <p className='text-white '>123 Street, New York, USA</p>
          
           </div>
          </div>

          <div className='d-flex items-center gap-1 mt-3'>
            <div>
            <CgMail className='text-yellow-400 text-2xl	'/>
            </div>
            <div>
            <p className='text-white '>mail@domain.com</p>
          
           </div>
          </div>

          <div className='d-flex items-center gap-1 mt-3'>
            <div>
            <IoCall className='text-yellow-400 text-2xl	'/>
            </div>
            <div>
            <p className='text-white '>+012 345 67890</p>
          
           </div>
          </div>
        </div>
       
        <div className='max-md:w-full'>
        <div>
      <p className='text-white text-xl font-semibold'>QUICK SHOP</p>
          </div>

          <div className='d-flex flex-col mt-4 gap-3'> 

          <div>
          <div className='d-flex items-center gap-1'>
          <MdOutlineKeyboardArrowRight className='text-white text-2xl'/>
      <Link to='/'>    <p className='text-white font-medium'>Home</p> </Link>
          </div>
          </div>

          <div>
          <div className='d-flex items-center gap-1'>
          <MdOutlineKeyboardArrowRight className='text-white text-2xl'/>
         <Link to='/shop'>  <p className='text-white font-medium'>Shop </p></Link>
          </div>
          </div>

          <div>
          <div className='d-flex items-center gap-1'>
          <MdOutlineKeyboardArrowRight className='text-white text-2xl'/>
          <Link to='/blogs'>   <p className='text-white font-medium'>Blogs</p></Link>
          </div>
          </div>

          <div>
          <div className='d-flex items-center gap-1'>
          <MdOutlineKeyboardArrowRight className='text-white text-2xl'/>
          <Link to='/contact'> <p className='text-white font-medium'>Contact</p></Link>
          </div>
          </div>
       
          <div>
          <div className='d-flex items-center gap-1'>
          <MdOutlineKeyboardArrowRight className='text-white text-2xl'/>
          <Link to='/ask'> <p className='text-white font-medium'>Ask</p></Link>
          </div>
          </div>

          

          </div>

        </div>



        <div className='max-md:w-full'>
        <div>
      <p className='text-white text-xl font-semibold'>MY ACCOUNT</p>
          </div>

          <div className='d-flex flex-col mt-4 gap-3'> 

          <div>
          <div className='d-flex items-center gap-1'>
        <MdOutlineKeyboardArrowRight className='text-white text-2xl'/> 
       <Link to='/'> <p className='text-white font-medium'>Home</p></Link>
          </div>
          </div>

          <div>
          <div className='d-flex items-center gap-1'>
          <MdOutlineKeyboardArrowRight className='text-white text-2xl'/>
          <Link to='/shop'>   <p className='text-white font-medium'>Shop</p></Link>
          </div>
          </div>

          <div>
          <div className='d-flex items-center gap-1'>
          <MdOutlineKeyboardArrowRight className='text-white text-2xl'/>
          <Link to='/blogs'>   <p className='text-white font-medium'>Blogs</p></Link>
          </div>
          </div>

          <div>
          <div className='d-flex items-center gap-1'>
          <MdOutlineKeyboardArrowRight className='text-white text-2xl'/>
          <Link to='/contact'>     <p className='text-white font-medium'>Contact</p></Link>
          </div>
          </div>
       
          <div>
          <div className='d-flex items-center gap-1'>
          <MdOutlineKeyboardArrowRight className='text-white text-2xl'/>
          <Link to='/ask'>   <p className='text-white font-medium'>Ask</p></Link>
          </div>
          </div>

        

          </div>

        </div>

        <div className='max-md:w-full'>
       <div>
       <p className='text-white text-xl font-semibold'>NEWSLETTER</p>
       </div>
       <div className='mt-4 '>
    <p className='text-white font-medium'>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
       </div>

       <div className='mt-3 d-flex items-center w-full '>
        <div>
          <input type='text' placeholder='Your Email Address'
          className='text-slate-400	 text-left py-2 px-2'
          />
        </div>
        <div>
          <button className='py-2 px-3 bg-yellow-400 text-black'>Sign Up</button>
        </div>
       </div>

       <div className='mt-4 '>
         <div>
         <p className='text-white text-base 	font-semibold'>FOLLOW US</p>
         </div>

         <div className='mt-4 d-flex gap-4'>
            <div className='bg-yellow-400 px-2 py-2 rounded	'>
            <BiLogoTwitter className='text-black  text-2xl 	'/>
            </div>

            <div className='bg-yellow-400 px-2 py-2 rounded	'>
            <BiLogoFacebook className='text-black  text-2xl 	'/>
            </div>

            <div className='bg-yellow-400 px-2 py-2 rounded	'>
            <FaLinkedinIn className='text-black  text-2xl 	'/>
            </div>

            <div className='bg-yellow-400 px-2 py-2 rounded	'>
            <AiOutlineInstagram className='text-black  text-2xl 	'/>
            </div>
         </div>
       </div>
        </div>
    
    </div>

    <div>

    </div>
    </>
  )
}

export default Footer