import getPseudoLegalMoves from "./getPseudoLegalMoves";

export default function getLegalMoves (board, origin) {
    const { moves, piecesTaken } = getPseudoLegalMoves(board, origin);
    let legalMoves = [];
    let legalPiecesTaken = [];

    // console.log(1)
    // for ( const moveIndex in moves ) {
    //     console.log(2)
    //     const tmpBoard = hardMove(board, origin, moves[moveIndex], piecesTaken[moveIndex])

    //     console.log(3)
    //     for ( const index in tmpBoard ) {
    //         // filter empty squares
    //         if ( tmpBoard[index].piece === '') {
    //             console.log(4)
    //             const { unusedVarible, taken } = getPseudoLegalMoves(board, index)
    //             const indexOfKing = tmpBoard.find(square => square.piece === 'k' && square.pieceColor === board[origin].pieceColor);
    //             console.log(5)

    //             // if taken pieces does not include the king, add it to legal moves
    //             if ( !taken.includes(indexOfKing) ) {
    //                 tmpBoard.push(moves[moveIndex]);
    //                 console.log(6)
    //             }
    //         }
    //     }
    // }

    // console.log(legalMoves)
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