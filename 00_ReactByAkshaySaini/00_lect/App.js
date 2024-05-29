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