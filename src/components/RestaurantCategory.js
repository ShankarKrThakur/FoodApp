import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = (props) => {
    const {myData} = props;
  
   const [showItems, setShowItems] = useState(false);
    const [showIt, setShowIt] = useState(false);
    const handleClick = () => {
        setShowItems(!showItems);
    };
    const handleClick2 = () => {
        setShowIt(!showIt);
    };
    return(
        <div>
      
        <div className="w-6/12  bg-gray-50 shadow-lg p-4 mx-auto my-4 "> 
            <div className="flex justify-between cursor-pointer" onClick= {handleClick}>
                <span>{myData.title} (4)</span>
                <span >⬇️</span>
            </div>   
            {showItems && <ItemList data={myData}/>}
            
        
        </div>
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">  
            <div className="flex justify-between cursor-pointer" onClick = {handleClick2}>
                <span>{myData.newadded} (6)</span>
                <span >⬇️</span>
            </div>  
            {showIt && <ItemList data={myData}/>}
        </div>
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 flex justify-between">    
        <span>{myData.drinks} (4)</span>
        <span>⬇️</span>
        </div>
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 flex justify-between">    
        <span>{myData.sweets} (4)</span>
        <span>⬇️</span>
        </div>
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 flex justify-between">    
        <span>{myData.meal} (6)</span>
        <span>⬇️</span>
        </div>
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 flex justify-between">    
        <span>{myData.meal2} (6)</span>
        <span>⬇️</span>
        </div>
        
        </div>
        
    )
}

export default RestaurantCategory;