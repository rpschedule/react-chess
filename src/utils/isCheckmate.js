import getLegalMoves from "./getLegalMoves";

export default function isCheckmate ( board, turnColor ) {
    for ( const i in board ) {
        getLegalMoves(board, i)
    }
}