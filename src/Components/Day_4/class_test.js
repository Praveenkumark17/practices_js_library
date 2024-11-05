import React from "react";

class Statetest extends React.Component{

    constructor(){
        super();
        this.state = {
            color:'green',
            food:'Butter Chicken'
        }
    }

    render(){
        return(
            <>
            <h1>Class File :</h1>
            <h1 style={{color:this.state.color}}>My Favourite color is {this.state.color}</h1>
            <button onClick={()=>{this.setState(pre=>{return{...pre,color:'orange'}})}}>Change color</button>
            </>
        );
    }
}

export default Statetest;