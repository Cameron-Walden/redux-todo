//https://redux-toolkit.js.org/api/createslice
import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: [
        { id: 1, title: 'task1', completed: false },
        { id: 2, title: 'task2', completed: false },
        { id: 3, title: 'task3', completed: false }
    ],
    reducers: {
        //reducer recieves the action and current state of the slice
        addTodo: (state, action) => {
            //creating new todo based on action payload
            const newTodo = {
                // id: new Date(Date.now().toString()),
                id: Date.now().toString(),
                title: action.payload.title,
                completed: false
            };
            //pushes the new todo into the array. redux takes new state and saves to the store
            state.push(newTodo)
        },
        toggleCompletedTodos: (state, action) => {
            const idx = state.findIndex(todo => todo.id === action.payload.id);
            state[idx].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => state.filter(todo => todo.id !== action.payload.id)
    },
});

//creating actions
export const { addTodo, toggleCompletedTodos, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;