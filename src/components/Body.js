import RestuarantCard, {withPromotedLabel} from "./RestuarantCard";
import imgid from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
//import imgid from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    useEffect(() => {
        console.log("UseEffect");
    },[]);

    //Local State Variable - Super Powerful Variable
    const [listOfRestaurants, setListOfRestaurants] = useState(imgid);

    const [filterRestaurants, setfilterRestaurants] = useState(imgid);
    
    const [searchText, setSearchText] = useState("");

    const ResturantCardPromoted = withPromotedLabel(RestuarantCard);
   
    const {loggedInUser, setUserName} = useContext(UserContext);
    
  /*  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilterRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    
  }
   //Conditional Rendering
    if(listOfRestaurants.length === 0){ //it will work when we fetch listofRestaurants by API
        return <Shimmer/>
    }
*/

    const onlineStatus = useOnlineStatus();
    if(onlineStatus == false){
        return(
            <h1>Looks like you are Offline!!. Please check your internet connection.</h1>
        );
    }


    return  (
        <div className="body">
            <div className="filter flex">
                <div className=" m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange = { (e) => setSearchText(e.target.value)}/>
                    <button className="px-4 py-1 bg-green-200 m-2 rounded-lg" onClick = { () => {
                        const filteredData = listOfRestaurants.filter( (res) => res.resName.toLowerCase().includes(searchText.toLowerCase()));
                        setfilterRestaurants(filteredData);
                    }}>Search</button>
                </div >
                <div className="m-4 p-5 items-center">
                    <button className="filter-btn px-4 py-2 bg-gray-100 rounded-lg" onClick={() => {
                    const filterdData =  listOfRestaurants.filter(
                        (res) => res.rating > 4.5
                    );
                    setfilterRestaurants(filterdData);
                    }
                    }>Top Rated Restaurant</button></div>
                    <div className="m-4 p-5 items-center">
                        <label>UserName: </label>
                        <input type="text" className="border border-solid border-black p-2" value={loggedInUser} onChange= { (e) => {setUserName(e.target.value)}
                        }/>
                    </div>
                
            </div>
            <div className="flex flex-wrap">
                
                {filterRestaurants.map( (restuarant) => (
                    <Link to={"/restaurants/uniqueId" }>
                        {restuarant.promoted == "yes" ? (<ResturantCardPromoted key={restuarant.uniqueId} image={restuarant}/>):<RestuarantCard key={restuarant.uniqueId} image={restuarant}/>}
                        </Link>
                ))}
                
            </div>
        </div>
    )
}

export default Body;