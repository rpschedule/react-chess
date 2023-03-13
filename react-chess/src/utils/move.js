import './isLegal.js'

export default function move(board, origin, destination) {
    if ( origin === destination ) return board;

    let out = board; // out = [r, n, b, . . . ]

    // prevents players from deleting pieces
    if ( board[origin] !== '') { 
        board[destination] = board[origin]; 
        board[origin] = '';
    }
    
    return out;
}