import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    figures: '',
};

const figuresSlice = createSlice({
    name: 'figures',
    initialState,
    reducers: {},
});

export const {} = figuresSlice.actions;
export default figuresSlice.reducer;
