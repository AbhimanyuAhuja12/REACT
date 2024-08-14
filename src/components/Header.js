import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();


  const {loggedInUser} =useContext(UserContext);

// subscribing to store using our selector
  const cartItems = useSelector((store)=> store.cart.items)
  console.log(cartItems);

  return (
    <div className="Header flex justify-between border border-gray-400 p-4 l">
      {/* Logo of the website */}
      <div className="logo-container">
        <img className="logo w-24" src={LOGO_URL} alt="Website Logo" />
      </div>

      {/* Menu items */}
      <div className=" items-center">
        <ul className="flex list-none text-xl ">
          <li className="p-2 m-2">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="p-2 m-2"><Link to="/" className="no-underline">Home</Link></li>

          <li className="p-2 m-2"><Link to="/about" className="no-underline">About Us</Link></li>

          <li className="p-2 m-2"><Link to="/contact" className="no-underline">Contact Us</Link></li>

          <li className="p-2 m-2"><Link to="/cart">Cart:({cartItems.length} items)</Link></li>

          <li className="p-2 m-2 "><Link to="/grocery" className="no-underline">Grocery</Link></li>

          <button 
            className="login-button p-2 m-2 bg-white border-none cursor-pointer"
            onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
          >
            ☢️{btnNameReact}
          </button >
          <li className="my-5 px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
