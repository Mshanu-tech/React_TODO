import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../Components/CreateSlice/TodoSlice";

const Store = configureStore({
    reducer:{
        Todo:TodoSlice
    }
})

export default Store
