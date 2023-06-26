import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    Task: []
}

const TodoSlice = createSlice({
    name: "TODO",
    initialState,
    reducers: {
        AddTask: (state, action) => {
            state.Task.push(action.payload)
        },
        RemoveTask: (state, action) => {
            const id = action.payload
            const data = state.Task.filter(task => task.id !== id)
            state.Task = data
        },
        EditTask: (state, action) => {
            const updatedTask = action.payload;
            // console.log(updatedTask);
            state.Task = state.Task.map((task) =>
              task.id === updatedTask.id ? updatedTask : task
            );
          }
          
    }
})

export const { AddTask, RemoveTask, EditTask } = TodoSlice.actions
export default TodoSlice.reducer
