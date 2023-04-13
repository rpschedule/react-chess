import getLegalMoves from "./getLegalMoves";

/**
 * @param {array} board
 * @param {integer} origin - The index of the origin
 * @returns {board} - highlighted: 0 (no highlight), 1 (normal highlight), or 2 (capture highlight)
 */
export default function highlightLegalMoves (board, origin) {
    const legalMoves = getLegalMoves(board, origin).moves;

    return board.map((square, index) => Object.assign(square, {
        // if legal moves includes index and board[index] is not empty, return 2
        // if legal moves includes index and board[index] is empty, return 1
        // if legal moves does not inclue index, return 0
        highlighted: (legalMoves.includes(index) ? (board[index].piece !== '') ? 2 : 1 : 0)
    }));
}