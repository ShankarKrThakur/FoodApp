import { useEffect , useState} from "react";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = (props) => {
    const {data} = props;
    


    

/*
    useEffect( () => {
        console.log("Hi");
        fetchMenu();
    },[])

    const fetchMenu = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.922464&lng=81.794091&restaurantId=249");
        const json = await data.json();
        console.log("Hello")
        console.log(json);
    }
*/

    return(
        <div className="text-center">
            
            <h2 className="font-bold my-6 text-2xl">{data.resName}</h2>
            <h2 className="font-bold my-6 text-xl">{data.address}</h2>
            <div>
           
                <RestaurantCategory myData = {data}/>
            
            </div>
            
        </div>
    )
}
export default RestaurantMenu;