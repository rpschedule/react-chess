import Square from "./Square.js";
import './Board.css';
import loadFen from "./utils/loadFen.js";
import move from './utils/move.js'
import { useState } from 'react';

/**
 * Creates a chess board
 * @returns {JSX} Board - Div with class "Board" containing 64 square elements
 * @author Grom#2016
 */
export default function Board ({ fen }) {
    const [prevMove, setPrevMove] = useState(-1);
    const [board, setBoard] = useState( loadFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 0') );

    function handleClick (square) {
        // if is first click and square is empty, return
        if (  prevMove === -1 && board[square].piece === '' ) return;

        // if is first click
        if ( prevMove === -1) {
            setPrevMove(square);
        } else {
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
        <Square key={index} index={index} color={square.squareColor} piece={square.piece} clickHandler={handleClick}/>
    );
    

    return (
        <div className="Board">
            {boardRendered}
        </div>
    );
}