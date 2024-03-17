"use client"
import React, { useContext } from 'react'
import Nav from "@/components/Nav"
import { MyContext } from '@/Helper/Context'

const Header = (props) => {
    // console.log(props.num)
    const user = useContext(MyContext)

  return (
    <div>
      <h1 className='bg-green-400 p-6'>
      {user}
      
      </h1>
     
    </div>
  )
}

export default Header
