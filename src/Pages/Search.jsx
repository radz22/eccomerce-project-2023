import React from 'react'
import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { ThreeDots  } from 'react-loader-spinner'

const Search = ({onSearch}) => {
    
    const [searchItem , setSearchItem] = useState('')

    const handleSearch = (e) => {
        setSearchItem(e.target.value)
        onSearch(e.target.value)
    }
  return (
    <div className='flex justify-center items-center w-full mt-5'>
    <div className='w-2/4 relative	max-md:w-3/4	'>
    <input 
    value={searchItem}
    onChange={handleSearch}
    placeholder='Search...'
    type='text' 
    className='w-full px-3 py-3'
    
    />
    </div>
    <div className='bg-amber-500 py-3 px-3 '>
     <p className='text-2xl text-white'><AiOutlineSearch/></p>
    </div>
   </div>
  )
}

export default Search