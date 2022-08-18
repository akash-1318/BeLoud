import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"

const initialState = {
    loader : false,
    modalState : false,
    postModalState : false,
    editModal : false,
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
        handleEditModalState : (state) => {
            state.editModal = !state.editModal
        },
        setPostId : (state, action) => {
            state.postIdToUpdate = action.payload
        }
    },
})

export const {openLoader, closeLoader, handleModalState, handlePostModalState, setPostId, handleEditModalState} = additionalSlice.actions

export default additionalSlice.reducer