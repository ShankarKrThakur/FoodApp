import { useEffect, useState } from "react";
//Custom HOOK

const useRestrauntMenu = (resId) => {
    //fetchData
    const [resInfo, setResInfo] = useState(null);

    useEffect(() =>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("MENU_API" + resId);
        const json = await data.json()
        setResInfo(json); //json.data
    };
    return resInfo;
};
export default useRestrauntMenu;