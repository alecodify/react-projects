import { useState } from 'react';
import { calcularWinner } from './winner';

const Square = ({ value, onClick }) => {
    return (
        <button className='square' onClick={onClick}>{value}</button>
    )
}

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [start, setStart] = useState(true);


    const reset = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setStart(true);
    }

    const handleClick = (item) => {
        const newSquares = squares.slice();
        if (newSquares[item] || calcularWinner(newSquares)) {
            return;
        }

        newSquares[item] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);

        if (start) {
            setStart(false);
        }
    }

    const winner = calcularWinner(squares);
    const isBoardFull = squares.every(square => square !== null);

    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else if (isBoardFull) {
        status = 'Draw, play again';
    } else {
        status = start ? "Start Game" : `Next Player: ${xIsNext ? 'X' : 'O'}`;
    }

    const renderSquare = (i) => {
        return (
            <Square value={squares[i]} onClick={() => handleClick(i)} />
        )
    }

    return (
        <div className='board'>
            <div className={`${winner ? 'winner' : isBoardFull ? 'draw' : 'status'}`}>{status}</div>

            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>

            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>

            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>

            <button onClick={reset} className='reset-button'>Reset</button>
        </div>
    )
}

export default Board