import React from "react"
import "./style.css"

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg text-center">
            <h3 className="text-center">{props.children}</h3>


        </nav>
    )
}
