import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

export default function Todo({ id, status, description, onAdvance, setIdToDelete }) {



    return (
        <>
            {description}
            <div>
                <Link to={"/delete"}>
                    <Button onClick={() => setIdToDelete(id)}>Delete</Button>
                </Link>
                <Button variant={"contained"}
                        color={"primary"}
                        disabled={status === "DONE"}
                        onClick={() => onAdvance({ id, description, status })}
                    >Advance
                    </Button>
            </div>
        </>
    );
}
