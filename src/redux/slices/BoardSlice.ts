import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cell } from '../../modules/Cell';
import { RootState } from '../store';

const initialState = {
    selectedCell: <Cell | null>null,
};

const BoardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        setSelectedCell: (state, action) => {
            if (action.payload) {
                state.selectedCell = action.payload;
            }
        },
    },
});

export const { setSelectedCell } = BoardSlice.actions;
export default BoardSlice.reducer;
export const selectfild = (state: RootState) => state.BoardSlice.selectedCell;
