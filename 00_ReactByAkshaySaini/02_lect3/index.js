import React from "react";
import ReactDOM from "react-dom/client";

// React Element 
//React.createElement --> Object --> HTMLElement(render)
// const heading = React.createElement("hi",{id:"heading"},"Nameste React");
//JSX - is not html inside js, It is html or Xml like syntax 
const headingjsx = <h1 className="root">Namaste React</h1>;  // this is not the pure js--- js cannot read this code 
//so how this code is working , it's all working because of PARCEL(hehe).(parcel is beast)
// this code is transpiled(converted) before it goes to js engine 
// parcel does not do it by itself it gives the responsibilty to babel (babel transpiled the code )---parcel manage the function 

// JSX --> React.createElement --> Reactelement - js object --> HTMLELement(Render)


//if you have to give attribute in js you have to write in js
// babel need to understand where jsx is starting or ending , so wrap in ()





// React Component 
// class based component  -- older version
// function based component -- new way of writing code

// React funtional component  -- name it with a capital letter

// it is js component which return some jsx component

// cool way 
const fun1 =()=> true;

// old way
const fun = ()=>{
    return true;
}
// both func are same
const number = 100;
//const data = api.getData();  // getting data from some api  , let's consider it is mallicious 
const HeadingjsxEle = ()=>{
    
    return ( 
    <h1> 
        {/* //{data}  jsx wont blindly run it will sanitize your data (spm )*/}   
        {fun()} 
        {number}
        returning some react element 
    </h1>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingjsxEle />);


// install extension -- better comment

// read about spm 

// component compositon -- writing react component inside the react component 
// https://babeljs.io/   --- babel documentation 