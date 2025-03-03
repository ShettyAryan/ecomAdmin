import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {

const [products, setProducts] = useState([])

const getProducts = () =>{
    fetch("http://localhost:4000/products")
    .then(response =>{
        if(response.ok){
            return response.json()
        }

        throw new Error()
    })

    .then(data=>{
        setProducts(data)
    })
    .catch(error=>{
        alert("Unable to get data") 
    })
}

useEffect(getProducts,[])

  return (
    <div className='w-full h-screen pt-16'>
        <h1 className='text-center text-3xl font-bold'>Products</h1>
        <div className='flex flex-row w-70 items-center justify-evenly mt-8 ml-8 gap-2'>
            <Link className='w-35 h-10 bg-blue-500 flex items-center justify-center rounded-[8px]' to="/admin/products/create">
               <button className='text-center'>
                 Create Product                   
               </button>
            </Link>
            <button className='bg-slate-300 w-20 h-10 rounded-[8px]' onClick={getProducts}>Refresh</button>
        </div>

        <table className="w-full bg-white border border-gray-300 shadow-md rounded-lg mt-10 ">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Name</th>
            <th className="py-2 px-4 border">Brand</th>
            <th className="py-2 px-4 border">Category</th>
            <th className="py-2 px-4 border">Price</th>
            <th className="py-2 px-4 border">Image</th>
            <th className="py-2 px-4 border">Created At</th>
            <th className="py-2 px-4 border">Action</th>
          </tr>
        </thead>
        <tbody>
             {
                products.map((product, index)=>{
                    return(
                        <tr key={index}>
                            <td className='text-center'>{product.id}</td>
                            <td className='text-center'>{product.name}</td>
                            <td className='text-center'>{product.brand}</td>
                            <td className='text-center'>{product.category}</td>
                            <td className='text-center'>{product.price}</td>
                            <td className='text-center'><img src={"http://localhost:4000/images/"+ product.imageFilename} alt="..." width={100} /></td>
                            <td className='text-center'>{product.createdAt.slice(0,10)}</td>
                            <td className='whitespace-nowrap flex mt-8'>
                                <div className='w-full flex flex-row items-center justify-center gap-3 '>
                                <button className='w-[25%] h-7 bg-amber-300 rounded-md '><Link to={"/admin/products/edit/" + product.id}>Edit</Link></button>
                                <button className='w-[30%] h-7 bg-amber-300 rounded-md'>Delete</button>
                                </div>
                            </td>
                        </tr>
                    )

                })
             }

        </tbody>

        </table>



    </div>  
  )
}

export default ProductList