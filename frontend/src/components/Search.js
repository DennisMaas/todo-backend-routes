import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";



const useStyles = makeStyles((theme)=> ({
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

export default function Search({search, onChange}){
    const classes = useStyles();

    return (
    <form className={classes.form} noValidate>
        <TextField
            label={"Search while typing"}
            variant={"outlined"}
            margin={"normal"}
            type={"search"}

            value={search}
            fullWidth
            onChange={event => onChange(event.target.value)}/>
    </form>
    )
}