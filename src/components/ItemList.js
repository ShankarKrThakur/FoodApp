import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = (item) => {

    
    const dispatch = useDispatch();

    const handleAddItem = (order) => {
        //Dispatch an action
        dispatch(addItem(order));
    };


    return(
        <div>
            <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                    <div className="py-2">
                        <span>Chicken Chizza</span>
                        <span> - ₹200</span>
                    </div>
                    <p className="text-xs my-2">Crunchy chicken topped with cheese, spicy sauce, veggies & herbs. All-chicken-no-crust pizza! [Serves 1]</p>
                </div>
                <div className="w-4/12 p-9">
                
                    <img src="https://img.money.com/2017/02/kfc-pizza.jpg" className="w-full"/>
                    <div className="absolute">
                        <button className="p-2 mx-16 rounded-lg bg-white shadow-lg m-auto" onClick={ () => handleAddItem("Chicken Chizza")}>Add +</button>
                    </div>
                </div>

  
            </div>

            <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                    <div className="py-2">
                        <span>Chicken Chizza & Dessert Meal</span>
                        <span> - ₹430</span>
                    </div>
                    <p className="text-xs my-2">All-chicken-no-crust Chizza, Choco Lava Cake and a Pepsi PET 475ml at a deal price [Serves 1-2]</p>
                </div>
                <div className="w-4/12 p-9">
                
                    <img src="https://img.money.com/2017/02/kfc-pizza.jpg" className="w-full"/>
                    <div className="absolute">
                        <button className="p-2 mx-16 rounded-lg bg-white shadow-lg m-auto"onClick={ () => handleAddItem("Chicken Chizza & Dessert Meal")}>Add +</button>
                    </div>
                </div>
                
  
            </div>

            <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                    <div className="py-2">
                        <span>Chicken Chizza & Pepsi Combo</span>
                        <span> - ₹376</span>
                    </div>
                    <p className="text-xs my-2">1 Crunchy all-chicken-no-crust Chizza served with Pepsi PET 475ml [Serves 1]</p>
                </div>
                <div className="w-4/12 p-9">
                
                    <img src="https://lh3.googleusercontent.com/s2Oj2VOgR59EDUQ_6l8iAcUPODNs4puW5QDl-2Rbhg19dxKqViogCZay8Ao7v4uC08AnJrGIcAFtei9EZ_3xAx2YkAi0mZhGJ_3LftU" className="w-full"/>
                    <div className="absolute">
                        <button className="p-2 mx-16 rounded-lg bg-white shadow-lg m-auto">Add +</button>
                    </div>
                </div>
                
  
            </div>

            <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                    <div className="py-2">
                        <span>Chicken Chizza & Wings Meal</span>
                        <span> - ₹476</span>
                    </div>
                    <p className="text-xs my-2">All-chicken-no-crust Chizza, 2 Pc Hot Wings and a Pepsi PET 475ml at a deal price [Serves 1-2]</p>
                </div>
                <div className="w-4/12 p-9">
                
                    <img src="https://img.money.com/2017/02/kfc-pizza.jpg" className="w-full"/>
                    <div className="absolute">
                        <button className="p-2 mx-16 rounded-lg bg-white shadow-lg m-auto">Add +</button>
                    </div>
                </div>
                
  
            </div>

            
            
            
        </div>
    )
}
export default ItemList;