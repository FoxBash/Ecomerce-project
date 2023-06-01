import React from 'react'

function AddProduct() {
  return (
    <>
    <div className='max-w-2xl mx-auto border m-10 px-4 py-4 text-center'>
    <h1 className='p-5 font-bold capitalize text-slate-600 text-lg'>Add Product</h1>
    <form method='post' className='text-left px-4 py-4 font-semibold text-slate-600 capitalize'>
        <label for="name">Name Of product</label>
        <input type="text" id="fname" name="name" className='border h-10 px-2  text-lg w-full'/><br/>
        <label for="desc">Description</label>
        <textarea id="desc" className='border h-32 px-2  text-lg w-full'/><br/>
        <label for="price"> Original Price</label>
        <input type='text' className='border h-10 px-2  text-lg w-full'/>
        <label for="price"> Discount Price</label>
        <input type='text' className='border h-10 px-2  text-lg w-full'/>
        <label for="pic">Picture:</label>
        <input type="file" id="pic" name="pic" accept="image/*" className='border h-10 px-2  text-lg w-full'/><br/>
        <button type="submit" className='px-4 py-4 mx-auto my-5  font-bold text-white rounded-md w-full bg-orange-700'>Submit</button>
    </form>
    </div>
    
    </>
  )
}

export default AddProduct