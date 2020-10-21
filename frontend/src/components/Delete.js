import React from "react";
import {useHistory} from "react-router-dom";
import {Button} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export default function Delete({id, onDelete}) {

    const history = useHistory();

    const goBackHandler = () => {
        history.goBack()
    }

    const deleteHandler = (id) => {
        onDelete(id)
        history.push("/confirmdelete")
    }

    return(
        <>
            <Typography variant={"body1"} >Do you want to delete this item?</Typography>
            <Button onClick={() => goBackHandler()}>go back</Button>
            <Button variant={"contained"} color={"primary"} onClick={() => deleteHandler(id)}>delete</Button>
        </>
    );
}