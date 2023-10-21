import React from 'react'
import { Link } from 'react-router-dom'
import { FidgetSpinner  } from 'react-loader-spinner'
import { useState, useEffect } from 'react'

const Signup = () => {
  const [loading , setLoading ] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
     setLoading(false)
    },2000)
   },[])
  return (
   <>
   {loading ? (
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
    <div className='bg-[#e2e1e1] py-3 px-3 w-full h-screen flex justify-center items-center flex-col'>

    <div className=' w-full flex justify-center items-center flex-col'>
       
       <div className='bg-white w-5/12	px-4 py-4 	 flex justify-center items-center flex-col rounded	 max-lg:w-8/12	max-md:w-9/12	max-sm:w-10/12	'>
           <div className='mt-5'>
            <h2 className='text-2xl	 font-medium text-[#777777]'>Create Account</h2>
           </div>
           <div className='mt-8 w-full '>
            <input type='text' className='w-full py-3 px-2 bg-[#f5f5f7] border-1 border-[#777777] rounded-lg		'
            placeholder='First Name'
            />
           </div>

           <div className='mt-4 w-full '>
            <input type='text' className='w-full py-3 px-2 bg-[#f5f5f7] border-1 border-[#777777] rounded-lg		'
            placeholder='Last Name'
            />
           </div>

           <div className='mt-4 w-full '>
            <input type='text' className='w-full py-3 px-2 bg-[#f5f5f7] border-1 border-[#777777] rounded-lg		'
            placeholder='Email'
            />
           </div>


           <div className='mt-4 w-full '>
            <input type='text' className='w-full py-3 px-2 bg-[#f5f5f7] border-1 border-[#777777] rounded-lg		'
            placeholder='Password'
            />
           </div>

           <div className='mt-9 flex gap-3'>
           <div>
           <Link to='/login'>   <button className=' text-white  bg-[#232f3e] py-3 px-5 text-lg	rounded-full  hover:bg-[#febd89] hover:text-black'>Login</button></Link>
           </div>

           <div className='mb-10'>
            <Link to='/signup'><button className='text-lg	bg-[#febd89] py-3 px-5 rounded-full hover:bg-[#232f3e] hover:text-white'>Sign Up</button></Link>
           </div>
           </div>
       </div>
    </div>
  </div>
   )}
   </>
  )
}

export default Signup