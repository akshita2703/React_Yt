/**
 * How to create this type of structure inside the react
 * <div id="parent">
 *      <div id ="children">
 *          <h1 id="h1"></h1>
 *      </div>
 * </div>
 * nested tag 
 * ReactElement(Object) => HTML(Browser Understands)
 * 
 * if you want to pass multiple children convert it into array
 */

import React from "react";
import ReactDOM from "react-dom/client";


const  parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id: "children"},
       [ React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")] // react will throw an error(each child list should have unique key)
    )
);



// const heading = React.createElement("h1",{id:"heading",xyz:"abc"},"hello world from React"); // tag object  content inside the tag
// console.log(heading);// object
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root")); // root is the place where all the react code will run 
root.render(parent);




// this  is the error i was facing Browser scripts cannot have import and exports ;


// @parcel/transformer-js: Browser scripts cannot have imports or exports.
// C:\Users\HP\Desktop\react\00_ReactByAkshaySaini\00_lect\App.js:14:1
//   13 | 
// > 14 | import React from "react";
// >    | ^^^^^^^^^^^^^^^^^^^^^^^^^^
//   15 | import ReactDOM from "react-dom";
//   16 | C:\Users\HP\Desktop\react\00_ReactByAkshaySaini\00_lect\index.html:33:5
//   32 | 
// > 33 |     <script>
// >    |     ^^^^^^^^
// > 34 |         /* react code */    // takes 3 argument    this empty place is wh
// >    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// > 35 |          /* const heading = React.createElement("h1",{},"hello world from
// >    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// > 36 |         const root = ReactDOM.createRoot(document.getElementById("root"))
// >    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// > 37 |         root.render(heading);  */
// >    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// > 38 |     </script>
// >    | ^^^^^^^^^^^^ The environment was originally created here
//   39 |     <script src="./App.js"></script>
//   40 | 