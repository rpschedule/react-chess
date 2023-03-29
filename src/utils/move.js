export default function move ( board, origin, destination, pieceTaken ) {
    let outBoard = board;

    outBoard = outBoard.map((square) => Object.assign(square, {
        pawnJustMovedTwice: false,
    }));

    outBoard[pieceTaken] = Object.assign(outBoard[pieceTaken], {
        piece: '',
        pieceColor: '',
    })

    outBoard[destination] = Object.assign(outBoard[destination], {
        piece: board[origin].piece,
        pieceColor: board[origin].pieceColor,
        hasMoved: true,
        pawnJustMovedTwice: board[origin].piece === 'p' && (origin - 16 === destination || origin + 16 === destination),
    })

    outBoard[origin] = Object.assign(outBoard[origin], {
        piece: '',
        pieceColor: '',
        hasMoved: false,
    })

    return outBoard;
}