import React from 'react';
import {Button} from "@material-ui/core";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




export default function Todo({ id, status, description, onDelete, onAdvance, setIdToDelete }) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteHandler = (id) => {
        onDelete(id)
    };
    return (
        <Card variant={"outlined"}>
            <CardContent>
                {description}
            </CardContent>
            <CardActions>
                <Button onClick={handleClickOpen}>Delete</Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Do you really want to delete this item?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            no, keep it
                        </Button>
                        <Button variant={"contained"}
                                color={"primary"}
                                autoFocus
                                onClick={() => deleteHandler(id)}>
                            yes, delete
                        </Button></DialogActions>
                </Dialog>
                <Button variant={"contained"}
                        color={"primary"}
                        disabled={status === "DONE"}
                        onClick={() => onAdvance({id, description, status})}
                >Advance
                </Button>
            </CardActions>
        </Card>
    )
}