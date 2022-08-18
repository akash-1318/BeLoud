import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {getUsers, followUser, unfollowUser, editUser} from "../services/userServices"
import {updateUserData} from "./authSlice"

const initialState = {
    allUserData : [],
    userStatus : "",
};

export const getUsersData = createAsyncThunk("user/getUsersData", async(thunkAPI) => {
    try{
        const usersResp = await getUsers()
        return usersResp.data
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})

export const followUserData = createAsyncThunk("user/followUserData", async({followUserId, dispatch}, thunkAPI) => {
    const authToken = localStorage.getItem("TOKEN");
    console.log(followUserId)
    try{
        const resp = await followUser(followUserId, authToken)
        dispatch(updateUserData(resp.data.user))
        console.log(resp.data)
        return resp.data
    } catch(error){
        thunkAPI.rejectWithValue(error)
    }
})

export const unfollowUserData = createAsyncThunk("user/unfollowUserData", async({followUserId, dispatch}, thunkAPI) => {
    const authToken = localStorage.getItem("TOKEN");
    console.log(followUserId)
    try{
        const resp = await unfollowUser(followUserId, authToken)
        console.log(resp.data)
        dispatch(updateUserData(resp.data.user))
        return resp.data
    } catch(error){
        console.log(error)
        thunkAPI.rejectWithValue(error)
    }
})

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {},
    extraReducers : {
        [getUsersData.pending] : (state) => {
            state.userStatus = "loading";
        },
        [getUsersData.fulfilled] : (state, action) => {
            state.userStatus = "loaded";
            state.allUserData = action.payload.users
        },
        [getUsersData.rejected] : (state) => {
            state.userStatus = "rejected"
        },
    }
})

export default userSlice.reducer;