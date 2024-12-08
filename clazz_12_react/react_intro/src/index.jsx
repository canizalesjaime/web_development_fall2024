// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import React from "react";
import ReactDOM from "react-dom";

//params: 1-what to show,2-where tp show
// ReactDOM.render(<div>
//                     <h1>My List</h1>
//                     <ul>
//                         <li>Apple</li>
//                         <li>Banana</li>
//                         <li>Carrot</li>
//                     </ul>
//                 </div>,
//                 document.querySelector("#root"));


let name = "Jaime";
let imag="https://picsum.photos/200";
let customStyle = 
{
    color:"red",
    fontSize:"20px",
    border: "1px solid black"
};


let temp = new Date().getHours();
let col = "blue";
if(temp < 12)
{
    temp="Good Morning";
    col="red";
}
else if (temp < 19)
{
    temp="Good Afternoon";
    col="green;"
} 
else temp = "Good Night";

customStyle.color="purple";
ReactDOM.render(<div>
    <h1>my name is {name}</h1>
    <p style={customStyle}>my lucky number is {Math.floor(Math.random()*10)}</p>
    <p className="heading" style={{color:col}}>{temp}</p>
    <img src={imag} />
    <footer>Copyright {new Date().getFullYear()}</footer>
    </div>,document.querySelector("#root"));

