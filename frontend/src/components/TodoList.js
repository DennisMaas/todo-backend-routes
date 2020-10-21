import React from 'react';
import Todo from './Todo';
import {List} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import FormGroup from "@material-ui/core/FormGroup";
import ListItemText from "@material-ui/core/ListItemText";

export default function TodoList({ status, todos, onDelete, onAdvance, setIdToDelete }) {
    const filteredTodos = todos.filter((todo) => todo.status === status);

    return (
        <FormGroup>
        <List>
            {filteredTodos.map((todo) => (
                <ListItem alignItems={"flex-start"} key={todo.id}>
                    <ListItemText
                        primary={""}
                        secondary={
                            <Todo {...todo} onDelete={onDelete} onAdvance={onAdvance} setIdToDelete={setIdToDelete}/>
                        }/>
                </ListItem>
            ))}
        </List>
        </FormGroup>
    );
}
