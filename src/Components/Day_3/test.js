import React from "react";
import './test.css';

export default function Test() {
  const mystyle = { 
    color: "red", 
    backgroundColor: "black",
    padding:'10px'
 };
  return (
    <>
      <h1 style={mystyle}>Hi! I am Praveen</h1>
      <h2 style={{background:'green',color:"yellow"}}>I am From Chennai</h2>
      <h3 className="main">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h3>
    </>
  );
}
