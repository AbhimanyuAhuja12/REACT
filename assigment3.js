import React from "react";
import ReactDOM from "react-dom/client"

// -ques1:- Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")

const header =React.createElement("div",{className:"title"},[
    React.createElement("h1",{},"1st heading"),
    React.createElement("h1",{},"2nd heading"),
    React.createElement("h1",{},"3rd heading")
]);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(header);


// Ques2:-   - Create the `same element using JSX`

const header2 =(<div className="title">
    <h1 id="first">first heading</h1>
    <h1 id="second">second heading</h1>
    <h1>third heading</h1>
</div>);
root.render(header2);


// Ques3:-  - Create a `functional component of the same with JSX`

const Header =()=>(<div className="title">
<h1>first heading through component</h1>
<h1>second heading</h1>
<h1>third heading</h1>
</div>);
// root.render(<Header />);



// Ques4:-  - `Composition of Component` (Add a component inside another)

const Title =()=>(<h1>hello world</h1>);
const Header2 =()=>(<div className="title">
<h1>first heading through component</h1>
{<Title />};
<h1>second heading</h1>
<h1>third heading</h1>
</div>);
// root.render(<Header2 />);

/*Ques5:- - Create a `Header Component` from scratch using `Functional Component` with JSX
- Add a `Logo on Left`
- Add a `search bar in middle`
- Add `User icon on right`
- Add `CSS to make it look nice`*/

const MainHeader =()=>(
    <div id="header">

    <div id="logo-left" className="logo"><img src="https://i.pinimg.com/originals/d2/82/c8/d282c8b0f4af7e8354081882ea4ae191.png"></img></div>

    <div id="search-bar"> 
     <input type="text" placeholder="Search..." />
    </div>

    <div id="logo-right"  className="logo"><img src="https://cdn.dribbble.com/users/1191192/screenshots/4250680/foodie_faster.jpg"></img></div>

    </div>
);

root.render(<MainHeader />);



