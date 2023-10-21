import React from 'react'
import { useState, useEffect } from 'react'
import { images } from '../Images'
import {BsArrowReturnLeft} from 'react-icons/bs'
import {FaShippingFast} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'
import {AiOutlineCheck} from 'react-icons/ai'
import { categories } from '../data/data'
import { product } from '../data/data'
import ReactStars from "react-rating-stars-component";
import Marquee from "react-fast-marquee";
import { FidgetSpinner  } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

const Home = () => {
  const [loading , setLoading ] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
     setLoading(false)
    },2000)
   },[])

 const [catergory , setCatergory] = useState(categories)


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

      <div className='py-3 px-3 w-full d-flex max-lg:flex-col max-lg:gap-3 gap-3 max-sm:w-full'>
      <div className='w-3/4	max-lg:w-full'>
      <div id="carouselExampleIndicators" className="carousel slide w-full  max-lg:w-full">
      <div className="carousel-indicators ">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner ">
      
      <div className="carousel-item active" data-bs-interval="2000">
      <img src={images.carousel1} className="d-block h-96  w-full filter brightness-50" alt="..."/>
      <div className="carousel-caption  d-md-block">
      <div className='h-48 w-full	'>
      <h5 className='text-5xl mb-3.5 max-lg:text-4xl max-md:text-2xl '>Men Fashion</h5>
      <div className='mb-3.5'>
      <p className='max-lg:text-sm'>Lorem rebum magna amet lorem magna erat diam stet. Sadips </p>
      <p className='max-lg:text-sm'>duo stet amet amet ndiam elitr ipsum diam</p>
      </div>
      <div>
       <button className='border to-transparent py-2 px-4 font-semibold hover:bg-white hover:text-slate-950 max-md:text-base max-md:px-2 max-sm:text-sm	'>Shop Now</button>
      </div>
      </div>
      </div>
      </div>
      <div className="carousel-item" data-bs-interval="2000">
      <img src={images.carousel2} className="d-block h-96  w-full filter brightness-50" alt="..."/>
      <div className="carousel-caption  d-md-block">
      <div className='h-48 w-full	'>
      <h5 className='text-5xl mb-3.5 max-lg:text-4xl max-md:text-2xl max-md:text-1x1'>Women Fashion</h5>
      <div className='mb-3.5'>
      <p className='max-lg:text-sm'>Lorem rebum magna amet lorem magna erat diam stet. Sadips </p>
      <p className='max-lg:text-sm'>duo stet amet amet ndiam elitr ipsum diam</p>
      </div>
      <div>
       <button className='border to-transparent py-2 px-4 font-semibold hover:bg-white hover:text-slate-950 max-md:text-base max-md:px-2 max-sm:text-sm	'>Shop Now</button>
      </div>
      </div>
      </div>
      </div>
      <div className="carousel-item">
      <img src={images.carousel3} className="d-block  w-full h-96 filter brightness-50" alt="..."/>
      <div className="carousel-caption d-md-block">
      <div className='h-48 w-full'>
      <h5 className='text-5xl mb-3.5 max-lg:text-4xl max-md:text-2xl '>Kids Fashion</h5>
      <div className='mb-3.5'>
      <p className='max-lg:text-sm'>Lorem rebum magna amet lorem magna erat diam stet. Sadips </p>
      <p className='max-lg:text-sm'>duo stet amet amet ndiam elitr ipsum diam</p>
      </div>
      <div>
       <button className='border to-transparent py-2 px-4 font-semibold hover:bg-white hover:text-slate-950 max-md:text-base max-sm:text-sm'>Shop Now</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
      </button>
      </div>
      
      
      
      
      </div>
      <div className='w-1/4		  max-lg:w-full d-flex flex-col	justify-center	items-center gap-1	 max-xl:w-2/5	'>
      <div className='max-lg:w-full'>
      <div className='d-flex relative justify-center items-center'>
       <div className='max-lg:w-full'>
       <img src={images.offer1} className='w-full 	h-48	 brightness-50 max-lg:h-52'/>
       </div>
       <div className='absolute'>
       <p className='text-white text-center font-semibold	'>Save 20%</p>
       <h1 className='text-white text-2xl text-center font-bold	'>Special Offer</h1>
       <div className='text-center'>
       <Link to='/shop'> <button className='mt-2 bg-amber-400 py-2 px-2 text-gray-600 border-none rounded	 '>Shop Now</button></Link>
       </div>
       </div>
      </div>
      </div>
      
      <div className='max-lg:w-full'>
      <div className='d-flex relative justify-center items-center'>
       <div className='max-lg:w-full'>
       <img src={images.offer2} className='w-full 	h-48	 brightness-50	max-lg:h-52'/>
       </div>
       <div className='absolute'>
       <p className='text-white text-center font-semibold '>Save 20%</p>
       <h1 className='text-white text-2xl text-center font-bold	'>Special Offer</h1>
       <div className='text-center'>
       <Link to='/shop'>  <button className='mt-2 bg-amber-400 py-2 px-2 text-gray-600 border-none rounded	 '>Shop Now</button></Link>
       </div>
       </div>
      </div>
      </div>
      </div>
      </div>
      
      <div className='py-3 px-3 w-full '>
      <div className='grid grid-cols-4  place-items-center max-lg:grid-cols-2   max-lg:gap-5 max-md:grid-cols-1	 '>
      
      <div className='flex items-center	 gap-2 bg-slate-100		py-4 px-4 max-lg:w-2/3	max-md:w-full 	'>
       <div>
         <AiOutlineCheck className='text-4xl		text-amber-400 max-xl:text-3xl max-md:text-4xl	'/>
       </div>
       <div>
         <p className='text-2xl font-semibold max-xl:text-xl '>Quality Product</p>
         </div>
       </div>  
       <div className='flex items-center gap-2 bg-slate-100		py-4 px-4  max-lg:w-2/3	max-md:w-full'>
       <div>
         <FaShippingFast className='text-4xl 	text-amber-400 max-xl:text-3xl max-md:text-4xl'/>
       </div>
       <div>
         <p className='text-2xl font-semibold max-xl:text-xl	'>Free Shipping</p>
         </div>
       </div>  
      
       <div className='flex items-center gap-2 bg-slate-100	py-4 px-4 max-lg:w-2/3 max-md:w-full	'>
       <div>
         <BsArrowReturnLeft className='text-4xl text-amber-400 max-xl:text-3xl max-md:text-4xl'/>
       </div>
       <div>
         <p className='text-2xl font-semibold max-xl:text-xl'>14-Day Return</p>
         </div>
       </div>  
      
       <div className='flex items-center gap-2 bg-slate-100		py-4 px-4 	max-lg:w-2/3 max-md:w-full '>
         
       <div>
         <FiPhoneCall className='text-4xl	text-amber-400 max-xl:text-3xl max-md:text-4xl'/>
       </div>
       <div>
         <p className='text-2xl font-semibold max-xl:text-xl	'>24/7 Support</p>
         </div>
       </div>  
      </div>
      
      
      </div>
      
      <div className='py-3 px-3 w-full mt-20 '>
      <div className='mb-10'>
      <p className='text-3xl	font-semibold	max-sm:text-xl'>CATEGORIES</p>
      </div>
      <div className='grid grid-cols-4 gap-5  place-items-center max-lg:grid-cols-3 max-md:grid-cols-2  '>
      
      {
      catergory.map((item, index) => (
       <div key={index}>
      
          <div className='d-flex  items-center bg-white	w-64	h-28	gap-2 px-3	max-sm:w-48	'>
            <div className='relative overflow-hidden d-flex justify-start	'>
       <img src={item.image} className='w-24 max-sm:w-20	h-24	object-contain ransform transition-transform duration-300 hover:scale-125	cursor-pointer	 '/>
            </div>
            <div className=''>
             <p className='max-sm:text-sm text-right ml-1	font-semibold	'>{item.name}</p>          
          </div>
      
          </div>
      
       </div>
      ))
      }
      
      </div>
      </div>
      
      
      <div className='py-3 px-3 w-full mt-20'>
      
      <div className='mb-10'>
      <p className='text-3xl	font-semibold	max-sm:text-xl max-sm:text-xl'>FEATURED PRODUCTS</p>
      </div>
      
      <div className='grid grid-cols-4 gap-5  place-items-center max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1	 '>
       
       {
       product.map((item , index) => (
         <div className='d-flex  w-full items-center justify-center flex-col bg-white h-auto	gap-2 rounded	' key={index} >
           <div>
            <Link to={`/product/${item.id}`}><img src={item.image} className='w-60 max-lg:w-52	 h-64		max-sm:w-44	mb-10 	'/></Link> 
           </div>
      
      
         <div>
      
           <h2 className='text-2xl	 font-semibold	max-lg:text-xl max-sm:text-lg	max-sm:text-3xl	'>{item.name}</h2>
         </div>
      
         <div>
           <p className='font-medium	text-lg	max-sm:text-base	max-sm:text-xl		'><span className='font-semibold text-xl	max-lg:text-lg	 max-sm:text-base	 max-sm:text-2xl		'>PHP {item.price}</span> &nbsp; <strike> ${item.original}</strike> </p>
         </div>
         <div>
         <ReactStars
           count={5}
           size={24}
           value={item.value}
           edit={false}
           activeColor="#ffd700"
           isHalf={true}
           emptyIcon={<i className="far fa-star"></i>}
           halfIcon={<i className="fa fa-star-half-alt"></i>}
           fullIcon={<i className="fa fa-star"></i>}
         />
         </div>
         </div>
       ))
       }
      </div>
      </div>
      
      <div className='py-3 px-3 w-full mt-10	'>
      <Marquee className=' d-flex d-flex items-center justify-center bg-white	rounded	'>
      <div className='w-11/12 max-xl:w-10/12 max-md:w-8/12 max-sm:w-7/12		'>
      <img src={images.vendor1} className='rounded'/>
      </div>
      
      <div className='w-11/12	max-xl:w-10/12	max-md:w-8/12 max-sm:w-7/12		'>
      <img src={images.vendor2} className='rounded'/>
      </div>
      
      <div className='w-11/12	max-xl:w-10/12	max-lg:w-9/12	max-md:w-8/12	max-sm:w-7/12		'>
      <img src={images.vendor3} className='rounded'/>
      </div>
      
      <div className='w-11/12	max-xl:w-10/12	max-lg:w-9/12	max-md:w-8/12	max-sm:w-7/12	'>
      <img src={images.vendor4} className='rounded'/>
      </div>
      
      <div className='w-11/12	max-xl:w-10/12	max-lg:w-9/12	max-md:w-8/12 max-sm:w-7/12		'>
      <img src={images.vendor5} className='rounded'/>
      </div>
      
      <div className='w-11/12	max-xl:w-10/12	max-lg:w-9/12	max-md:w-8/12	max-sm:w-7/12	'>
      <img src={images.vendor6} className='rounded'/>
      </div>
      
      <div className='w-11/12	max-xl:w-10/12 max-lg:w-9/12	max-md:w-8/12	max-sm:w-7/12	'>
      <img src={images.vendor7} className='rounded'/>
      </div>
      
      <div className='w-11/12	max-xl:w-10/12	max-lg:w-9/12	max-md:w-8/12		max-sm:w-7/12	'>
      <img src={images.vendor8} className='rounded'/>
      </div>
      
      </Marquee>
      </div>
      
      <div className='py-4 px-3 w-full mt-20 '>
      <div className='mb-10'>
      <p className='text-3xl	font-semibold	max-sm:text-xl	'>Our Latest Blogs
      </p>
      </div>
      <div className='grid grid-cols-4 gap-3 place-items-center max-xl:grid-cols-2 w-full max-sm:grid-cols-1'>
      
      <div className='bg-white rounded-md max-md:w-11/12	w-full'>
        <div>
         <img src={images.blog1} className='w-full	h-52 	max-sm:h-40	'/>
        </div>
        <div className='ml-3 py-4'>
         <p className='text-sm	 font-medium	text-[#777777]	max-md:text-xs	'>22 JUNE, 2023</p>
        </div>
      
        <div className=' px-3'>
         <h2 className='font-bold text-lg mb-2  max-md:text-base	max-sm:text-sm	 '>A beautiful sunday morning renaissance</h2>
         <p className='mb-2 text-sm	font-medium	text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem nostrum suscipit recusandae architecto at reiciendis incidunt obcaecati unde facilis.</p>
        </div>
      
        <div className='ml-3'>
        <Link to='/blogs'><button className='py-3 mb-3 mt-2 px-4 bg-[#232f3e] font-semibold	rounded-full text-white max-md:text-sm 	'>Read More</button></Link> 
        </div>
       </div>
      
       <div className='bg-white rounded-md	max-md:w-11/12		w-full'>
        <div>
         <img src={images.blog2} className='w-full	h-52 max-sm:h-40	'/>
        </div>
        <div className='ml-3 py-4'>
         <p className='text-sm	 font-medium	text-[#777777]	max-md:text-xs'>22 JUNE, 2023</p>
        </div>
      
        <div className=' px-3'>
         <h2 className='font-bold text-lg mb-2  max-md:text-base max-sm:text-sm	'>A beautiful sunday morning renaissance</h2>
         <p className='mb-2 text-sm	font-medium	text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem nostrum suscipit recusandae architecto at reiciendis incidunt obcaecati unde facilis.</p>
        </div>
      
        <div className='ml-3'>
        <Link to='/blogs'> <button className='py-3 mb-3 mt-2 px-4 bg-[#232f3e] font-semibold	rounded-full	 text-white max-md:text-sm'>Read More</button></Link>
        </div>
       </div>
      
       <div className='bg-white rounded-md	max-md:w-11/12		w-full'>
        <div>
         <img src={images.blog3} className='w-full	h-52 max-sm:h-40	'/>
        </div>
        <div className='ml-3 py-4'>
         <p className='text-sm	 font-medium	text-[#777777] max-md:text-xs	'>22 JUNE, 2023</p>
        </div>
      
        <div className=' px-3'>
         <h2 className='font-bold text-lg mb-2  max-md:text-base max-sm:text-sm	'>A beautiful sunday morning renaissance</h2>
         <p className='mb-2 text-sm	font-medium	text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem nostrum suscipit recusandae architecto at reiciendis incidunt obcaecati unde facilis.</p>
        </div>
      
        <div className='ml-3'>
        <Link to='/blogs'> <button className='py-3 mb-3 mt-2 px-4 bg-[#232f3e] font-semibold	rounded-full	 text-white max-md:text-sm max-md:text-sm'>Read More</button></Link>
        </div>
       </div>
      
       <div className='bg-white rounded-md	max-md:w-11/12		w-full'>
        <div>
         <img src={images.blog4} className='w-full	h-52 max-sm:h-40	'/>
        </div>
        <div className='ml-3 py-4'>
         <p className='text-sm	 font-medium	text-[#777777] max-md:text-xs	'>22 JUNE, 2023</p>
        </div>
      
        <div className=' px-3'>
         <h2 className='font-bold text-lg mb-2 max-md:text-base max-sm:text-sm	 '>A beautiful sunday morning renaissance</h2>
         <p className='mb-2 text-sm	font-medium	text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem nostrum suscipit recusandae architecto at reiciendis incidunt obcaecati unde facilis.</p>
        </div>
      
        <div className='ml-3'>
        <Link to='/blogs'> <button className='py-3 mb-3 mt-2 px-4 bg-[#232f3e] font-semibold	rounded-full	 text-white max-md:text-sm'>Read More</button></Link>
        </div>
       </div>
      
      </div>
      </div>
      
      
      
      
      
      </div>
    )}

 
    </>
    

  )
}

export default Home