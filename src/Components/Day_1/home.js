import React from "react";
import Animal from "./animal";

function Home(){
    const myinfo = {
        color:'red',
        name:'praveen'
    }
    return(
        <>
        <h2>This is Home Folder</h2>
        <Animal myinfo = {myinfo}/>
        </>
    );
}

export default Home;