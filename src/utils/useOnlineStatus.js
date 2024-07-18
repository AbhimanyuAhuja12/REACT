import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
  const[OnlineStatus,setOnlineStatus]=useState(true);
    //try to check online status
    useEffect(()=>{
      window.addEventListener("offline",()=>{
    setOnlineStatus(false);
        
      });

    window.addEventListener("offline",()=>{
        setOnlineStatus(false);

      })
    },[]);

     //boolean value
    return OnlineStatus; 
};
export  default useOnlineStatus;