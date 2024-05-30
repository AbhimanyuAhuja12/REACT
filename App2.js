import React from "react";
import ReactDOM from "react-dom/client"

// React Component
//  component composition
const Title=()=>(
<h1 className="heading"> Namaste React using jsx😊

</h1>);
 const number =1000;
const HeadingComponent =()=>(
    <div id="container">
        {/* adding component here */}
        <Title />
    
        <h1 className="heading">react functional component</h1>
        {10*20}
        {number}
        
    </div>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);


//  you can create a functional component using normal function , but use arrow function
const A =function(){
    return <h1>
        hello
    </h1>
}


// element inside component

const title =(<h1>learning react is very easy</h1>);
const HeadingComponent2 =()=>(
    <div id="container">
        {/* adding component here */}
       
        <h1 className="heading">react functional component</h1>
          {title}
        
    </div>
);
root.render(<HeadingComponent2 />);

