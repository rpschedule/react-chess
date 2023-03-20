import getPseudoLegalMoves from "./getPseudoLegalMoves";

export default function getLegalMoves (board, origin) {
    const { moves, piecesTaken } = getPseudoLegalMoves(board, origin);
    let legalMoves = [];
    let legalPiecesTaken = [];

    for ( move in moves ) {
        board = hardMove(board, origin, moves[move], piecesTaken[move])

        for ( square in board ) {
            if ( board[square].pieceColor !== board[moves[move]].pieceColor) {
                const { responseMoves, responsePiecesTaken } = getPseudoLegalMoves(board, square)
            }
        }
    }

    return { moves, piecesTaken };
}

// differs to move() as hardMove() does not check to make sure the move is legal
// this function is solely here to prevent an infinite loop
function hardMove (board, origin, destination, pieceTaken) {
    // resets pawnjustmovedtwice after one turn
    board = board.map((square) => Object.assign(square, { 
        pawnJustMovedTwice: false,
    }))

    // change the square that will be taken
    board[pieceTaken] = Object.assign(board[pieceTaken], {
        piece: '',
        pieceColor: '',
    });

    // move the piece to the destination, has to be after
    // removing the piece taken so it doesn't dissapear
    board[destination] = Object.assign(board[destination], {
        piece: board[origin].piece,
        pieceColor: board[origin].pieceColor,
        pawnJustMovedTwice: (origin - 16 === destination || origin + 16 === destination) && board[origin].piece === 'p',
    })

    // remove the piece from the origin to prevent duplication
    board[origin] = Object.assign(board[origin], {
        piece: '',
        pieceColor: '',
    });
    
    return board;
}