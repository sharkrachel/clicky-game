import React from "react";
import "./style.css";

export default function Row(props) {
    return (
        <div className="row">
            {props.children}
        </div>
    )
}