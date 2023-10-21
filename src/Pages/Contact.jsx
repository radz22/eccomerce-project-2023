import React from 'react'
import {IoLocationSharp} from 'react-icons/io5'
import {CgMail} from 'react-icons/cg'
import {IoCall} from 'react-icons/io5'
import { useState, useEffect } from 'react'
import { FidgetSpinner  } from 'react-loader-spinner'

const Contact = () => {
const [name , setName] = useState('')
const [email , setEmail] = useState('')
const [subject , setSubject] = useState('')
const [message , setMessage] = useState('')
const [loading , setLoading ] = useState(false)

useEffect(() => {
  setLoading(true)
  setTimeout(() => {
   setLoading(false)
  },2000)
 },[])

const handleSubmit = () => {
  alert(`
  Sucess!
  
  Name: ${name} 
  Email: ${email}
  Subject: ${subject} 
  Message: ${message}`)
}

  return (
    <div className='bg-[#e2e1e1] py-4 px-3 h-screen w-full max-lg:h-auto	'>
     {loading ? (
      <div className='w-full flex justify-center	h-screen items-center		' >
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
      <>
       <div className='mb-10'>
      
      <p className='text-4xl	font-semibold	'>Contact</p>
    </div>
    <div className='grid grid-cols-2 gap-5 place-items-center max-lg:grid-cols-1'>
     <div className='w-full d-flex flex-col gap-3 bg-white px-3 py-3'>
        <div className='mt-6'>
          <input 
           value={name}
           onChange={(e) => setName(e.target.value)}
          
          type='text' className='w-full px-3 py-2 border-2 border-[#bbbbbb]' placeholder='Your Name'/>
        </div>

        <div>
          <input type='text' 
         value={email}
         onChange={(e) => setEmail(e.target.value)}
          className='w-full px-3 py-2 border-2 border-[#bbbbbb]' placeholder='Your Email'/>
        </div>

        <div>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)} 
          type='text' className='w-full px-3 py-2 border-2 border-[#bbbbbb]' placeholder='Subject'/>
        </div>

        <div>

          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          placeholder='Message' className='w-full px-3 py-2  h-44	 border-2 border-[#bbbbbb]'></textarea>
        </div>

        <div className='mt-6  mb-6'>
          <button className='bg-amber-400	py-2 px-4' onClick={handleSubmit}>Send Message</button>
        </div>
     </div>

     <div className='w-full d-flex justify-center items-center flex-col gap-5 '>
      
       <div className='w-4/5 px-4 d-flex justify-center items-center bg-white h-72	max-lg:w-full '>
      
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123479.92826886488!2d120.99583933456455!3d14.726847978888474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b03042213471%3A0xb79388d00db4b7fd!2sSt.%20Clare%20College%20of%20Caloocan!5e0!3m2!1sen!2sph!4v1697301737267!5m2!1sen!2sph"
        height='260'
        className='border-0 w-full	'
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">
        
        </iframe>
       </div>

       <div className='w-4/5 px-4 d-flex justify-start items-start bg-white h-44	flex-col max-lg:w-full '>
        
       <div className='d-flex  items-center gap-1 mt-4'>
          <div>
          <IoLocationSharp className='text-yellow-400 text-2xl	'/>
          </div>
          <div>
          <p className='text-slate-500 '>St. Clare College of Caloocan</p>
        
         </div>
        </div>

       <div className='d-flex items-center gap-1 mt-3'>
          <div>
          <CgMail className='text-yellow-400 text-2xl	'/>
          </div>
          <div>
          <p className='text-slate-500'>mail@domain.com</p>
        
         </div>
        </div>

        <div className='d-flex items-center gap-1 mt-3'>
          <div>
          <IoCall className='text-yellow-400 text-2xl	'/>
          </div>
          <div>
          <p className='text-slate-500'>+012 345 67890</p>
        
         </div>
        </div>

       </div>
     </div>
    </div>
      </>
     )}
    </div>
  )
}

export default Contact