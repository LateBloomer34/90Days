import React from "react";
import ReactDOM from "react-dom/client";


// let H1 =()=> (
//     <h1 key = "one" className="first">hello</h1>
// )

let H1 = ()=> 
    (<h1 className="first">hello</h1>);


let H2 = (
    <h1 key = "two"  className="second">world hello</h1>
)
// let h = ([H1,H2]);
let dest = ReactDOM.createRoot(document.getElementById("root"));

dest.render([<H1 key = "one" />, H2])


