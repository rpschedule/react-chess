import isUpperCase from "./isUpperCase";

export default function isLegal (board, origin, destination) {
    // filter out moves that capture your color's pieces
    if ( isUpperCase(board[origin]) === isUpperCase(board[destination]) && board[destination] !== '') return false;
    
    let legalMoves = [];
    if ( board[origin].toLowerCase() === 'r' || board[origin].toLowerCase() === 'q') legalMoves = legalMoves.concat(rook(board, origin));


    // remove this later, it's just to allow moves other than rooks
    if ( board[origin].toLowerCase() !== 'r' && board[origin].toLowerCase() !== 'q' ) return true;

    if ( legalMoves.includes(destination) ) return true;
    return false;
}

function rook (board, origin) {
    let legalMoves = [];
    let hasTouchedPiece = false;
    // loop upwards starting at origin until i < 0 or has touched a piece
    for ( let i = origin; i >= 0 && !hasTouchedPiece; i -= 8 ) {
        legalMoves.push(i);
        if ( i !== origin && board[i] !== '') hasTouchedPiece = true;
    }

    hasTouchedPiece = false;
    
    //down
    for ( let i = origin; i <= 63 && !hasTouchedPiece; i += 8) {
        legalMoves.push(i);
        if ( i !== origin && board[i] !== '') hasTouchedPiece = true;
    }

    hasTouchedPiece = false;

    // right
    for ( let i = origin; i <= origin - (origin%8) + 7 && !hasTouchedPiece; i++ ) {
        legalMoves.push(i);
        if ( i !== origin && board[i] !== '') hasTouchedPiece = true;
    }

    hasTouchedPiece = false;

    // left
    for ( let i = origin; i >= origin - origin%8 && !hasTouchedPiece; i-- ) {
        legalMoves.push(i);
        if ( i !== origin && board[i] !== '') hasTouchedPiece = true;
    }

    return legalMoves;
}