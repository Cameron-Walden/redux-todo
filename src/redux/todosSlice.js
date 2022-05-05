import axios from "axios";
//https://redux-toolkit.js.org/api/createslice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  try {
    const todosUrl = "http://localhost:3001/todos";
    const response = await axios.get(todosUrl);
    const urlResponse = response.data;
    return { urlResponse };
  } catch (e) {
    console.log(e, "error inside of getTodos");
  }
});

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
    extraReducers: {
        [getTodos.pending]: (state, action) => {
            console.log('todos pending');
        },
        //when thunk dispatches a fulfilled action, api call and thunk have dispatched action successfully
        [getTodos.fulfilled]: (state, action) => {
            console.log('succesfully grabbed todos')
            // console.log(action.payload.todos, 'this is A.P.R')
            // console.log(state, 'this is state')
            console.log(action, 'action')
            return action.payload.urlResponse;
        },
        [getTodos.rejected]: (state, action) => {
            return console.log('error: getTodos is rejected')
        }
    }
});

//creating actions
export const { addTodo, toggleCompletedTodos, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;