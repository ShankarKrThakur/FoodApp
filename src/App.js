import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
//import Grocery from "./components/Grocery.js";
import accordionData from "./utils/accordionData.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";


//Chunking
//Code Splitting
//Dynamic Bundling
//On Demand loading
//Lazy loading
const Grocery = lazy( () => import("./components/Grocery.js"));
const About = lazy( () => import("./components/About"))

console.log(<Body/>);//Virtual DOM

const AppLayout = () => {

    const [userName, setUserName] = useState("");
    useEffect( () => {
        const data = {
            "name": "Shankar Thakur"
        }
        setUserName(data.name);
    }, [])

    return (
        //Default
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}} >
           {/* //Akshay Saini*/} 
            <div className="App">
                <UserContext.Provider value={{loggedInUser: "Shankar"}}>
                    {/* //Elon Musk*/} 
                     <Header/>
                </UserContext.Provider>
                <Outlet/>
            </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
            path: "/about",
            element: <Suspense fallback={<h1>Page Loading......</h1>}><About/></Suspense>
        },
        {
            path: "/contact",
            element: <Contact/>
        },
        {
            path: "/grocery",
            element: <Suspense fallback={<h1>Loading......</h1>}><Grocery/></Suspense>
        },
        {
            path: "/restaurants/:resId",    //Dynamic Routing
            element: <RestaurantMenu data = {accordionData}/>
        },
        {
            path: "/cart",    //Dynamic Routing
            element: <Cart/>
        }
    ],
        errorElement: <Error/>
    }
    
])


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(JSXheading);  // --> to render element
root.render(<RouterProvider router={appRouter}/>) // --> to render functional Component