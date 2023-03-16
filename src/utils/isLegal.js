export default function isLegal (board, origin, destination) {
    
    let legalMoves = [];
    if ( board[origin].piece === 'r' || board[origin].piece === 'q') legalMoves = legalMoves.concat(rook(board, origin));
    if ( board[origin].piece === 'b' || board[origin].piece === 'q') legalMoves = legalMoves.concat(bishop(board, origin));
    if ( board[origin].piece === 'n' ) legalMoves = legalMoves.concat(knight(board, origin));
    
    // remove this later, it's just to allow moves other than rooks, queens, and bishops
    if (  !/r|q|b|n/.test(board[origin].piece) ) return true;

    if ( legalMoves.includes(destination) ) return true;
    return false;
}

function rook (board, origin) {
    let legalMoves = [];
    let hasTouchedPiece = false;

    // Possible micro-optimization: initiate i as origin - 8 and cut out checking that i !== origin
    // loop upwards starting at origin until i < 0 or has touched a piece
    for ( let i = origin; i >= 0 && !hasTouchedPiece; i -= 8 ) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push(i);
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    hasTouchedPiece = false;
    
    //down
    for ( let i = origin; i <= 63 && !hasTouchedPiece; i += 8) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push(i);
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    hasTouchedPiece = false;

    // right
    for ( let i = origin; i <= origin - (origin%8) + 7 && !hasTouchedPiece; i++ ) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push(i);
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    hasTouchedPiece = false;

    // left
    for ( let i = origin; i >= origin - origin%8 && !hasTouchedPiece; i-- ) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push(i);
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    return legalMoves;
}

function bishop (board, origin) {
    let legalMoves = [];
    let hasTouchedPiece = false;

    // upper right
    for ( let i = origin; i > 0 && !hasTouchedPiece && board[i].squareColor === board[origin].squareColor; i -= 7) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push(i);
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    hasTouchedPiece = false;

    // lower right potentially needs to be changed to <=
    for ( let i = origin; i < 63 && !hasTouchedPiece && board[i].squareColor === board[origin].squareColor; i += 9) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push(i);
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    hasTouchedPiece = false;
    
    // lower left
    for ( let i = origin; i < 63 && !hasTouchedPiece && board[i].squareColor === board[origin].squareColor; i += 7) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push(i);
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    hasTouchedPiece = false;
        
    //upper left
    for ( let i = origin; i > 0 && !hasTouchedPiece && board[i].squareColor === board[origin].squareColor; i -= 9) {
        if ( i !== origin && board[origin].pieceColor !== board[i].pieceColor ) legalMoves.push(i);
        if ( i !== origin && board[i].piece !== '' ) hasTouchedPiece = true;
    }

    return legalMoves;
}

function knight (board, origin) {
    let legalMoves = [];

    // uppermost right
    if ( origin - 15 >= 0 && origin - 15 <= 63 && board[origin - 15].rank === board[origin].rank - 2 && board[origin].pieceColor !== board[origin - 15].pieceColor) legalMoves.push(origin - 15);

    // rightmost upper
    if ( origin - 6 >= 0 && origin - 6 <= 63 && board[origin - 6].rank === board[origin].rank - 1 && board[origin].pieceColor !== board[origin  - 6].pieceColor) legalMoves.push(origin  - 6);
    
    // rightmost lower
    if ( origin + 10 >= 0 && origin + 10 <= 63 && board[origin + 10].rank === board[origin].rank + 1 && board[origin].pieceColor !== board[origin + 10].pieceColor) legalMoves.push(origin + 10);

    // lowermost right
    if ( origin + 17 >= 0 && origin + 17 <= 63 && board[origin + 17].rank === board[origin].rank + 2 && board[origin].pieceColor !== board[origin + 17].pieceColor) legalMoves.push(origin + 17);

    // lowermost left
    if ( origin + 15 >= 0 && origin + 15 <= 63 && board[origin + 15].rank === board[origin].rank + 2 && board[origin].pieceColor !== board[origin + 15].pieceColor) legalMoves.push(origin + 15);

    // leftmost bottom
    if ( origin + 6 >= 0 && origin + 6 <= 63 && board[origin + 6].rank === board[origin].rank + 1 && board[origin].pieceColor !== board[origin  + 6].pieceColor) legalMoves.push(origin  + 6);

    // leftmost upper
    if ( origin - 10 >= 0 && origin - 10 <= 63 && board[origin - 10].rank === board[origin].rank - 1 && board[origin].pieceColor !== board[origin - 10].pieceColor) legalMoves.push(origin - 10);

    // uppermost left
    if ( origin - 17 >= 0 && origin - 17 <= 63 && board[origin - 17].rank === board[origin].rank - 2 && board[origin].pieceColor !== board[origin - 17].pieceColor) legalMoves.push(origin - 17);


    console.log(legalMoves)
    return legalMoves;
}