import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    loader : false,
    modalState : false,
    postModalState : false,
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
        handlePostModalState : (state) => {
            state.postModalState = !state.postModalState
        },
        setPostId : (state, action) => {
            state.postIdToUpdate = action.payload
        }
    },
})

export const {openLoader, closeLoader, handleModalState, handlePostModalState, setPostId} = additionalSlice.actions

export default additionalSlice.reducer