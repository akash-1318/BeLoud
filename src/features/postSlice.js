import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {getUserPosts} from "../services/serviceExporter"

const initialState = {
    allPosts : [],
    userPosts : [],
};

export const getUserPostsData = createAsyncThunk("post/getUserPostsData", async(username) => {
    try{
        const postsResp = await getUserPosts(username)
        return postsResp.data.posts;
    }catch(error){
        return rejectWithValue(error)
    }
})

export const postSlice = createSlice({
    name : "post",
    initialState,
    reducers : {},
    extraReducers : {
        [getUserPostsData.pending] : (state) => {
            state.postStatus = "pending"
        },
        [getUserPostsData.fulfilled] : (state, action) => {
            state.postStatus = "fulfilled"
            state.userPosts = action.payload
        },
        [getUserPostsData.rejected] : (state,action) => {
            state.postStatus = "rejected"
            state.userPosts = action.payload
        }
    }
})

export default postSlice.reducer;