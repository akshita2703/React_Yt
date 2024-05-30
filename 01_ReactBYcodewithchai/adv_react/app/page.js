
"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { Link } from "next";
import Header from '@/app/components/Header'
const page = () => {
  const[users,setUsers]=useState([])
  const getUsers = async()=>{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/")
    setUsers(data)
    
  }
useEffect(()=>{
    getUsers()
  },[])
 
  return (
  <>
  
    <button onClick={getUsers} className='bg-red-700 text-white px-4 py-3 rounded-md'> Get data</button>
    <div className='p-20 bg-slate-100 mt-5' > 
      <ul className='justify-between  text-red-800'>
        {users.map((e)=>{
          return <li>{e.username} - {e.phone} --- <a href={`/${e.id}`}>Explore</a> </li>
        })}
      </ul>

    </div>
  </>
  )
}

export default page
