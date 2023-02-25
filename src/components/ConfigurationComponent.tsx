import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Board } from '../modules/Board';
import { Cell } from '../modules/Cell';
import { Colors } from '../modules/Colors';

interface ConfigurationProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const ConfigurationComponent: FC<ConfigurationProps> = ({board, setBoard}) => {

    const [value, setValue] = useState('.w.w.w....w......W.b.W.............B..........b....b....b.......')
    console.log(value)
    return(

        <div className='wrapper_input'>
            <input
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            className='conf-input' 
            type="text" />
            <br />
            <p><b>.</b> - empty field, <b>w</b> - white piece, <b>W</b> - white king, <b>b</b> - black piece, <b>B</b> - black king</p>
        </div>
        
    )
};

export default ConfigurationComponent;
