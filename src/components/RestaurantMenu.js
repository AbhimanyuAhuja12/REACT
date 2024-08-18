// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
// import { RestaurantApi } from "../utils/constants";
import useRestaurantMenu from "../utils/useReataurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu =()=>{

    // const[resInfo , setresInfo]= useState(null);

    const {resId} =useParams();


    const resInfo =useRestaurantMenu(resId);

    const [showIndex,setshowIndex]=useState(null);


    // useEffect(()=>{
    //     fetchMenu();
    // },[]);

    // const fetchMenu = async ()=>{
    //     const data = await fetch(RestaurantApi+ resId);
    //     const json= await data.json();
    //     console.log(json);

    //     setresInfo(json.data);
   
       
    // };
    if(resInfo===null) return <Shimmer/>

    const {name ,cuisines , costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;

 

    // const {itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.card?.card;
    // console.log(itemCards);

    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(c=>c.card?.card?.['@type']=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);


    return (
        <div className="text-center ">
        
          <h1 className="font-bold my-6 text-2xl">{name}</h1>
          <p className="font-bold text-lg" >
            {cuisines.join(" , ")} -{costForTwoMessage}
          </p>

          {/* categories accordian */}{
          categories.map((category,index)=>(
             <RestaurantCategory key={category?.card?.card?.title}
             data={category?.card?.card}
             showItems={index===showIndex ? true : false} setshowIndex={()=>{setshowIndex(index)}}/>))} 
         
        </div>
    );
};


export default RestaurantMenu;