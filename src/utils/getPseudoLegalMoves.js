/***
 * @param {array} board -- The chess board
 * @param {}
 */
export default function getPseudoLegalMoves (board, origin) {

    let legalMoves = [];
    if ( board[origin].piece === 'r' || board[origin].piece === 'q') legalMoves = legalMoves.concat(rook(board, origin));
    if ( board[origin].piece === 'b' || board[origin].piece === 'q') legalMoves = legalMoves.concat(bishop(board, origin));
    if ( board[origin].piece === 'n' ) legalMoves = legalMoves.concat(knight(board, origin));
    if ( board[origin].piece === 'p' ) legalMoves = legalMoves.concat(pawn(board, origin));
    if ( board[origin].piece === 'k') legalMoves = legalMoves.concat(king(board, origin))
    
    //return an array of objects

    const moves = legalMoves.map((move) => move.move);
    const piecesTaken = legalMoves.map((move) => move.pieceTaken);

    return { moves, piecesTaken };
}

function rook (board, origin) {
    let legalMoves = [];
    let hasTouchedPiece = false;

    // Possible micro-optimization: initiate i as origin - 8 and cut out checking that i !== origin
    // loop upwards starting at origin until i < 0 or has touched a piece
    for ( let i = origin; i >= 0 && !hasTouchedPiece; i -= 8 ) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push({ move: i, pieceTaken: i });
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    hasTouchedPiece = false;
    
    //down
    for ( let i = origin; i <= 63 && !hasTouchedPiece; i += 8) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push({ move: i, pieceTaken: i });
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    hasTouchedPiece = false;

    // right
    for ( let i = origin; i <= origin - (origin%8) + 7 && !hasTouchedPiece; i++ ) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push({ move: i, pieceTaken: i });
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    hasTouchedPiece = false;

    // left
    for ( let i = origin; i >= origin - origin%8 && !hasTouchedPiece; i-- ) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push({ move: i, pieceTaken: i });
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    return legalMoves;
}

function bishop (board, origin) {
    let legalMoves = [];
    let hasTouchedPiece = false;

    // upper right
    for ( let i = origin; i > 0 && !hasTouchedPiece && board[i].squareColor === board[origin].squareColor; i -= 7) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push({ move: i, pieceTaken: i });
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    hasTouchedPiece = false;

    // lower right potentially needs to be changed to <=
    for ( let i = origin; i < 63 && !hasTouchedPiece && board[i].squareColor === board[origin].squareColor; i += 9) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push({ move: i, pieceTaken: i });
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    hasTouchedPiece = false;
    
    // lower left
    for ( let i = origin; i < 63 && !hasTouchedPiece && board[i].squareColor === board[origin].squareColor; i += 7) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push({ move: i, pieceTaken: i });
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    hasTouchedPiece = false;
        
    //upper left
    for ( let i = origin; i > 0 && !hasTouchedPiece && board[i].squareColor === board[origin].squareColor; i -= 9) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push({ move: i, pieceTaken: i });
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    return legalMoves;
}

function knight (board, origin) {
    let legalMoves = [];

    // uppermost right
    if ( origin - 15 >= 0 && origin - 15 <= 63 && board[origin - 15].rank === board[origin].rank - 2 && board[origin].pieceColor !== board[origin - 15].pieceColor) legalMoves.push({ move: origin - 15, pieceTaken: origin - 15 });
    
    // rightmost upper
    if ( origin - 6 >= 0 && origin - 6 <= 63 && board[origin - 6].rank === board[origin].rank - 1 && board[origin].pieceColor !== board[origin  - 6].pieceColor) legalMoves.push({ move: origin  - 6, pieceTaken: origin - 6 });
    
    // rightmost lower
    if ( origin + 10 >= 0 && origin + 10 <= 63 && board[origin + 10].rank === board[origin].rank + 1 && board[origin].pieceColor !== board[origin + 10].pieceColor) legalMoves.push({ move: origin + 10, pieceTaken: origin + 10 });
    
    // lowermost right
    if ( origin + 17 >= 0 && origin + 17 <= 63 && board[origin + 17].rank === board[origin].rank + 2 && board[origin].pieceColor !== board[origin + 17].pieceColor) legalMoves.push({ move: origin + 17, pieceTaken: origin + 17 });
    
    // lowermost left
    if ( origin + 15 >= 0 && origin + 15 <= 63 && board[origin + 15].rank === board[origin].rank + 2 && board[origin].pieceColor !== board[origin + 15].pieceColor) legalMoves.push({ move: origin + 15, pieceTaken: origin + 15 });
    
    // leftmost bottom
    if ( origin + 6 >= 0 && origin + 6 <= 63 && board[origin + 6].rank === board[origin].rank + 1 && board[origin].pieceColor !== board[origin  + 6].pieceColor) legalMoves.push({ move: origin  + 6, pieceTaken: origin + 6 });
    
    // leftmost upper
    if ( origin - 10 >= 0 && origin - 10 <= 63 && board[origin - 10].rank === board[origin].rank - 1 && board[origin].pieceColor !== board[origin - 10].pieceColor) legalMoves.push({ move: origin - 10, pieceTaken: origin - 10 });
    
    // uppermost left
    if ( origin - 17 >= 0 && origin - 17 <= 63 && board[origin - 17].rank === board[origin].rank - 2 && board[origin].pieceColor !== board[origin - 17].pieceColor) legalMoves.push({ move: origin - 17, pieceTaken: origin - 17 });

    return legalMoves;
}

function pawn (board, origin) {
    let legalMoves = [];

    if ( board[origin].pieceColor === 'white') {
        if ( origin - 16 >= 0 && origin - 16 <= 63 && board[origin - 16].piece === '' && !board[origin].hasMoved ) legalMoves.push({ move: origin - 16, pieceTaken: origin - 16 }) // first move twice
        if ( origin - 8 >= 0 && origin - 8 <= 63 && board[origin - 8].piece === '' ) legalMoves.push({ move: origin - 8, pieceTaken: origin - 8 }) // move once
        if ( origin - 7 >= 0 && origin - 7 <= 63 && board[origin - 7].piece !== '' ) legalMoves.push({ move: origin - 7, pieceTaken: origin - 7 }) // take left
        if ( origin - 9 >= 0 && origin - 9 <= 63 && board[origin - 9].piece !== '' ) legalMoves.push({ move: origin - 9, pieceTaken: origin - 9 }) // take right
        if ( origin + 1 >= 0 && origin + 1 <= 63 && board[origin + 1].piece === 'p' && board[origin + 1].rank === board[origin].rank && board[origin + 1].pawnJustMovedTwice ) legalMoves.push({ move: origin - 7, pieceTaken: origin + 1 });
        if ( origin - 1 >= 0 && origin - 1 <= 63 && board[origin - 1].piece === 'p' && board[origin - 1].rank === board[origin].rank && board[origin - 1].pawnJustMovedTwice ) legalMoves.push({ move: origin - 9, pieceTaken: origin - 1 });
    }

    if ( board[origin].pieceColor === 'black') {
        if ( origin + 16 >= 0 && origin + 16 <= 63 && board[origin + 16].piece === '' && !board[origin].hasMoved ) legalMoves.push({ move: origin + 16, pieceTaken: origin + 16 }) // first move twice
        if ( origin + 8 >= 0 && origin + 8 <= 63 && board[origin + 8].piece === '' ) legalMoves.push({ move: origin + 8, pieceTaken: origin + 8 }) // move once
        if ( origin + 7 >= 0 && origin + 7 <= 63 && board[origin + 7].piece !== '' ) legalMoves.push({ move: origin + 7, pieceTaken: origin + 7 }) // take left
        if ( origin + 9 >= 0 && origin + 9 <= 63 && board[origin + 9].piece !== '' ) legalMoves.push({ move: origin + 9, pieceTaken: origin + 9 }) // take right
        if ( origin - 1 >= 0 && origin - 1 <= 63 && board[origin - 1].piece === 'p' && board[origin - 1].rank === board[origin].rank && board[origin - 1].pawnJustMovedTwice ) legalMoves.push({ move: origin + 7, pieceTaken: origin - 1 });
        if ( origin + 1 >= 0 && origin + 1 <= 63 && board[origin + 1].piece === 'p' && board[origin + 1].rank === board[origin].rank && board[origin + 1].pawnJustMovedTwice ) legalMoves.push({ move: origin + 9, pieceTaken: origin + 1 });
    }

    return legalMoves;
}

// TODO: stop king and other pieces from putting the king in check
function king (board, origin) {
    let legalMoves = [];

    if ( origin - 9 >= 0 && origin - 9 <= 63 && board[origin - 9].pieceColor !== board[origin].pieceColor ) legalMoves.push({ move: origin - 9, pieceTaken: origin - 9 });
    if ( origin - 8 >= 0 && origin - 8 <= 63 && board[origin - 8].pieceColor !== board[origin].pieceColor ) legalMoves.push({ move: origin - 8, pieceTaken: origin - 8 });
    if ( origin - 7 >= 0 && origin - 7 <= 63 && board[origin - 7].pieceColor !== board[origin].pieceColor ) legalMoves.push({ move: origin - 7, pieceTaken: origin - 7 });
    if ( origin - 1 >= 0 && origin - 1 <= 63 && board[origin - 1].pieceColor !== board[origin].pieceColor ) legalMoves.push({ move: origin - 1, pieceTaken: origin - 1 });
    if ( origin + 1 >= 0 && origin + 1 <= 63 && board[origin + 1].pieceColor !== board[origin].pieceColor ) legalMoves.push({ move: origin + 1, pieceTaken: origin + 1 });
    if ( origin + 7 >= 0 && origin + 7 <= 63 && board[origin + 7].pieceColor !== board[origin].pieceColor ) legalMoves.push({ move: origin + 7, pieceTaken: origin + 7 });
    if ( origin + 8 >= 0 && origin + 8 <= 63 && board[origin + 8].pieceColor !== board[origin].pieceColor ) legalMoves.push({ move: origin + 8, pieceTaken: origin + 8 });
    if ( origin + 9 >= 0 && origin + 9 <= 63 && board[origin + 9].pieceColor !== board[origin].pieceColor ) legalMoves.push({ move: origin + 9, pieceTaken: origin + 9 });

    return legalMoves;
}