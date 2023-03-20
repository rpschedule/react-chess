import getPseudoLegalMoves from "./getPseudoLegalMoves";

export default function getLegalMoves (board, origin) {
    const { moves, piecesTaken } = getPseudoLegalMoves(board, origin);
    let legalMoves = [];
    let legalPiecesTaken = [];

    for ( const move in moves ) {
        let tmpBoard = hardMove(board, origin, moves[move], piecesTaken[move])
        let kingWasTaken = false;

        for ( const square in tmpBoard ) {
            if ( tmpBoard[square].piece !== '' && tmpBoard[square].pieceColor !== tmpBoard[moves[move]].pieceColor) {
                const { responseMoves, responsePiecesTaken } = getPseudoLegalMoves(tmpBoard, square)

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

    alert(moves, piecesTaken)
    return { moves, piecesTaken };
}

// differs to move() as hardMove() does not check to make sure the move is legal
// this function is solely here to prevent an infinite loop
function hardMove (board, origin, destination, pieceTaken) {
    // resets pawnjustmovedtwice after one turn
    let tmpBoard = board;

    tmpBoard = tmpBoard.map((square) => Object.assign(square, { 
        pawnJustMovedTwice: false,
    }))

    // change the square that will be taken
    tmpBoard[pieceTaken] = Object.assign(tmpBoard[pieceTaken], {
        piece: '',
        pieceColor: '',
    });

    // move the piece to the destination, has to be after
    // removing the piece taken so it doesn't dissapear
    tmpBoard[destination] = Object.assign(tmpBoard[destination], {
        piece: tmpBoard[origin].piece,
        pieceColor: tmpBoard[origin].pieceColor,
        pawnJustMovedTwice: (origin - 16 === destination || origin + 16 === destination) && tmpBoard[origin].piece === 'p',
    })

    // remove the piece from the origin to prevent duplication
    tmpBoard[origin] = Object.assign(tmpBoard[origin], {
        piece: '',
        pieceColor: '',
    });
    
    return tmpBoard;
}