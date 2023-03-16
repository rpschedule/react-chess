export default function isLegal (board, origin, destination) {
    
    let legalMoves = [];
    if ( board[origin].piece === 'r' || board[origin].piece === 'q') legalMoves = legalMoves.concat(rook(board, origin));
    if ( board[origin].piece === 'b' || board[origin].piece === 'q') legalMoves = legalMoves.concat(bishop(board, origin));

    console.log(legalMoves)

    // remove this later, it's just to allow moves other than rooks, queens, and bishops
    if (  !/r|q|b/.test(board[origin].piece) ) return true;

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

    console.log('legalMoves', legalMoves)
    return legalMoves;
}

function knight (board, origin) {
    let legalMoves = [];

    // uppermost right
    if ( board[origin - 15] >= 0 && board[origin - 15] <= 63 && board[origin].pieceColor !== board[origin].pieceColor) legalMoves.push(origin - 15);
}