import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@material-ui/core";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default function Todo({ id, status, description, onAdvance, setIdToDelete }) {

    return (
        <Card variant={"outlined"}>
            <CardContent>
                {description}
            </CardContent>
            <CardActions>
                <Link to={"/delete"}>
                    <Button onClick={() => setIdToDelete(id)}>Delete</Button>
                </Link>
                <Button variant={"contained"}
                        color={"primary"}
                        disabled={status === "DONE"}
                        onClick={() => onAdvance({ id, description, status })}
                    >Advance
                    </Button>
            </CardActions>
        </Card>
    );
}
