"use client"

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const registerUser = createAsyncThunk(
    "users/registerUser",
    async ({ username, email, password }, thunkAPI) => {
        try {
            const { data: users } = await axios.get("http://localhost:4000/users");

            const exists = users.find(
                (u) => u.email === email || u.username === username
            );
            if (exists) {
                return thunkAPI.rejectWithValue("User already exists");
            }

            const newUser = { username, email, password };
            const { data } = await axios.post("http://localhost:4000/users", newUser);

            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue("Registration failed");
        }
    }
);
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, thunkAPI) =>{
        try {
            const response = await axios.get('http://localhost:4000/users')

            return response.data
        }catch (err){
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
        errors: null
    },
    reducers: {

    },
    extraReducers: (builder)=>{
        builder
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = action.payload;
                state.loading = false;
            })
            .addCase(fetchUsers.pending, (state)  =>{
                state.loading = true
                state.errors = null
            })
            .addCase(fetchUsers.fulfilled, (state, action) =>{
                state.users = action.payload

                state.loading = false
            })
            .addCase(fetchUsers.rejected, (state, action) =>{
                state.loading = false
                state.erors = action.payload
            })

    }

})


export default usersSlice.reducer