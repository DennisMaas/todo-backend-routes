import React from "react";
import {Link} from "react-router-dom";
import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";

export default function NavBar() {
    return (
        <MenuList>
            <MenuItem component={Link} to={"/"}>All notes</MenuItem>
            <MenuItem component={Link} to={"open"}>Open</MenuItem>
            <MenuItem component={Link} to={"/in-progress"}>In progress</MenuItem>
            <MenuItem component={Link} to={"/done"}>Done</MenuItem>
        </MenuList>
    );
}
