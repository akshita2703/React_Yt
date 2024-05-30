
import React from 'react'

const Nav = (props) => {
    console.log(props.num)
  return (
    <div className='bg-red-600'>
     <h1> {props.num} </h1>
       
    </div>
  )
}

export default Nav
