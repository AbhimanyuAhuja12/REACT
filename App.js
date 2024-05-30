
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




// const parent =React.createElement("div",{ id : 'parent'},
//     [React.createElement("div",{ id : 'child'},
//         [React.createElement("h1",{},"I am a H1 tag 😅"),
//         React.createElement("h2",{},"this is a H2 tag") ]
//     ),
//     React.createElement("div",{ id : 'child'},
//         [React.createElement("h1",{},"I am a H1 tag"),
//         React.createElement("h2",{},"this is a H2 tag") ])
//     ]
// );
// const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);
// console.log(parent);


// React Element
// React.createElement =>js object => when we renders it to dom then it becomes  a html element

const heading = React.createElement("h1",{id:"heading"},"Namaste-React");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
console.log(typeof heading);


// JSX heading
// jsx (transpiled before it reaches the js engine)
// JSX => babel transpiles it to React.createElement => ReactElement-js object => HTML element

const jsxheading =<h1 id="heading" className="head">Namaste react using jsx</h1>
console.log(typeof jsxheading);
root.render(jsxheading);



// React component(everything is a component in react)
// there are two types of component -class based component and functional component

// class based component is old way

// react functional component(function that returns  a jsx code)
const HeadingComponent =()=>{
    return <h1> Namaste react component</h1>
};
root.render(<HeadingComponent />) ;