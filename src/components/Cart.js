import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const cartImage = useSelector((store) => store.cart.foodImage);

    const dispatch = useDispatch();

    const handleClearCart = () => {
            dispatch(clearCart());
    }

    return(
        <div className="">
        <div className=" p-2 m-2 text-center w-7/12 border-gray-200 border-2">
            <h1 className="font-bold text-xl">Cart</h1>
            <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>ClearCart</button>
            {cartItems.map( (order) => 
            <div className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                    <h2 className="  m-2 p-2 text-centre ">{order}</h2>
                </div>
                <div className="w-3/12">
                <img src="https://img.money.com/2017/02/kfc-pizza.jpg" className="w-full"/>
                </div>
            </div>
            )
            }
            {cartItems.length === 0 && (<div>Cart🛒 is empty. Add item to display it here</div>)}
        </div>
        </div>
    )
}
export default Cart;