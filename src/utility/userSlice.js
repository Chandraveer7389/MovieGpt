import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    appUser: (state, action) => {
      action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});
export const { appUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
