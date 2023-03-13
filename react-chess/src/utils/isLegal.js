export default function isLegal (board, origin, destination) {
    let legalMoves = [];
    if ( board[origin].toLowerCase() === 'r' || board[origin].toLowerCase() === 'q') legalMoves = legalMoves.concat(rook(board, origin));

    if ( legalMoves.includes(destination)) return true;
    return false;
}

function rook (board, origin) {
    let legalMoves = [];
    let hasTouchedPiece = false;
    // loop upwards starting at origin until i < 0 or has touched a piece
    for ( let i = origin; i < 0 || hasTouchedPiece; i -= 8 ) {
        legalMoves.push(i);
        if ( board[i] !== '') hasTouchedPiece = true;
    }

    hasTouchedPiece = false;
    
    for ( let i = origin; i > 63 || hasTouchedPiece; i += 8) {
        legalMoves.push(i);
        if ( board[i] !== '') hasTouchedPiece = true;
    }

    return legalMoves;
}