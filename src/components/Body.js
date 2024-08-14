import ResturantCard,{withPromotedLabel} from "./ResturantCard";
// import resList from "../utils/mockData";
import { useState ,useEffect ,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"

import UserContext from "../utils/UserContext";






const Body =()=>{
  // Local state variable - Super Powerful variable
  const [listOfResturants, setlistOfResturant]= useState([]);
  const [filteredResturant , setfilteredResturant] =useState([]);

  const [ searchText , setsearchText] =useState("");


  const RestauranCardPromoted =withPromotedLabel(ResturantCard);

  // console.log("body rendered")

useEffect(()=>{
 fetchData();
}, []);

 const fetchData =async()=>{
  
  // const data2 = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=28.6578133&lng=77.28181959999999");
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6578133&lng=77.28181959999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  

  const json = await data.json();
  console.log(json);
  // optional chaining

  // setlistOfResturant(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);

  setlistOfResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  setfilteredResturant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  // console.log(json.data.success.cards[3].gridWidget.gridElements.infoWithStyle.restaurants);
 };

 // conditional rendering 
// if(listOfResturants.length===0){ 
//   return <Shimmer />
// }



const {setuserName ,loggedInUser}=useContext(UserContext);


const OnlineStatus=useOnlineStatus();
if(OnlineStatus===false) return (<h1>Looks like you are offline!! please check your internet connection</h1>);

    return listOfResturants.length===0 ? <Shimmer /> : (
       <div className="body  ">

      <div className="flex">
       <div className=" flex search m-4  p-4 f fa-align-justify">
        <input className="search-bar border:border-solid" type="text" 
        value={searchText} onChange={(e)=>{setsearchText(e.target.value)}} placeholder="search here" />
        <button  className="px-4 py-2 bg-green-500 rounded-lg" id="submit" onClick={()=>{
          // filter logic
         

          const filteredResturant =listOfResturants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
         
          setfilteredResturant(filteredResturant);
          

         }}
         >Search</button> 
       </div>
       
       <div className="filter flex items-center">
        <button className="filter-btn bg-gray-300 rounded-lg w-48" onClick={()=>{
          //filter logic here
          const filteredList =listOfResturants.filter((res)=> res.info.avgRating>4.2);
          // console.log(filteredList);
          setlistOfResturant(filteredList);
         

        }}>
        Top Rated Resturant
           </button>
           <label className="pl-10">UserName:</label>
           <input className="border border-black pl-1 " type="text" 
            value={loggedInUser}
           onChange={(e)=>setuserName(e.target.value)}/>
       </div>
       </div>


       <div className="resturant-container flex flex-wrap justify-center gap-4">
      
       {filteredResturant.map((resturant) => (
        <Link key={resturant.info.id}  to={"/restaurant/" + resturant.info.id}>
          {/* if restaurant is promoted  then add promoted label to it*/}
          {resturant.info.promoted ? <RestauranCardPromoted resData={resturant}/>:
          <ResturantCard resData={resturant} />} </Link>
        ))};
      
         {/* console.log(resList.get(0)); */}

    {/* //now listOfResturants is used for filtering only */}


       </div>
       </div>
    );
};

export default Body;