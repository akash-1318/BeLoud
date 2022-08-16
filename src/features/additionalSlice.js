import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    loader : false,
    modalState : false,
    postIdToUpdate : null,
}

const additionalSlice = createSlice({
    name : "additional",
    initialState,
    reducers : {
        openLoader : (state) => {
            state.loader = true
        },
        closeLoader : (state) => {
            state.loader = false
        },
        handleModalState : (state) => {
            state.modalState = !state.modalState
        },
        setPostId : (state, action) => {
            state.postIdToUpdate = action.payload
        }
    },
})

export const {openLoader, closeLoader, handleModalState, setPostId} = additionalSlice.actions

export default additionalSlice.reducer