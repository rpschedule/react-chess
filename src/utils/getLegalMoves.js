import getPseudoLegalMoves from "./getPseudoLegalMoves";

export default function getLegalMoves (board, origin) {
    const { moves, piecesTaken } = getPseudoLegalMoves(board, origin);
    let legalMoves = [];
    let legalPiecesTaken = [];


    for ( const move in moves ) {
        let tmpBoard = hardMove(board, origin, moves[move], piecesTaken[move])
        let kingWasTaken = false;

        for ( const square in tmpBoard ) {
            if ( tmpBoard[square].piece !== '' && tmpBoard[square]?.pieceColor !== tmpBoard[moves[move]]?.pieceColor) {
                const { responseMoves, responsePiecesTaken } = getPseudoLegalMoves(tmpBoard, Number(square))

                for ( const responseMove in responseMoves ) {
                    if ( responsePiecesTaken[responseMove].piece === 'k' ) {
                        kingWasTaken = true;
                    }
                }
            }
        }


        if ( !kingWasTaken ) {
            legalMoves.push(moves[move]);
            legalPiecesTaken.push(piecesTaken[move]);
        }

    }


    return { moves, piecesTaken };
}

// differs to move() as hardMove() does not check to make sure the move is legal
// this function is solely here to prevent an infinite loop
function hardMove (board, origin, destination, pieceTaken) {
    // resets pawnjustmovedtwice after one turn

    let out = board;

    out = out.map((square) => Object.assign(square, { 
        pawnJustMovedTwice: false,
    }))

    out[pieceTaken] = Object.assign(out[pieceTaken], {
        piece: '',
        pieceColor: '',
    });

    out[destination] = Object.assign(out[destination], {
        piece: board[origin].piece,
        pieceColor: board[origin].pieceColor,
        hasMoved: true,
        pawnJustMovedTwice: (origin - 16 === destination || origin + 16 === destination) && board[origin].piece === 'p',
    })

    out[origin] = Object.assign(out[origin], {
        piece: '',
        pieceColor: '',
    });

    return out;
}