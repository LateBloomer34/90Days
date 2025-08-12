import {createElement} from "react";
import { createRoot as cr } from "react-dom/client";

// let H1 = (
//     <h1 key="him">Hello world</h1>
// );
// let H2 = (<h2 key="h2">hello 2</h2>);
// console.log(H1);
// let Pra = ()=>(
//     <div key="final">{[H1, H2]}</div>
// );
// let des = ReactDOM.createRoot(document.getElementById("root"));

// des.render(<Pra/>)

// let Ele = ()=>{
//   return (
//     <>
//     <h1>Hello himanshu</h1>
//     <ul>
//         <li>About Us</li>
//         <li>Support</li>
//         <li>Home</li>
//         </ul>
//         </>
// )};

let H1 = createElement("h2", {}, "hello himanshu");
let L1 = createElement("li", {}, "about Us");
let L2 = createElement("li", {}, "Support");
let L3 = createElement("li", {}, "Home");
let List = createElement("ul", {}, [L1, L2, L3]);
let H2 = () => (<h2>Call me</h2>);
const L4 = ()=>{
    return (<>
        <div style={{"color":"red"}}>hiii</div>
        <div><h1>Hello champawat</h1>
     <h2>what</h2></div>
    </>
  
  // <h2 style = {{"color":"red", "backgroundColor":"lightBlue"}}>hi</h2>
  // <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" width="100px" alt="not render"/>
  
)
};
let desti = cr(document.getElementsByClassName("header")[0]);

desti.render(<L4/>)
