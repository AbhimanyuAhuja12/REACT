import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//for different paths
import Error from "./components/Error";
import About from "./components/about";
import Contact from"./components/Contact";
import Cart from "./components/Cart"

import RestaurantMenu from "./components/RestaurantMenu";
// for routing
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import { Outlet } from "react-router-dom";

import UserContext from "./utils/UserContext";

import { Provider } from "react-redux";
import appStore from "./utils/appStore";


//dynamic import
//on demain loading
const Grocery =lazy(()=>import("./components/Grocery"));

const AppLayout =()=>{ 
    const [userName,setuserName]=useState();

    useEffect(()=>{
        const data={
            Name:'Abhimanyu Ahuja',
        }
       setuserName(data.Name);
    },[]);

    return ( 
      <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName , setuserName}}>

    <div className="app">

     <Header />
     <Outlet />

    </div>
    </UserContext.Provider>
    </Provider>
  
   
    );
};


const appRouter =createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path : "/about",
                element: <About/>
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
        ],
      
    },
  
]);

const root =ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout/>);
root.render(< RouterProvider router={appRouter}/>);
