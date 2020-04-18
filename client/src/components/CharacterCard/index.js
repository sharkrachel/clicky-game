import React from "react";
import "./style.css";

export default function CharacterCard(props) {
    return (

        <div>
            <img onClick={props.onClick} src={props.image} className="card-img-top" alt="..." />
        </div>

    )
}