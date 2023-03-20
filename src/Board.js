import Square from "./Square.js";
import './Board.css';
import loadFen from "./utils/loadFen.js";
import move from './utils/move.js'
import { useState } from 'react';

/**
 * Creates a chess board
 * @returns {JSX} Board - Div with class "Board" containing 64 Square elements
 */
export default function Board ({ fen }) {
    const [prevMove, setPrevMove] = useState(-1);
    const [board, setBoard] = useState( loadFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 0') );

    function handleClick (square) {
        // if is first click and square is empty, return
        alert('has been clicked')
        if (  prevMove === -1 && board[square].piece === '' ) return;
        
        alert('first click was not on a blank square')

        // if is first click
        if ( prevMove === -1) {
            alert('is first click')
            setPrevMove(square);
        } else {
            alert('is not first click')
            setBoard(move(board, prevMove, square))
            setPrevMove(-1);
        }
    }

    return ( renderBoard(board, handleClick) );
}

/***
 * Maps board array to Squares
 */
function renderBoard (board, handleClick) {
    const boardRendered = board.map((square, index) =>
        <Square key={index} square={square} index={index} clickHandler={handleClick}/>
    );    

    return (
        <div className="Board">
            {boardRendered}
        </div>
    );
}