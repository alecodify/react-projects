import React from 'react'
import './node.css';

const Node = ({ col, isFinish, isStart, isWall, onMouseDown, onMouseEnter, onMouseUp, row, }) => {
    const className = isFinish ? 'node-finish' : isStart ? 'node-start' : isWall ? 'node-wall' : '';
    
    return (
        <div id={`node-${row}-${col}`} className={`node ${className}`} onMouseDown={() => onMouseDown(row, col)} onMouseEnter={() => onMouseEnter(row, col)} onMouseUp={() => onMouseUp()} />
    )
}

export default Node