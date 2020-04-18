import React from "react";
import "./style.css";

export default function Row(props) {
    return (
        <div className={props.row}>
            {props.children}
        </div>
    )
}