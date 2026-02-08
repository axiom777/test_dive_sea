import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { UIState } from '../types';

const initialState: UIState = {
  isScrolled: false,
  isMenuOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setScrolled: (state, action: PayloadAction<boolean>) => {
      state.isScrolled = action.payload;
    },
    toggleMenu: (state, action: PayloadAction<boolean | undefined>) => {
      if (action?.payload !== undefined) {
        state.isMenuOpen = action.payload
      } else {
        state.isMenuOpen = !state.isMenuOpen;

      }
    },
  },
});

export const { setScrolled, toggleMenu } = uiSlice.actions;
export default uiSlice.reducer;
