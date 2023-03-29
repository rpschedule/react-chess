/***
 * Move a piece to a destination
 * @param {array} board - The board
 * @param {number} origin - The index of the piece to move
 * @param {number} destination - The index of the piece's destination
 * @param {number} pieceTaken - The index of the piece taken - used for en passant
 * @returns {array} The board once the piece has moved
 */
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