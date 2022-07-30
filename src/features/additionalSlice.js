import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    loader : false
}

const additionalSlice = createSlice({
    name : "additional",
    initialState,
    reducers : {
        openLoader : (state) => {
            console.log("lodader true")
            state.loader = true
        },
        closeLoader : (state) => {
            console.log("lodader false")
            state.loader = false
        }
    },
})

export const {openLoader, closeLoader} = additionalSlice.actions

export default additionalSlice.reducer