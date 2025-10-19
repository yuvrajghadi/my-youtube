// src/utils/appSlice.js
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    removeMenu :(state)=>{
      state.isMenuOpen = false
    }
  },
});

export const { toggleMenu, removeMenu } = appSlice.actions;
export default appSlice.reducer;
