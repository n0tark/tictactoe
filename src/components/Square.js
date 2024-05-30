import React from 'react';
import '../App';

export default function Square({ val, chooseSquare }) {
    return (
        <div className="square" onClick={chooseSquare}>
            {val}
        </div>
    );
}
