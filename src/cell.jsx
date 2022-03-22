import './cell.css';
import { useState } from "react";
import { useStore } from 'react-redux'

function Cell() {
    let store = useStore();
    const [color, setColor] = useState("white");

    function handleOnClick(color) {
        if (color === "white") {
            store.dispatch({type: 'INCREASE'});
            setColor("black");
        } else {
            store.dispatch({type: "DECREASE"});
            setColor("white");
        }
    }

    return (
        <div 
            className="Cell"
            onClick={() => handleOnClick(color)}
            style={{backgroundColor: color}}>
        </div>
    );
}

export default Cell;
