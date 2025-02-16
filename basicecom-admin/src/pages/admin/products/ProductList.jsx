import React from 'react'

const ProductList = () => {
  return (
    <div className='w-screen'>
        <h1 className='pl-[45vw] text-3xl'>Products Available </h1>
      <div className=' pl-20 flex items-center w-[100%] h-10 gap-5'>
        <button className='rounded-md bg-blue-400 w-30 h-8 hover:border border-black '>Create Product</button>
        <button className='rounded-md w-30 h-8 border border-black '>Refresh</button>
      </div>

      <div className='h-250'>

      </div>

    </div>
  )
}

export default ProductList