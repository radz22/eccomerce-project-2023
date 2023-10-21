import React from 'react'
import { useState, useEffect } from 'react'
import { FidgetSpinner  } from 'react-loader-spinner'
import {MdOutlineCelebration, MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-router-dom'
const Checkout = () => {

  const [loading , setLoading ] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
     setLoading(false)
    },1000)
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
      <div className='py-3 px-3 bg-[#e2e1e1] w-full h-screen flex items-center justify-center '>
      <div className=' w-4/5	h-96	 bg-white flex items-center justify-center flex-col py-3 px-3 max-md:w-full'>
        
        <div className='flex items-center justify-center gap-2'>
        <div>
          <h2 className='text-4xl	font-semibold	max-lg:text-2xl	'>Thankyou for Purchase Order</h2>
        </div>
        <div>
           <h2><MdOutlineCelebration className='text-6xl	text-red-400	max-lg:text-4xl		'/></h2>
        </div>
        </div>

        <div className='flex items-center justify-center gap-14 mt-4'>
          <div className='flex flex items-center justify-center bg-[#e2e3e5] py-3 px-3 '>

               <div>
                  <MdOutlineKeyboardArrowLeft className='text-4xl	max-lg:text-3xl	'/>
              </div>
              <div>
               <Link to='/'>  <p className='text-2xl	font-semibold		max-lg:text-xl	'>Return Home</p></Link>
              </div> 

          </div>

          <div className='flex flex items-center justify-center bg-[#e2e3e5] py-3 px-3 '>
           
              <div>
               <Link to='/shop'>  <p className='text-2xl	font-semibold	max-lg:text-xl	'>Return Shop</p> </Link> 
              </div> 

              <div>
                  <MdKeyboardArrowRight className='text-4xl	max-lg:text-3xl'/>
              </div>
              
          </div>

        
        </div>
      </div>
  </div>
    )
   }
   </>
  )
}

export default Checkout