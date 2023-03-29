import Square from "./Square.js";
import './Board.css';
import loadFen from "./utils/loadFen.js";
import move from './utils/move.js'
import { useState } from 'react';
import getLegalMoves from "./utils/getLegalMoves.js";

/**
 * Creates a chess board
 * @returns {JSX} Board - Div with class "Board" containing 64 Square elements
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
            const legalMoves = getLegalMoves(board, prevMove);
            if ( legalMoves.moves.includes(square) ) {
                setBoard(move(board, prevMove, square, legalMoves.piecesTaken[legalMoves.moves.indexOf(square)]));
            }
            setPrevMove(-1);
        }
    }

    console.log(board)

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