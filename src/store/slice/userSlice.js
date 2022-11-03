
import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";
import {getUsersThunk,updateUsersThunk} from "./thunk";

const usersList = createSlice({
  name: "users",
  initialState,
  reducers: {
    addAnotherUser: (state,action) => {
        state.userOption = action.payload
    },
    mapDirection: (state,action) => {
        state.userDirection = [+action.payload[1]?.stringValue,+action.payload[2]?.stringValue]
    },
    addOneUser: (state,action) => {
      state.oneUser = action.payload
  },
    usersId: (state,action) => {
     state.userId = action.payload
},
  },
  extraReducers: {
    [getUsersThunk.pending]: (state) => {
      state.loading = true;
    },

    [getUsersThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload
      state.userOption =  action?.payload?.slice(0,10)
    },

    [getUsersThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    
    [updateUsersThunk.pending]: (state) => {
      state.loading = true;
    },

    [updateUsersThunk.fulfilled]: (state, action) => {
      state.loading = false;
    },

    [updateUsersThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default usersList.reducer;
export const {addAnotherUser,mapDirection,addOneUser,usersId} =
usersList.actions;