import './cell.css';
import { useState } from "react";

function Cell(props) {
    const [color, setColor] = useState("white");

    return (
        <div 
            className="Cell"
            onClick={() => {
               if (color === "white") {
                    setColor("black");
                    props.callBack(props.value + 1);
                } else {
                    setColor("white");
                    props.callBack(props.value - 1);
                }
            }}
            style={{backgroundColor: color}}>
            
        </div>
    );
}

export default Cell;
