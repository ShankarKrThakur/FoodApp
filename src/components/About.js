import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";


class About extends React.Component{

    constructor(props){
        super(props);
      //  console.log("Parent Constructor");
    }

    componentDidMount(){
       // console.log("Component Did Mount Parent");

        //API CALL
    }
    

    render(){
       // console.log("Parent Return");
        return(
            <div className="about">
                <h1>This is class based component</h1>
                <div>Default User: 
                    <UserContext.Consumer>
                         {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                
                <UserClass name={"first class "} location={"Dehradun"}/>
              
        </div>
        )
    }
}

/*
Parent Constructor
Parent Render
   
    First Child Constructor
    First Child Render
    
    Second Child Constructor
    Second Child Render

    <DOM UPDATED - IN SINGLE BATCH>

    First Child ComponentDidMount
    Second Child ComponentDidMount

Parent ComponentDidMount


*/

/*
const About = () => {

    return(
        <div className="about">
            
            <UserClass name={"akshay class(0)"} location={"Dehradun"}/>
        </div>
    )
}*/
export default About;