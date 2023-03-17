import isLegal from './isLegal.js'

export default function move(board, origin, destination) {
    if ( origin === destination ) return board;

    let out = board; // out = [{piece: r, ...}, {piece: k, ...}, . . . ]

    // prevents players from deleting pieces
    if ( board[origin].piece !== '' && isLegal(board, origin, destination)) { 
        board[destination].piece = board[origin].piece;
        board[destination].pieceColor = board[origin].pieceColor; 

        board = board.map((square) => Object.assign(square, { pawnJustMovedTwice: false }))

        board[origin] = Object.assign(board[origin], {
            piece: '',
            pieceColor: '',
            pawnJustMovedTwice: (origin - 16 === destination || origin + 16 === destination) && board[origin].piece === 'p' ? true : false,
        });
    }
    
    return out;
}