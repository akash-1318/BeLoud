import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import {signupService, signinService} from "../services/serviceExporter"
import {toast} from "react-toastify"

const initialState = {
    authToken : localStorage.getItem("TOKEN") ?? "",
    authStatus : localStorage.getItem("TOKEN") ? true : false,
    status : "idle",
    user : null,
}

export const signupAuth = createAsyncThunk("auth/signupAuth", async({firstname, lastname, username, password}) => {
    try{
        const resp = await signupService(firstname, lastname, username, password)
          return resp.data
    } catch(error){
        return rejectWithValue(error)
    }
})

export const signinAuth = createAsyncThunk("auth/signinAuth", async({username, password}) => {
    try{
        const resp = await signinService(username, password)
        return resp.data
    } catch(error){
        return rejectWithValue(error)
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
        }
    }
})

export const {logout} = authSlice.actions;

export default authSlice.reducer;