import React, { useState, useEffect } from 'react';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBAr from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from './TodoList';

const TodoApp = () => {

    const initialTodos = [
        { id: 1, task: 'Watch the game', completed: false },
        { id: 2, task: 'Clean Fishtank', completed: true },
        { id: 3, task: 'Grow Beard', completed: false }
    ]
    const [todos, setTodos] = useState(initialTodos);

    return (
        <Paper style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
            elevation={0}
        >


            <AppBAr color='primary' position='static' style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBAr>
            <TodoList todos={todos} />
        </Paper>
    )
}

export default TodoApp;
