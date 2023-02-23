import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectfild } from '../redux/slices/BoardSlice';
import { Board } from '../modules/Board';
import { Cell } from '../modules/Cell';
import { Colors } from '../modules/Colors';

interface ConfigurationProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const ConfigurationComponent: FC<ConfigurationProps> = ({board, setBoard}) => {

    const [value, setValue] = useState('')

    const dispatch = useDispatch();
    const fild = useSelector(selectfild);

    return(

        <div>
            <p><b>.</b> - empty field, <b>w</b> - white piece, <b>wk</b> - white king, <b>b</b> - black piece, <b>bk</b> - black king</p><br/>
            <input
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            className='conf-input' 
            type="text" />
        </div>
        
    )
};

export default ConfigurationComponent;
