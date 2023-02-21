import { configureStore } from '@reduxjs/toolkit';
import figuresSlice from './slices/figuresSlice';

export const store = configureStore({
    reducer: { figuresSlice },
});
