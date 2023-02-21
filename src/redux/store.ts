import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import BoardSlice from './slices/BoardSlice';

export const store = configureStore({
    reducer: { BoardSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
