
import React from "react";
import ReactDOM from "react-dom/client"
// const heading =React.createElement("h1",{id: "heading"},"hello world from react");

// console.log(heading); // object 

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);




// nested html elements by react 
// nested div

{/* <div id ="parent">
    <div id="child">
        <h1>
            I am a h1 tag
        </h1>
    </div>
</div> */}

const parent =React.createElement("div",{ id : 'parent'},
    [React.createElement("div",{ id : 'child'},
        [React.createElement("h1",{},"I am a H1 tag 😅"),
        React.createElement("h2",{},"this is a H2 tag") ]
    ),
    React.createElement("div",{ id : 'child'},
        [React.createElement("h1",{},"I am a H1 tag"),
        React.createElement("h2",{},"this is a H2 tag") ])
    ]
);
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);