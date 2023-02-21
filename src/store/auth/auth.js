import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {
    successLogin: (state, action) => {
      state.userId = action.payload.userId;
      state.token = action.payload.token;
    },
  },
});

export const { successLogin } = slice.actions;
export default slice.reducer;
