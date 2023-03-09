import Square from "./Square.js";
import './Board.css'
import loadFen from "./utils/loadFen.js";
import move from './utils/move.js'

export default function Board () {
    let squares = Array(64).fill('');

    squares = loadFen('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 0');
    squares = move(squares, 0, 34)
    squares = move(squares, 34, 16)

    return ( renderBoard(squares) );
}

function renderBoard (board) {
    const boardRendered = board.map((piece, index) => {
        // if it's an odd row, offset index by 1

        const offset = Math.floor(index / 8) % 2;
        console.log(offset)

        let color;
        if ( (index + offset) % 2 === 0 ) { color = 'White'; }
        else { color = 'Black'; }

        return <Square key={index} color={color} piece={piece} onclick=""/>
    })
    

    return (
        <div className="Board">
            {boardRendered}
        </div>
    );
}