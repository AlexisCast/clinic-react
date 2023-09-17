import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  drawerIsVisbile: false
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle: (state) => {
      state.drawerIsVisbile = !state.drawerIsVisbile;
    }
  }
});

export const { toggle } = uiSlice.actions;

//uiReducer
export default uiSlice.reducer;
