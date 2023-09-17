import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modalIsVisbile: false
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle: (state) => {
      state.modalIsVisbile = !state.modalIsVisbile;
    }
  }
});

export const { toggle } = uiSlice.actions;

//uiReducer
export default uiSlice.reducer;
