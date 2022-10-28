import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    value: {
      name: "",
      email: "",
      favourites: [],
      status: false,
    },
  },
  reducers: {
    login: (state, action) => {
      state.value = {
        name: action.payload.name,
        favourites: action.payload.favourites,
        status: action.payload.status,
      };
    },
  },
});

export const { login } = accountSlice.actions;

export default accountSlice.reducer;
