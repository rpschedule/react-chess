import getLegalMoves from './getLegalMoves.js'

export default function move(board, origin, destination) {
    // prevents deleting pieces
    if ( origin === destination ) return board;

    const { moves, piecesTaken } = getLegalMoves(board, origin) // moves = [15, 16, ...] & piecesTaken = [15, 16, ...]

    // prevents players from deleting pieces and checks for legality
    if ( board[origin].piece !== '' && moves.includes(destination)) { 

        // resets pawnjustmovedtwice after one turn
        board = board.map((square) => Object.assign(square, { 
            pawnJustMovedTwice: false,
        }))

        // change the square that will be taken
        board[piecesTaken[moves.indexOf(destination)]] = Object.assign(board[piecesTaken[moves.indexOf(destination)]], {
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
    }
    
    return board;
}