import Square from "./Square.js";
import './Board.css';
import loadFen from "./utils/loadFen.js";
import move from './utils/move.js'
import { useState } from 'react';

export default function Board () {
    const [prevMove, setPrevMove] = useState(-1);
    const [squares, setSquares] = useState(loadFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 0'));

    function handleClick (square) {
        if (  prevMove === -1 && squares[square] === '' ) return;

        if ( prevMove === -1) {
            setPrevMove(square);
        } else {
            setSquares(move(squares, prevMove, square))
            setPrevMove(-1);
        }
    }

    return ( renderBoard(squares, handleClick) );
}

function renderBoard (board, handleClick) {
    const boardRendered = board.map((piece, index) => {
        // if it's an odd row, offset index by 1

        const offset = Math.floor(index / 8) % 2;

        let color;
        if ( (index + offset) % 2 === 0 ) { color = 'White'; }
        else { color = 'Black'; }

        return <Square key={index} index={index} color={color} piece={piece} clickHandler={handleClick}/>
    })
    

    return (
        <div className="Board">
            {boardRendered}
        </div>
    );
}