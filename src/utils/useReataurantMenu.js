import { useEffect , useState } from "react";
import { RestaurantApi } from "../utils/constants";


const useRestaurantMenu =(resId)=>{

    const [resInfo, setresInfo] = useState(null);

//fetch data

useEffect(()=>{
    fetchData();
},[]);

const fetchData= async ()=>{
    const data = await fetch(RestaurantApi+ resId);

    const json =await data.json();
   
    setresInfo(json.data);
};


    return resInfo;
}

export default useRestaurantMenu;