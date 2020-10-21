import React from "react";
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <Link to={"/"}>All notes</Link>
            <Link to={"/open"}>Open</Link>
            <Link to={"/in-progress"}>In progress</Link>
            <Link to={"/done"}>Done</Link>
        </>
    );
}
