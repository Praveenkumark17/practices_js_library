import React from "react";

function Animal(props){
    const {myinfo} = props;
    return(
        <>
        <h2>my name is {myinfo.name}. I like {myinfo.color} color</h2>
        </>
    );
}

export default Animal;