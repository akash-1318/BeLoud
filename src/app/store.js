import {configureStore} from "@reduxjs/toolkit"
import authReducer from "../features/authSlice"
import userReducer from "../features/userSlice"
import postReducer from "../features/postSlice"
import additionalReducer from "../features/additionalSlice"

export const store = configureStore({
    reducer : {
        reduxStore : authReducer,
        user : userReducer,
        post : postReducer,
        additional : additionalReducer,
    }
})