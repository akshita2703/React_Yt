"use client"
import React, { useContext, useState } from 'react'
import Header from "@/components/Header"
import { MyContext } from '@/Helper/Context'

const page = () => {
  const user = useContext(MyContext)
  return (
    <div>
      <h1>this is homepage</h1>
      
      <Header/>
    </div>
  )
}

export default page
