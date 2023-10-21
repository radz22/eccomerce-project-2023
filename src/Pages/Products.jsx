import React, { useState, useEffect } from 'react'
import {  product } from '../data/data'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import {AiOutlineSmile, AiFillHeart} from 'react-icons/ai'
import {BiSad} from 'react-icons/bi'
import {BsEmojiAngry} from 'react-icons/bs'
import { FidgetSpinner  } from 'react-loader-spinner'
import ReactImageMagnify from 'react-image-magnify';


const Products = () => {
    const [inputUser, setInputUser] = useState("")
   const [comment, setComment] = useState([])
   
    const {id} = useParams();
   
  const handleComments = (emojie) => {
    setComment([...comment, emojie , inputUser])
    
  } 

  const [loading , setLoading ] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
     setLoading(false)
    },1000)
   },[])


    const products = product.find((p) => p.id == id);
    
    const image = {
      src: products.image
     
    };
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
        <div className='bg-[#e2e1e1]'>
        
      <div className='py-3 px-3 w-full bg-white'>
      <div className='flex gap-10'>
      <div className='hidden max-md:block  w-full	'>
         <div className='flex justify-center items-center'>
         <img src={products.image} className='h-60'/>
         </div>
       
      </div>
        <div className='max-md:hidden w-2/5		'>
        <ReactImageMagnify {...{
        smallImage: {
          alt: 'Magnified Image',
          isFluidWidth: true,
          src: image.src,
         
          
        },
        largeImage: {
          src: image.src,
          width: 1100,
          height: 1200
        }
      }} /></div>
      </div>

      <div className='flex flex-col gap-2 ml-40 mt-5 max-md:justify-center max-md:items-center max-md:ml-0 '>
     <h1 className='text-4xl	font-semibold	max-md:text-3xl	'>{products.name}</h1>
     <div>
         <ReactStars
           count={5}
           size={24}
           value={products.value}
           edit={false}
           activeColor="#ffd700"
           isHalf={true}
           emptyIcon={<i className="far fa-star"></i>}
           halfIcon={<i className="fa fa-star-half-alt"></i>}
           fullIcon={<i className="fa fa-star"></i>}
         />
         </div>
    <div className='mt-4'>
    <p className='font-medium	text-lg	max-sm:text-base'><span className='font-semibold text-xl	max-lg:text-lg	 max-sm:text-base		'>Price: PHP {products.price}</span> &nbsp;<strike>${products.original}</strike> </p>
    </div>

  
    

        </div>
      </div>



    <div className=' px-3 py-3'>
        <h2 className='text-lg	font-semibold	'>Description</h2>
        <div className='bg-white px-2 py-3 mt-2 w-full'>
        <p className='font-medium	text-sm	'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ducimus praesentium tempore commodi doloremque quod placeat totam, error et ut, fuga quae ipsum, rem alias aliquid velit beatae deleniti numquam.</p>
        </div>
    </div>

      <div className='w-full py-3 px-3 bg-white'>
         <div className='mb-3 '>
            <h2 className=''>Customer Review</h2>
         </div>
         <div className='mb-3 border-1  border-b-[#bbbbbb]'>
            <p className=''>Write a Review</p>
           
         </div>
          
         <div>
        
            <div className='h-96	 '>
            {
                comment.map((items) => (
                    <>
                    <div>

                        <p className='text-lg font-semibold	'>{items}</p>
                       
                    </div>
                    </>
                ))
            }
            </div>
          <div className='w-full py-4 px-4'>
          <div className='flex gap-2 mb-3'>
            
            <div className='flex flex-col justify-center items-center'>
            <h2 onClick={() => handleComments(<AiOutlineSmile className='text-3xl text-yellow-500 '/>)} className='text-center'><AiOutlineSmile className='text-5xl text-yellow-500 cursor-pointer	'/>Smile</h2>

            </div>

            <div className='flex flex-col justify-center items-center'>
            <h2 onClick={() => handleComments(<BiSad className='text-3xl text-yellow-500'/>)} className='text-center'><BiSad className='text-5xl text-yellow-500 cursor-pointer	'/>Sad</h2>
            </div>

            <div className='flex flex-col justify-center items-center'>
            <h2 onClick={() => handleComments(<BsEmojiAngry className='text-3xl	 text-red-500	'/>)} className='text-center'><BsEmojiAngry className='text-5xl text-red-500	cursor-pointer'/>Angry</h2>
            </div>

            <div className='flex flex-col justify-center items-center'>
            <h2 onClick={() => handleComments(<AiFillHeart className='text-3xl		 text-red-400' />)} className='text-center'><AiFillHeart className='text-5xl text-red-400 cursor-pointer'/>Heart</h2>
            </div>
          </div>


            <input type='text'
            value={inputUser}
            onChange={(e) => setInputUser(e.target.value)}
            className='w-full py-3 px-3 border-2 border-[#bbbbbb] h-20	' placeholder='comments 	'/>
          </div>
          
         </div>
      </div>
    </div>
    )}
     </>
    
  )
}

export default Products