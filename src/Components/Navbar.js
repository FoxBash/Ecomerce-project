import React from 'react'
import cart from './cart.png'
import  menu from './menu.png'
import account from './templatepic2.jpg'

function Navbar() {
  return (
    <div className=' bg-green-900  flex w-full space-x-40 lg:justify-between h-fit  shadow-md'>
      <h1 className=" text-orange-400 h-8 mt-5 ml-5 font-bold capitalize lg:text-4xl md:text-lg sm:text-sm">FOXBASH</h1>
      
      <div className='flex flex-nowrap'>
      <input type='search'
       placeholder='Search products' 
      className='placeholder:italic placeholder:text-center text-slate-400 hidden lg:block font-medium px-4 capitalize mt-4   rounded-md mr-5 h-10'/> 
        <div className='flex'>
        <p className='my-4  text-white px-2 py-2 bg-orange-700 flex rounded-md'>
              <img src={account} 
              className='w-5 h-5 mx-1 mt-1 '/>Account</p>
      <p className=' mt-1 text-orange-700 mr-5  font-bold h-4 w-4 '>0</p>
      </div>
        
      
      </div>
    </div>
  )
}

export default Navbar