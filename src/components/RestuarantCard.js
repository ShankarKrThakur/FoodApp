import { CDN_URL } from "../utils/constant";

const styleCard =  {
    backgroundColor : "#f0f0f0",
}

const RestuarantCard = (props) => {
    const {image} = props;
   // console.log(image);
    
    return(
        <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img className="res-logo rounded-lg" alt="res-logo" src={
                CDN_URL +image.id1
                }
                />
            <h3 className="font-bold py-4 text-xl">{image.resName}</h3>
            <h4>{image.cuisine}</h4>
            <h4>{image.rating}</h4>
            <h4>{image.time}</h4>
        </div>
    );
};

//Higher oRder Component
// input - resturantcard ==> resturantcardpromoted

export const withPromotedLabel = (RestuarantCard) => {
    return (props) => {
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2  ">Promoted</label>
                <RestuarantCard {...props}/>
            </div>
        )
    }
}

export default RestuarantCard;