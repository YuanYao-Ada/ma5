import './cells.css';
import Cell from './cell.jsx';
import { shallowEqual, useSelector } from 'react-redux';
import { useStore } from 'react-redux'

function Cells(props) {
    const store = useStore();
    const currentCount = useSelector((state) => {
        return state.count;
    }, shallowEqual);
    return (
        <div>
            <div>Count: {currentCount}</div>
            <div className='Cells'>
                <Cell store={store}/>
                <Cell store={store}/>
                <Cell store={store}/>
                <Cell store={store}/>
            </div>   
        </div>     
    )
}

export default Cells;