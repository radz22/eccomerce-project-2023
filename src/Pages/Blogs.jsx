import React from 'react'
import { useState, useEffect } from 'react'
import { FidgetSpinner  } from 'react-loader-spinner'
import { Link } from 'react-router-dom'
import { images } from '../Images'

const Blogs = () => {

  const [loading , setLoading ] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
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
        <div className=' bg-[#e2e1e1] py-3 px-3 w-full' > 
      
        <div className='d-flex gap-10'>
            <div className='w-1/5	d-flex flex-col justify-center bg-white py-3 px-3 rounded-md h-fit	max-lg:w-1/4	'>
             <div>
              <h2 className='text-left text-lg font-semibold max-md:text-sm max-sm:text-xs		'>Find By Categories</h2>
             </div>
             <div className='mt-3 flex flex-col gap-2'>
              <Link to='/'><p className='font-light max-md:text-sm '>Home</p></Link>
            <Link to='/shop'><p className='font-light max-md:text-sm'>Shop</p></Link>
             <Link to='/blogs'> <p className='font-light max-md:text-sm	'>Blogs</p></Link>
             <Link to='/contact'> <p className='font-light max-md:text-sm	'>Contact</p></Link>
             <Link to='/ask'><p className='font-light	max-md:text-sm'>Ask</p> </Link>
             </div>
            </div>

 <div className='w-4/5 flex flex-col gap-2 max-lg:w-3/4	'>
     <div className='grid grid-cols-2 place-items-center gap-4 max-lg:grid-cols-1'>


      <div className='bg-white w-full rounded-md	'>
        <div>
          <img src={images.blog1} className='w-full	h-72	'/>
        </div>
        <div className='px-2'>
          <p className='text-sm	font-normal	text-[#777777] mb-3 mt-1 '>22 JUNE, 2023</p>
          <h2 className='mb-2 text-lg font-semibold		'>A beautiful sunday morning renaissance</h2>
          <p className='text-sm font-normal text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem nostrum suscipit recusandae architecto at reiciendis incidunt obcaecati unde facilis.</p>
          <div className='mt-2 '>
          <button className='py-3 mb-3 mt-2 px-4 bg-[#232f3e] font-semibold	rounded-full	 text-white max-md:text-sm'>Read More</button>
          </div>
        </div>
      </div>

      <div className='bg-white w-full rounded-md	'>
        <div>
          <img src={images.blog2} className='w-full	h-72	'/>
        </div>
        <div className='px-2'>
          <p className='text-sm	font-normal	text-[#777777] mb-3 mt-1 '>22 JUNE, 2023</p>
          <h2 className='mb-2 text-lg font-semibold		'>A beautiful sunday morning renaissance</h2>
          <p className='text-sm font-normal text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem nostrum suscipit recusandae architecto at reiciendis incidunt obcaecati unde facilis.</p>
          <div className='mt-2 '>
          <button className='py-3 mb-3 mt-2 px-4 bg-[#232f3e] font-semibold	rounded-full	 text-white max-md:text-sm'>Read More</button>
          </div>
        </div>
      </div>


      <div className='bg-white w-full rounded-md	'>
        <div>
          <img src={images.blog3} className='w-full	h-72	'/>
        </div>
        <div className='px-2'>
          <p className='text-sm	font-normal	text-[#777777] mb-3 mt-1 '>22 JUNE, 2023</p>
          <h2 className='mb-2 text-lg font-semibold		'>A beautiful sunday morning renaissance</h2>
          <p className='text-sm font-normal text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem nostrum suscipit recusandae architecto at reiciendis incidunt obcaecati unde facilis.</p>
          <div className='mt-2 '>
          <button className='py-3 mb-3 mt-2 px-4 bg-[#232f3e] font-semibold	rounded-full	 text-white max-md:text-sm'>Read More</button>
          </div>
        </div>
      </div>


      <div className='bg-white w-full rounded-md	'>
        <div>
          <img src={images.blog4} className='w-full	h-72	'/>
        </div>
        <div className='px-2'>
          <p className='text-sm	font-normal	text-[#777777] mb-3 mt-1 '>22 JUNE, 2023</p>
          <h2 className='mb-2 text-lg font-semibold		'>A beautiful sunday morning renaissance</h2>
          <p className='text-sm font-normal text-[#777777]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam exercitationem nostrum suscipit recusandae architecto at reiciendis incidunt obcaecati unde facilis.</p>
          <div className='mt-2 '>
          <button className='py-3 mb-3 mt-2 px-4 bg-[#232f3e] font-semibold	rounded-full	 text-white max-md:text-sm'>Read More</button>
          </div>
        </div>
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

export default Blogs