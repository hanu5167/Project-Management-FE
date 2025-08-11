import { createSlice } from "@reduxjs/toolkit"

const initialState={
    tasksList:[]
}

const tasksSlice =createSlice({
    name:"tasks",
    initialState,
    reducers:{
        setTasksList:(state,action)=>{
            state.tasksList = action.payload
        }
    }
})

export const {setTasksList} = tasksSlice.actions

export default tasksSlice.reducer