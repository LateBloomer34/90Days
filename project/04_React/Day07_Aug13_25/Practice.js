// import React from "react";
import ReactDOM from "react-dom/client";

let A =()=> (<h1>Hello i am react component</h1>)
let b = (<p className="ele">hello i am react element</p>); {/*  applying css using className*/ }
let color = 
    {"color":"red",
     "backgroundColor":"green",
    };
let C = ()=>(
    <>
      {<A/>}
      {b}  
        <h2 style={color}>champawat uttarakhand</h2>  {/* we can pass style as an object also*/}
        <h2 style={{backgroundColor:"pink", border:"1px solid black"}}>champawat uttarakhand</h2>  {/* we can apply style inline also*/}
    </>
)
let d = ReactDOM.createRoot(document.getElementById("root"));

d.render(<C/>);

