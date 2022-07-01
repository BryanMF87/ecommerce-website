import React, { useState } from 'react';
import "./Counter.css";

const Counter = ({setCartCount}) => {

    const [num, setNum] = useState(0);

    const minusOne = () => {
        if(num === 0) {
            return
        } else {
            setNum((currentNum) => currentNum - 1)
            setCartCount(currCount => currCount - 1)
        }
    };
    
    const plusOne = () => {
            setNum((currentNum) => currentNum + 1)
            setCartCount(currCount => currCount + 1)
    };

    return (
        <div className="item-count">
            <button className="add-subtract" onClick={minusOne}>-</button>
            <div className="number">{num}</div>
            <button className="add-subtract" onClick={plusOne}>+</button>
        </div>
    )
}

export default Counter