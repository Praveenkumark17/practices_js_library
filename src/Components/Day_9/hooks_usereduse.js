import React, { useReducer } from "react";

const initialstate = {count:0}

function reduser(state,action){
    switch(action.type){
        case 'increment':
            return{count:state.count+1};
        case 'decrement':
            return{count:state.count-1};
        default:
            return state;
    }
}

export default function Usereduser(){

    const[state,dispatch] = useReducer(reduser,initialstate);

    return(
        <>
            <h2 className="mt-5">UseReducer:</h2>
            <h2>Count:{state.count}</h2>
            <button onClick={()=>dispatch({type:'increment'})}>Increment</button>
            <button onClick={()=>dispatch({type:'decrement'})}>Decrement</button>
        </>
    );
}