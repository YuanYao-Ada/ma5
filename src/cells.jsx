import './cells.css';
import { useState } from "react";
import Cell from './cell.jsx';

function Cells() {
    const [value, setValue] = useState(0);

    return (
        <div>
            <div>Count: {value}</div>
            <div className='Cells'>
                <Cell value={value} callBack={setValue} />
                <Cell value={value} callBack={setValue} />
                <Cell value={value} callBack={setValue} />
                <Cell value={value} callBack={setValue} />
            </div>   
        </div>     
    )
}

export default Cells;