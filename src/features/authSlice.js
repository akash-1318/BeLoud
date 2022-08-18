import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {signupService, signinService} from "../services/serviceExporter"
import {toast} from "react-toastify"
import {updateUser, editUser} from "../services/userServices"

const initialState = {
    authToken : localStorage.getItem("TOKEN") ?? "",
    authStatus : localStorage.getItem("TOKEN") ? true : false,
    status : "idle",
    user : JSON.parse(localStorage.getItem("USER")) || null,
}

export const signupAuth = createAsyncThunk("auth/signupAuth", async({firstname, lastname, username, password},thunkAPI) => {
    try{
        const resp = await signupService(firstname, lastname, username, password)
          return resp.data
    } catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})

export const signinAuth = createAsyncThunk("auth/signinAuth", async({username, password},thunkAPI) => {
    try{
        const resp = await signinService(username, password)
        return resp.data
    } catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})

export const updateUserData = createAsyncThunk("auth/updateUserData", async(userData, thunkAPI) => {
    const authToken = localStorage.getItem("TOKEN");
    try{
        const resp = await updateUser(userData, authToken)
        console.log(resp.data.user)
        return resp.data.user
    } catch(error){
        thunkAPI.rejectWithValue(error)
    }
})

export const editUserData = createAsyncThunk("auth/editUserData", async(editDetails,thunkAPI) => {
    const authToken = localStorage.getItem("TOKEN");
    console.log(editDetails)
    try{
        const resp = await editUser(editDetails, authToken)
        console.log(resp)
        return resp.data.user
    } catch(error){
        thunkAPI.rejectWithValue(error)
    }
})

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        logout : () => {
            localStorage.removeItem("TOKEN")
            toast.success("You have logged out");
            return{
                authToken:"",
                authStatus: false,
                user : null
            }
        }
    },
    extraReducers : {
        [signupAuth.pending] : (state) => {
            state.status = "loading"
        },
        [signupAuth.fulfilled] : (state, action) => {
            state.status = "fulfilled";
            state.authToken = action.payload.encodedToken;
            state.user = action.payload.createdUser;
            state.authStatus = true;
            localStorage.setItem("TOKEN", state.authToken);
            localStorage.setItem("USER", JSON.stringify(state.user))
            toast.success("Successfully signed up");
        },
        [signupAuth.rejected] : (state) => {
            state.status = "rejected"
            toast.error("Error in signup");
        },
        [signinAuth.pending] : (state) => {
            state.status = "loading"
        },
        [signinAuth.fulfilled] : (state, action) => {
            state.status = "fulfilled";
            state.authToken = action.payload.encodedToken;
            state.user = action.payload.foundUser;
            state.authStatus = true;
            localStorage.setItem("TOKEN", state.authToken);
            localStorage.setItem("USER", JSON.stringify(state.user))
            toast.success("You have logged in")
        },
        [signinAuth.rejected] : (state) => {
            state.status = "rejected"
            toast.error("Error in signin");
        },
        [updateUserData.pending] : (state) => {
            state.status = "pending"
        },
        [updateUserData.fulfilled] : (state, action) => {
            state.status = "fulfilled"
            state.user = action.payload
            localStorage.setItem("USER", JSON.stringify(state.user))
        },
        [updateUserData.rejected] : (state) => {
            state.status = "rejected"
        },
        [editUserData.pending] : (state) => {
            state.status = "fulfilled"
        },
        [editUserData.fulfilled] : (state, action) => {
            state.user = action.payload
            localStorage.setItem("USER", JSON.stringify(state.user))
        },
        [editUserData.rejected] : (state) => {
            state.status = "rejected"
        }
    }
})

export const {logout} = authSlice.actions;

export default authSlice.reducer;