import React from "react";
import "./style.css";

export default function Jumbotron(props) {
    return (
        <div className="jumbotron" >
            
               <h3 className="text-center">{props.children}</h3>
           
        </div>
    )
}