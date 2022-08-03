import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {getUserPosts, getAllPosts, getSingleUserPosts, addPost, deletePost, editPost} from "../services/serviceExporter"

const initialState = {
    allPosts : [],
    userPosts : [],
    singleUserPosts : [],
};

export const getUserPostsData = createAsyncThunk("post/getUserPostsData", async(username) => {
    try{
        const postsResp = await getUserPosts(username)
        return postsResp.data.posts;
    }catch(error){
        return rejectWithValue(error)
    }
})

export const getAllPostsData = createAsyncThunk("post/getAllPostsData", async() => {
    try{
        const resp = await getAllPosts()
        return resp.data
    } catch(error){
        return rejectWithValue(error)
    }
})

export const getSingleUserPostsData = createAsyncThunk("post/getSingleUserPostsData", async(username) =>{
    try{
        const resp = await getSingleUserPosts(username)
        return resp.data
    } catch(error){
        return rejectWithValue(error)
    }
})

export const addUserPost = createAsyncThunk("post/addUserPost", async(uploadPost) => {
    const authToken = localStorage.getItem("TOKEN");
    try{
        const resp = await addPost(uploadPost,authToken)
        console.log(resp.data.posts)
        return resp.data
    } catch(error){
        return rejectWithValue(error)
    }
})

export const deleteUserPost = createAsyncThunk("post/deleteUserPost", async(postId) => {
    const authToken = localStorage.getItem("TOKEN");
    try{
        const resp = await deletePost(postId, authToken)
        console.log(resp.data)
        return resp.data
    } catch(error){
        return rejectWithValue(error)
    }
})

export const editUserPost = createAsyncThunk("post/editUserPost", async({uploadPost, postIdToUpdate}) => {
    const authToken = localStorage.getItem("TOKEN");
    try{
        const resp = await editPost({uploadPost, postIdToUpdate}, authToken)
        return resp.data
    } catch(error){
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
        },
        [getAllPostsData.pending] : (state) => {
            state.postStatus = "pending"
        },
        [getAllPostsData.fulfilled] : (state, action) => {
            state.postStatus = "fulfilled"
            state.allPosts = action.payload.posts
        },
        [getAllPostsData.rejected] : (state, action) => {
            state.postStatus = "rejected"
            state.allPosts = action.payload
        },
        [getSingleUserPostsData.pending] : (state) => {
            state.postStatus = "pending"
        },
        [getSingleUserPostsData.fulfilled] : (state, action) => {
            state.postStatus = "fulfilled"
            state.singleUserPosts = action.payload.posts
        },
        [getSingleUserPostsData.rejected] : (state) => {
            state.postStatus = "rejected"
            state.singleUserPosts = action.payload
        },
        [addUserPost.pending] : (state) => {
            state.postStatus = "pending"
        },
        [addUserPost.fulfilled] : (state, action) => {
            state.postStatus = "fulfilled"
            state.allPosts = action.payload.posts
        },
        [addUserPost.rejected] : (state) => {
            state.postStatus = "rejected"
        },
        [deleteUserPost.pending] : (state) => {
            state.postStatus = "pending"
        },
        [deleteUserPost.fulfilled] : (state, action) => {
            state.postStatus = "fulfilled"
            state.allPosts = action.payload.posts
        },
        [deleteUserPost.rejected] : (state) => {
            state.postStatus = "rejected"
        },
        [editUserPost.pending] : (state) => {
            state.postStatus = "pending"
        },
        [editUserPost.fulfilled] : (state,action) => {
            state.postStatus = "fulfilled"
            state.allPosts = action.payload.posts
        },
        [editUserPost.rejected] : (state) => {
            state.postStatus = "rejected"
        }
    }
})

export default postSlice.reducer;