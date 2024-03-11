// 
import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      {/* <a href="/About">About</a>
      <a href="/Account">Account</a>
      <a href="">Product</a>
      <a href="/Courses">Courses</a> */}
      <Link href="/About">About</Link>
      <Link href="/Product">Product</Link>
      <Link href="/Courses">Course</Link>


      
    </div>
  )
}

export default page
