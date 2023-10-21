import React, { useEffect, useState } from 'react'
import {LuSend} from 'react-icons/lu'
import { ThreeDots  } from 'react-loader-spinner'
import {MdDelete} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GrFormClose} from 'react-icons/gr'
import { FidgetSpinner  } from 'react-loader-spinner'

const Ask = () => {

   const [message , setMessage] = useState('')
   const [paragraph, setParagraph] = useState([])
   const [loading , setLoading ] = useState(false)
   const [array, setArray] = useState([])
   const [navbar, setNavbar] = useState(false)
   const [loadings , setLoadings ] = useState(false)


   useEffect(() => {
    setLoadings(true)
    setTimeout(() => {
     setLoadings(false)
    },2000)
   },[])
   
  const handleDelete = (index) => {
   const deleteItems =  array.filter((_, i) => i !== index);
   setArray(deleteItems)
  }

     
   const handleResult = () => {
   
    setArray([...array, message])
    
    if(message.toLowerCase().includes('offer')){
        
        setTimeout(() => {
            setLoading(false)
            }, 1000);
            setLoading(true)
            
          setParagraph("Answer: items like Women Dress, Shoes, Gadgets, etc.")
    }else if(message.toLowerCase().includes('payment accept')){
        setTimeout(() => {
            setLoading(false)
            }, 1000);
            setLoading(true)
          setParagraph("Answer: Gcash || Paypal || BDO")
    }else if(message.toLowerCase().includes('payment')){
        setTimeout(() => {
            setLoading(false)
            }, 1000);
            setLoading(true)
          setParagraph("Answer: Gcash || Paypal || BDO")
    }else if(message.toLowerCase().includes('developer ')){
        setTimeout(() => {
            setLoading(false)
            }, 1000);
            setLoading(true)
          setParagraph("Answer: Call Me Santy")
    }else if(message.toLowerCase().includes('refund')){
        setTimeout(() => {
            setLoading(false)
            }, 1000);
            setLoading(true)
          setParagraph("Answer: Sorry don't Accept Refund  right now")
        }else if(message.toLowerCase().includes('what language')){
          setTimeout(() => {
              setLoading(false)
              }, 1000);
              setLoading(true)
            setParagraph("Answer: Reactjs Tailwind and Bootstrap")}
    
            else if(message.toLowerCase().includes('shipping costs')){
              setTimeout(() => {
                  setLoading(false)
                  }, 1000);
                  setLoading(true)
                setParagraph("Answer: its depends in your Items")}
    
                else if(message.toLowerCase().includes('create account')){
                  setTimeout(() => {
                      setLoading(false)
                      }, 1000);
                      setLoading(true)
                    setParagraph("Answer: sorry right now dont accept create account no database moreon frontend ")}
            else{
        setTimeout(() => {
            setLoading(false)
            }, 1000);
            setLoading(true)
          setParagraph("Answer: Opps! sorry data is Limited Thankyou")
    }
    
    
   }


   const handleClick = () => {
    setNavbar(!navbar)
   }


  return (
    <>
    {loadings ? (
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
        <div className='py-4 px-3 h-screen w-full bg-[#e2e1e1] flex gap-3'>
        <div className='w-1/5	'>
           <div className='w-full '>
               <div className=' hidden flex justify-end max-lg:block'>
              <button onClick={handleClick}> {navbar ? <GrFormClose className='text-lg	'/>  : <GiHamburgerMenu/>}</button>
               </div>
           {
               navbar && (
                  <div className='flex flex-col'>
                 {
               array.map((item, index) => (
                   <div className='flex justify-between items-center bg-white mt-2 py-2 px-2 rounded max-lg:block  max-lg:w-fit				 '>
                       <div>
                       <p className='text-lg rounded text-sm	'>{item}</p>
                       </div>
                       <div>
                        <button onClick={() => handleDelete(index)}><MdDelete/></button>
                       </div>
                   </div>
               ))
           }
                  </div>
               )
           }
           </div>
          <div className=''>
           
           {
               array.map((item, index) => (
                   <div className='flex justify-between items-center bg-white mt-2 py-2 px-2 rounded max-lg:hidden  	'>
                       <p className=' text-lg	rounded'>{item}</p>
                       <div>
                        <button onClick={() => handleDelete(index)}><MdDelete/></button>
                       </div>
                   </div>
               ))
           }
          </div>
        </div>



        <div className='w-4/5 max-lg:w-full'>
         
         <div className='w-11/12 h-96 bg-white	'> 
          
           <div className='py-3'>
           <h2 className='text-center text-3xl font-semibold'>Ask</h2>
           </div>

           
           {loading ? (
           <div className='flex justify-center items-center'>
               <ThreeDots 
height="120" 
width="120" 
radius="9"
color="#4fa94d" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
/>
           </div>
           ): (
               <div className='w-full'>
               <p className='px-3'>{paragraph}</p>
            </div> 
           )}
         

           </div>

          <div className='flex justify-center items-center mt-3  max-lg:w-full  max-lg:justify-start'>
         
          <div className='w-1/2  max-lg:w-4/5 '>
             <input
             className='w-full px-3 py-3 rounded	' 
             placeholder='Send a message'
           value={message} onChange={(e) => setMessage(e.target.value)}
             type='text'
            />
           </div>
           <div className='bg-white  h-14	flex justify-center items-center rounded px-3 '>
           <button onClick={handleResult}><LuSend className='text-3xl'/></button>
           </div>
       

          </div>
        </div>
   </div>
    )}
    </>
   
  )
}

export default Ask