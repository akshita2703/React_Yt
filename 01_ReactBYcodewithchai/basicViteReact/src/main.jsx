import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}
const anotherELement=(
<a href="https://google.com" target="_blank"> visit google </a>
)

//according to react
const reactElement=React.createElement(
  'a',// tagname
  {href:'https://google.com',target:'_blank'},
  'click me'
)



ReactDOM.createRoot(document.getElementById('root')).render(

    // reactElement
     <App/>
 
)
