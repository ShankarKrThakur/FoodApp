import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props) //mandatory to write
        {
            //console.log(props);
        }
        this.state = {
            userInfo:
           {
            name:"dummy name",
            location: "dummy location",
            avatar_url: "http://dummy-url.com"
           }
            
        };
        console.log(this.props.name + "Child Constructor");
    }
    async componentDidMount(){
        const user = await fetch("https://api.github.com/users/akshaymarch7");
        const data = await user.json();
        //console.log(data);
        this.setState(
            {
                userInfo: data,
            }
        );

        console.log(this.props.name + "Component Did Mount Child");
    }

    componentDidUpdate(){
        console.log("Component Did Update");
    }
    componentWillUnmount(){
        console.log("Component will Unmount");
    }

    render(){
        console.log(this.props.name + "Child Return");
        const {name, location,avatar_url } = this.state.userInfo;
        //debugger;
        return (
           <div className="user-card">
                {/*<h2>COUNT:{this.state.count}</h2>
                <button 
                    //NEVER UPDATE STATE VARIABLE DIRECTLY
                    onClick={()=> {
                    this.setState({
                        count: this.state.count + 1,
                    }
                    )
                }}>CountIncrease</button>*/}
                <img src={avatar_url }  style={{height: "150px"}}></img>
               <h2>Name: {name}</h2>
               <h2>Location: {location}</h2>
               <h3>contact: akshay@dehradun</h3>
            </div>
        )
    }
}
export default UserClass;