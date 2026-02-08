import { createSlice } from '@reduxjs/toolkit';
import type { UIState } from '../types';

const initialState: UIState = {
  isScrolled: false,
  isMenuOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrolled: (state, action) => {
      state.isScrolled = action.payload;
    },
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { setScrolled, toggleMenu, closeMenu } = uiSlice.actions;
export default uiSlice.reducer;
