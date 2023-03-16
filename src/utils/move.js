import isLegal from './isLegal.js'

export default function move(board, origin, destination) {
    if ( origin === destination ) return board;

    let out = board; // out = [{piece: r, ...}, {piece: k, ...}, . . . ]

    // prevents players from deleting pieces
    if ( board[origin].piece !== '' && isLegal(board, origin, destination)) { 
        board[destination].piece = board[origin].piece;
        board[destination].pieceColor = board[origin].pieceColor; 
        board[origin] = {
            piece: '',
            pieceColor: '',
            squareColor: board[origin].squareColor,
            file: board[origin].file,
            rank: board[origin].rank,
        };
    }
    
    return out;
}