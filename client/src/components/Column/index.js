import React from "react";
import "./style.css";

export default function Column (props) {
    return (
        <div className={props.column}>
        {props.children}
        </div>
    )
}