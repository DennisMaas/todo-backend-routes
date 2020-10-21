import React, { useState } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme)=> ({
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export default function AddTodo({ onAdd }) {
    const classes = useStyles();
    const [description, setDescription] = useState('');

    return (
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
                label={"Add a new task"}
                variant={"outlined"}
                margin={"normal"}
                required
                fullWidth
                autoFocus
                onChange={(event) => setDescription(event.target.value)}
            />
            <Button
                fullWidth
                variant="contained"
                disabled={description.length < 1}
                color="primary"
                type="submit">New Todo</Button>
        </form>
    );

    function handleSubmit(event) {
        event.preventDefault();
        onAdd(description);
        setDescription('');
    }
}
