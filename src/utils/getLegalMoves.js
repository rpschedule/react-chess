import getPseudoLegalMoves from "./getPseudoLegalMoves"
export default function getLegalMoves(board, origin) {
    const { moves, piecesTaken } = getPseudoLegalMoves(board, origin);
    let legalMoves = [];
    let legalPiecesTaken = [];

    for (let i = 0; i < moves.length; i++) {
        let tmpBoard = hardMove(board, origin, moves[i], piecesTaken[i]); // this is the problem

        let kingTaken = false;
        for ( let squareIndex = 0; squareIndex < tmpBoard.length && !kingTaken; squareIndex++ ) {
            if ( tmpBoard[squareIndex].pieceColor !== board[origin].pieceColor ) {
                const testPiecesTaken = getPseudoLegalMoves(tmpBoard, squareIndex).piecesTaken;

                for ( let moveIndex = 0; moveIndex < testPiecesTaken.length && !kingTaken; moveIndex++ ) {
                    if ( tmpBoard[testPiecesTaken[moveIndex]].piece === 'k') {
                        kingTaken = true;
                    }
                }
            }
        }

        legalMoves.push(moves[i]);
        legalPiecesTaken.push(piecesTaken[i])
    }

    return { legalMoves, legalPiecesTaken }
}

function hardMove(board, origin, destination, pieceTaken) {
    let out = [...board];

    // resets pawnjustmovedtwice after one turn
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