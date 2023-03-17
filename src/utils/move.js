import getLegalMoves from './legalMoves.js'

export default function move(board, origin, destination) {
    if ( origin === destination ) return board;

    let out = board; // out = [{piece: r, ...}, {piece: k, ...}, . . . ]
    const legalMoves = getLegalMoves(board, origin, destination)

    // prevents players from deleting pieces
    if ( board[origin].piece !== '' && legalMoves.moves.includes(destination)) { 
        board = board.map((square) => Object.assign(square, { 
            pawnJustMovedTwice: false,
        }))

        board[destination] = Object.assign(board[destination], {
            piece: board[origin].piece,
            pieceColor: board[origin].pieceColor,
            pawnJustMovedTwice: (origin - 16 === destination || origin + 16 === destination) && board[origin].piece === 'p',
        })

        board[origin] = Object.assign(board[origin], {
            piece: '',
            pieceColor: '',
        });
    }
    
    return out;
}