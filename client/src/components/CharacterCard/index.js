import React from "react";
import "./style.css";

export default function CharacterCard(props) {
    return (
        <div className="card">
            
                <img src={props.image}className="card-img-top" alt="..." />
           

        </div>
    )
}