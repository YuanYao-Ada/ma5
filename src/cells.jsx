import './cells.css';
import Cell from './cell.jsx';
import { shallowEqual, useSelector } from 'react-redux';

function Cells() {
    const currentCount = useSelector((state) => {
        return state.count;
    }, shallowEqual);
    
    return (
        <div>
            <div>Count: {currentCount}</div>
            <div className='Cells'>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>   
        </div>     
    )
}

export default Cells;