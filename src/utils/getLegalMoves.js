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

function hardMove(board1, origin1, destination1, pieceTaken1) {
    let out1 = board1;

    // resets pawnjustmovedtwice after one turn
    out1 = out1.map((square) => Object.assign(square, {
        pawnJustMovedTwice: false,
    }))

    out1[pieceTaken1] = Object.assign(out1[pieceTaken1], {
        piece: '',
        pieceColor: '',
    });

    out1[destination1] = Object.assign(out1[destination1], {
        piece: board1[origin1].piece,
        pieceColor: board1[origin1].pieceColor,
        hasMoved: true,
        pawnJustMovedTwice: (origin1 - 16 === destination1 || origin1 + 16 === destination1) && board1[origin1].piece === 'p',
    })

    out1[origin1] = Object.assign(out1[origin1], {
        piece: '',
        pieceColor: '',
    });

    return out1;
}