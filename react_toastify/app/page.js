
"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const page = () => {
  const notify=()=>{
    toast.success('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      
    });

  }

  
  return (
    <div>
      <button onClick={notify} className='bg-gray-700 text-pink-200 rounded-md px-3 py-2 m-5'> Login </button>
      <ToastContainer/>
    </div>
  )
}

export default page
