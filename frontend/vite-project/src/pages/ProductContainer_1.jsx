import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const ProductContainer_1 = () => {
      const [products,setProducts] = useState([]);

    const getProducts = async() =>{
        try {
             const token = localStorage.getItem('token')  
             
             const result = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/Productlist`,{
             headers:{
                Authorization: `Bearer ${token}`
             }

             }) 
             setProducts(result.data);
             
        } catch (error) {

            console.error(error.message);
        }
  
    }
  return (
      <div className='p-4 shadow-xl '>
        <h1 className=" text-center mt-14 text-4xl font-medium mb-4">Electronics deals</h1>

<div className=" mt-4 p-2 rounded-lg bg-white  ">
  <button
    onClick={getProducts}
    className=" block mx-auto mt-4 px-4 py-2  bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition cursor-pointer"
  >
    View Products 
  </button>

  <div className="grid grid-cols-2 md:grid-cols-6 gap-4 pt-20 " >
    {products.map((product) => (
        <div
      
        key={product._id}
        className={` flex flex-col items-center justify-between text-lg font-medium  "
        }`}
      >
    <img src={product.productImage} alt={product.productName}  className='w-[140px] h-[140px] object-contain'/>
    <div className='p-4'>
      <h3 className="text-center text-xl">{product.productName}</h3> 
    <p className='text-center font-medium text-green-600'>Rs:{product.productPrice}</p>
    </div>
    
      
      </div>
    ))}
  </div>



  </div>
  
      </div>
  )
}

export default ProductContainer_1
