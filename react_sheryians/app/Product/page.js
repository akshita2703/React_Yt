 "use client"
import axios from 'axios'
import React, { useState } from 'react'


const Product = () => {
    const[Images, setImages]=useState([])
    const getImages = async()=>{
        try {
            const response = await axios.get("https://picsum.photos/v2/list")
            console.log(response);
            const data = response.data;
            setImages(data);
            console.log(Images);
        } catch (error) {
            console.error("Error")
            
        }
        
         
    }
  return (
    <div>
      <h1>Product</h1>
      <button onClick={getImages} className='px-4 py-4'>get image</button>
      <div className='p-10'>
        {Images.map((elem,i)=>{
           return <img
            key={i}
            src={elem.download_url}
            width={300}
            height={300}
            className='m-10  rounded inline-block gap-2 pa -10'

            />
        })}

      </div>
    </div>
  )
}

export default Product
