import { useState } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import './Board.css';
import PromoPopup from "./PromoPopup.js";
import Square from "./Square.js";

import getLegalMoves from "./utils/getLegalMoves.js";
import highlightLegalMoves from "./utils/highlightLegalMoves.js";
import loadFen from "./utils/loadFen.js";
import move from './utils/move.js'
import removeHighlights from "./utils/removeHighlights.js";

/**
 * Creates a chess board
 * @param {string} fen The starting position
 * @param {string} color Which color should be displayed at the bottom
 * @param {boolean} online Whether or not the game is online
 * @returns {JSX} Board - Div with class "Board" containing 64 Square elements
 */
export default function Board({ fen, color, online }) {
    fen = fen || 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 0';
    color = color || 'white';
    online = online || false;
    const [prevMove, setPrevMove] = useState(-1);
    const [board, setBoard] = useState(loadFen(fen));
    const [turn, setTurn] = useState(true); // true: white, false: black
    const [popUp, setPopUp] = useState('')

    function handleSquareClick(square) {
        // if is first click and square is empty, return
        if (popUp !== '') return;
        if (prevMove === -1 && board[square].piece === '') return;

        // whether or not the player should be able to move the piece they've selected
        const canMovePiece = online ?
            ( // if online 
                color === board[square].pieceColor && // is the correct color
                board[square].pieceColor === (turn ? 'white' : 'black') // is the player's turn
            )
            :
            (  // if offline
                board[square].pieceColor === (turn ? 'white' : 'black') // is the player's turn
            )

        if (prevMove === -1 && canMovePiece) {
            setPrevMove(square);
            setBoard(highlightLegalMoves(board, square))
        } else if (prevMove !== -1) {
            const legalMoves = getLegalMoves(board, prevMove);

            if (legalMoves.moves.includes(square)) {
                // castling (either direction)
                if (board[prevMove].piece === 'k' && (square === prevMove - 2 || square === prevMove + 2)) {
                    const rookOrigin = Math.sign(square - prevMove) > 0 ? prevMove + 3 : prevMove - 4;
                    const rookDestination = prevMove + Math.sign(square - prevMove);
                    setBoard(
                        removeHighlights(
                            move(
                                move(board, prevMove, square, legalMoves.piecesTaken[legalMoves.moves.indexOf(square)]),
                                rookOrigin, rookDestination, rookDestination
                            )
                        )
                    );
                } else if (board[prevMove].piece === 'p' && (board[square].rank === 1 || board[square].rank === 8)) {
                    setPopUp(<PromoPopup board={board} origin={prevMove} destination={square} onclick={handlePromotion} />)
                } else { // anything thats not castling/promoting
                    setBoard(
                        removeHighlights(
                            move(board, prevMove, square, legalMoves.piecesTaken[legalMoves.moves.indexOf(square)])
                        )
                    );
                }

                setTurn(!turn);
            } else if (board[square].pieceColor === board[prevMove].pieceColor) {
                setPrevMove(square);
                setBoard(highlightLegalMoves(removeHighlights(board), square));
            } else {
                setBoard(removeHighlights(board))
            }
            setPrevMove(-1);

        }
    }

    function handlePromotion(pieceSelected, origin, destination) {
        const tmpBoard = structuredClone(board)
        tmpBoard[origin] = Object.assign(tmpBoard[origin], {
            piece: '',
            pieceColor: '',
            hasMoved: false,
        })

        tmpBoard[destination] = Object.assign(tmpBoard[destination], {
            piece: pieceSelected,
            pieceColor: board[origin].pieceColor,
            hasMoved: false,
        })

        setBoard(removeHighlights(tmpBoard))
        setPopUp('')
    }

    function dropHandler(index, origin) {
        // move the piece to the destination (if it's legal ofc)

        const legalMoves = getLegalMoves(board, origin);
        const canMove = online ?
            ( // if online 
                color === board[origin].pieceColor && // is the correct color
                board[origin].pieceColor === (turn ? 'white' : 'black') // is the player's turn
            )
            :
            (  // if offline
                board[origin].pieceColor === (turn ? 'white' : 'black') // is the player's turn
            )

        console.log(board[origin].pieceColor)
        console.log(turn)

        if (legalMoves.moves.includes(index) && canMove) {
            console.log("sldkjfalksjdf")
            // castling (either direction)
            if (board[origin].piece === 'k' && (index === origin - 2 || index === origin + 2)) {
                const rookOrigin = Math.sign(index - origin) > 0 ? origin + 3 : origin - 4;
                const rookDestination = origin + Math.sign(index - origin);
                setBoard(
                    move(
                        move(board, origin, index, legalMoves.piecesTaken[legalMoves.moves.indexOf(index)]),
                        rookOrigin, rookDestination, rookDestination
                    )
                );
            } else if (board[origin].piece === 'p' && (board[index].rank === 1 || board[index].rank === 8)) {
                setPopUp(<PromoPopup board={board} origin={origin} destination={index} onclick={handlePromotion} />)
            } else { // anything thats not castling/promoting
                setBoard(
                    move(board, origin, index, legalMoves.piecesTaken[legalMoves.moves.indexOf(index)])
                );
            }

            setTurn(!turn);
        }
    }

    function onDragEnd(item, monitor) {
        setBoard(removeHighlights(board))
    }

    function onDragStart(index) {
        // setboard to highlight the available squares
    }

    function renderBoard(board, handleClick) {
        const boardRendered = board.map((square, index) =>
            <Square key={index} square={square} index={index} clickHandler={handleClick} onDragStart={onDragStart} dropHandler={dropHandler} onDragEnd={onDragEnd}/>
        );
    
        return (
            <DndProvider backend={HTML5Backend}>
                <div className="Board">
                    {boardRendered}
                </div>
            </DndProvider>
        );
    }

    return (<>
        {renderBoard(board, handleSquareClick)}
        {popUp}
    </>)
}