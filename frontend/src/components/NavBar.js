import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components/macro";

export default function NavBar() {
    return (
        <>
            <Link className={"StyledLink"} to={"/"}>All notes</Link>
            <Link className={"StyledLink"} to={"/open"}>Open</Link>
            <Link className={"StyledLink"} to={"/in-progress"}>In progress</Link>
            <Link className={"StyledLink"} to={"/done"}>Done</Link>
        </>
    );
}
