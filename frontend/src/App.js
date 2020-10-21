import React, {useState} from 'react';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';
import AddTodo from './components/AddTodo';
import Search from "./components/Search";
import useSearch from "./hooks/useSearch";
import {
    Switch,
    Route
} from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";
import NavBar from "./components/NavBar";



const useStyles = makeStyles((theme)=> ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.primary,
    },
    button: {
        margin: theme.spacing(0.5, 0),
    }
}))


export default function App() {
    const [todos, create, remove, advance] = useTodos();
    const [search, setSearch, filteredTodos] = useSearch(todos);
    const classes = useStyles();
    return (
        <Container maxWidth={"md"}>
            <CssBaseline />
            <Grid container className={classes.paper}  spacing={3}>
                <Grid item xs={12}>
                    <Typography variant={"h1"}>
                        Super Kanban Board
                    </Typography>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <AddTodo onAdd={create} />
                    </Grid>
                    <Grid item xs={12}>
                        <Search search={search} onChange={setSearch}/>
                    </Grid>
                    <Grid item xs={12}>
                        <NavBar/>
                    </Grid>
                </Grid>
                <Route>
                    <Switch>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={4}>
                                <Route exact path={["/", "/open"]}>
                                    <Typography variant={"h4"}>OPEN</Typography>
                                    <TodoList
                                        status="OPEN"
                                        todos={filteredTodos}
                                        onDelete={remove}
                                        onAdvance={advance}
                                    />
                                </Route>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Route exact path={["/", "/in-progress"]}>
                                    <Typography variant={"h4"}>IN PROGRESS</Typography>
                                    <TodoList
                                        status="IN_PROGRESS"
                                        todos={filteredTodos}
                                        onDelete={remove}
                                        onAdvance={advance}
                                    />
                                </Route>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Route exact path={["/", "/done"]}>
                                    <Typography variant={"h4"}>DONE</Typography>
                                    <TodoList
                                        status="DONE"
                                        todos={filteredTodos}
                                        onDelete={remove}
                                        onAdvance={advance}
                                    />
                                </Route>
                            </Grid>
                        </Grid>
                    </Switch>
                </Route>
            </Grid>
        </Container>
    );
}
