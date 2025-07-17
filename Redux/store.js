"use client"

import {configureStore} from "@reduxjs/toolkit";
import usersReducer from './Slices/usersSlice.js'



export const store_redux = configureStore({
    reducer:{
      users: usersReducer,

    }
})

export default store_redux;