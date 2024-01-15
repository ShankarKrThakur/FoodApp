import { LOGO_URL } from "../utils/constant";
import { useState , useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const {loggedInUser} = useContext(UserContext);

    useEffect( () => {
        console.log("Header Render");
    },[btnName]);

    //Custom Hooks
    const onlineStatus = useOnlineStatus();

    // Subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items)
    //console.log(cartItems);

    return(
        <div className="flex justify-between bg-blue-100 shadow-md m-2 sm:bg-yellow-100">
            <div className="w-32">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-3">OnlineStatus: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-3"><Link to="/">Home</Link></li>
                    <li className="px-3"><Link to="/about">About</Link></li>
                    <li className="px-3"><Link to="/contact">Contact</Link></li>
                    <li className="px-3"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-3 font-bold text-xl"><Link to="/cart">Cart🛒 ({cartItems.length} Items)</Link></li>
                    <button className="px-3" onClick = { () => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
                    
                    <li className="px-3 font-bold">{loggedInUser}</li>
                </ul>
               
            </div>
        </div>
    )
}
export default Header;