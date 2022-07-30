import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {getUsers} from "../services/userServices"

const initialState = {
    allUserData : [],
    userStatus : "",
};

export const getUsersData = createAsyncThunk("user/getUsersData", async() => {
    try{
        const usersResp = await getUsers()
        return usersResp.data
    }catch(error){
        return rejectWithValue(error)
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
        }
    }
})

export default userSlice.reducer;