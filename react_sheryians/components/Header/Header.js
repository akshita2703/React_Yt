import React from 'react'

const Header = (props) =>{
    console.log(props);
    return(
        <>
        <h1>{props.user}</h1>
        </>
    )
    
}
export default Header
